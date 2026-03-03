# Security Checklist

## What Is a Security Audit?

A structured review of the application's code and architecture against established security principles. Run it BEFORE generating the Blueprint — catching vulnerabilities at this stage is free. Catching them post-launch means breach response, user data loss, and reputation damage.

This is not a penetration test (that requires runtime access). It is a code and configuration review: Are the patterns correct? Are the dangerous practices absent? Are the defaults secure?

---

## Severity Scale (CVSS Simplified)

| Score | Severity | Meaning | Action |
|-------|----------|---------|--------|
| 9–10 | 🔴 Critical | Data breach, full system compromise possible | Block Blueprint — fix first |
| 7–8.9 | 🟠 High | Significant data exposure or auth bypass | Fix before Blueprint |
| 4–6.9 | 🟡 Medium | Exploitable under specific conditions | Fix in 30-day plan |
| 0.1–3.9 | 🔵 Low | Minimal real-world impact | Fix in 60-day plan |
| 0 | ✅ OK | No issue found | Document as reviewed |

**Blocking rule:** Any Critical finding (9–10) must be resolved before the Blueprint is generated. The Blueprint encodes architecture decisions — shipping with a critical vulnerability baked in is unacceptable.

---

## OWASP Top 10 2025

### A01 — Broken Access Control

**What it is:** Users can act beyond their intended permissions (access other users' data, perform admin actions, escalate privileges).

**In Next.js/Supabase context:**
- Missing or misconfigured Row Level Security (RLS) policies in Supabase
- API routes that trust client-provided user IDs without verifying against the session
- Admin endpoints with no role check
- Missing `auth.uid()` in RLS policies that should filter by owner

**How to verify:**
```sql
-- In Supabase: check which tables have RLS enabled
SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';
-- Every table with user data must show rowsecurity = true
```
```typescript
// RED FLAG: trusting client-provided ID
const { data } = await supabase.from('invoices').select('*').eq('user_id', body.userId)
// CORRECT: using the authenticated session
const { data: { user } } = await supabase.auth.getUser()
const { data } = await supabase.from('invoices').select('*').eq('user_id', user.id)
```

**Severity if found:** Critical (9) if user data is directly accessible cross-tenant.

---

### A02 — Cryptographic Failures

**What it is:** Sensitive data exposed in transit or at rest due to missing or weak encryption.

**In Next.js/Supabase context:**
- Secrets stored in localStorage or cookies without httpOnly
- Passwords stored as plaintext (Supabase handles hashing — verify you're using Supabase Auth, not rolling your own)
- API keys or tokens logged to console or stored in the database
- HTTP endpoints (not HTTPS) — Vercel enforces HTTPS, but check custom domains

**How to verify:**
```bash
# Search for sensitive data in logs
grep -r "console.log" src/ | grep -i "token\|password\|secret\|key"
# Search for localStorage with tokens
grep -r "localStorage" src/ | grep -i "token\|auth\|session"
```

**Severity if found:** Critical (9) if passwords or tokens stored insecurely.

---

### A03 — Injection

**What it is:** Attacker-controlled data interpreted as code or commands (SQL injection, XSS, command injection).

**In Next.js/Supabase context:**
- Supabase client uses parameterized queries by default — SQL injection is unlikely if using the SDK
- XSS via `dangerouslySetInnerHTML` without sanitization
- Server-side template injection if using string concatenation to build queries
- Server actions receiving unvalidated input

**How to verify:**
```bash
# Find dangerouslySetInnerHTML usage
grep -r "dangerouslySetInnerHTML" src/
# Find raw query strings (not using SDK patterns)
grep -r "\.rpc\|\.query\|executeQuery" src/
```
```typescript
// RED FLAG: unvalidated input in server action
export async function createItem(data: FormData) {
  const name = data.get('name') // No validation
  await supabase.from('items').insert({ name })
}
// CORRECT: validate with Zod before using
const schema = z.object({ name: z.string().min(1).max(200) })
const validated = schema.parse(Object.fromEntries(data))
```

**Severity if found:** High (8) for XSS, Critical (10) for SQLi if found.

---

### A04 — Insecure Design

**What it is:** Architecture and design flaws that cannot be fixed by code — they require redesign.

**In Next.js/Supabase context:**
- No rate limiting on auth endpoints (brute force possible)
- No limit on resource creation (one user can create unlimited records, causing DoS)
- Password reset flows that allow account enumeration
- Business logic that can be abused (e.g., applying a discount code unlimited times)

**How to verify:** Review the flows, not just the code. Ask: "What happens if a user calls this endpoint 1000 times?"

**Severity if found:** High (7) for rate limiting absence, Medium (5) for business logic abuse.

---

### A05 — Security Misconfiguration

**What it is:** Default configurations that are insecure, unnecessary features enabled, missing security headers.

**In Next.js/Supabase context:**
- Missing HTTP security headers (CSP, HSTS, X-Frame-Options)
- CORS too permissive (`*` when specific origins should be allowed)
- Supabase RLS disabled on tables
- Error messages exposing stack traces in production
- `next.config.ts` missing security headers

**How to verify:**
```typescript
// next.config.ts — security headers must be present
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "default-src 'self'..." },
]
```

**Severity if found:** Medium (6) for missing headers, High (8) for disabled RLS.

---

### A06 — Vulnerable and Outdated Components

**What it is:** Dependencies with known vulnerabilities.

**How to verify:**
```bash
npm audit
# Check for high/critical severity advisories
npm audit --audit-level=high
```

Also check: Are AI-generated `package.json` additions reviewed? Does any dep look suspicious (typosquatting pattern)?

**Severity if found:** Depends on CVE severity — inherit from the advisory score.

---

### A07 — Identification and Authentication Failures

**What it is:** Broken auth — weak passwords allowed, no MFA, session tokens exposed, auth bypass.

**In Next.js/Supabase context:**
- JWT tokens stored in localStorage (XSS attack vector) instead of httpOnly cookies
- No session expiry configured
- Supabase session not validated server-side in API routes (trusting client-side session)
- Auth state checked only client-side (`useUser()`) without server-side validation

**How to verify:**
```typescript
// RED FLAG: API route trusting client-provided auth without server validation
export async function GET(req: Request) {
  const userId = req.headers.get('x-user-id') // Attacker can set this!
}
// CORRECT: validate server-side
export async function GET(req: Request) {
  const supabase = createServerClient(...)
  const { data: { user }, error } = await supabase.auth.getUser()
  if (!user || error) return new Response('Unauthorized', { status: 401 })
}
```

**Severity if found:** Critical (9) for auth bypass, High (7) for token storage issues.

---

### A08 — Software and Data Integrity Failures

**What it is:** Code and data integrity assumptions without verification — untrusted deserialization, unsigned updates.

**In Next.js/Supabase context:**
- Webhook endpoints not verifying the signature (e.g., Stripe webhooks without `stripe.webhooks.constructEvent()`)
- Deserializing user-provided JSON without schema validation
- Trusting `req.body` without Zod validation

**How to verify:**
```bash
grep -r "req.body\|request.json()" src/app/api/ | grep -v "schema\|parse\|validate"
```

**Severity if found:** High (8) for unsigned webhooks (payment manipulation possible).

---

### A09 — Security Logging and Monitoring Failures

**What it is:** Insufficient logging means breaches go undetected for months.

**In Next.js/Supabase context:**
- No logging of failed auth attempts
- No logging of admin actions
- No alerting on anomalous patterns
- Logs contain PII (GDPR/CCPA risk)

**How to verify:** Check if there's any structured logging. If `console.log` is the only logging mechanism, this is a gap.

**Severity if found:** Medium (5) — not directly exploitable but increases breach impact.

---

### A10 — Server-Side Request Forgery (SSRF)

**What it is:** Attacker tricks the server into making requests to internal systems.

**In Next.js/Supabase context:**
- API routes that fetch URLs provided by the user without validation
- AI features that use user-provided URLs as inputs to `fetch()`

**How to verify:**
```bash
grep -r "fetch(" src/app/api/ | grep -v "supabase\|openai\|anthropic"
# Review any remaining fetch calls — do they use user-provided URLs?
```

**Severity if found:** High (8) if internal Supabase endpoints could be reached.

---

## Authentication & Authorization Checklist

```
Auth Storage
[ ] JWT tokens in httpOnly cookies (not localStorage, not sessionStorage)
[ ] Supabase session handled server-side in API routes
[ ] No auth state relied upon exclusively client-side for data access decisions

RLS (Row Level Security)
[ ] RLS enabled on ALL tables with user data
[ ] Every RLS policy uses auth.uid() — not a client-provided parameter
[ ] Policies tested for cross-tenant access (can user A read user B's data?)
[ ] Service role key NEVER exposed to the client

Session Management
[ ] Session expiry configured (Supabase default: 1 hour — review for your threat model)
[ ] Refresh token rotation enabled
[ ] Logout actually invalidates the session server-side

Permissions
[ ] Role-based access if product has roles (admin, member, viewer)
[ ] API routes check permissions, not just authentication
[ ] Admin operations are not just client-side controlled
```

---

## Secrets Management Checklist

```
[ ] All secrets in .env.local (never committed)
[ ] .env.local in .gitignore
[ ] No secrets in next.config.ts (it's committed to git)
[ ] NEXT_PUBLIC_ variables contain ZERO secrets (they're exposed to the browser)
[ ] Supabase service role key only in server-side code (API routes, server actions)
[ ] Supabase anon key is the only Supabase credential on the client side
[ ] AI API keys (OpenRouter, Anthropic, OpenAI) only in server-side code
[ ] No secrets in console.log statements
[ ] No secrets hardcoded in any file
[ ] CI/CD environment variables set in Vercel dashboard, not in code
```

---

## Security Headers Configuration Template

Add to `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  // CSP: customize for your actual domains
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // unsafe-eval needed for Next.js dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' *.supabase.co wss://*.supabase.co",
    ].join('; ')
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

## Finding Report Template

Use this format for each security finding in `SECURITY-AUDIT-[name].md`:

```markdown
### SEC-[N] — [Short Title]

| Field | Value |
|-------|-------|
| **ID** | SEC-[N] |
| **OWASP** | A0X — [Category] |
| **Severity** | 🔴 Critical / 🟠 High / 🟡 Medium / 🔵 Low |
| **CVSS Score** | [0–10] |
| **Probability** | High / Medium / Low |
| **Status** | 🔴 Open / 🟡 Accepted / ✅ Resolved |

**Description:** [What the vulnerability is — specific, not generic]

**Evidence:** [File path, line number, or code snippet showing the issue]

**Impact:** [What an attacker could do if this is exploited]

**Recommendation:** [Specific fix — not "improve security" but "change X to Y"]
```
