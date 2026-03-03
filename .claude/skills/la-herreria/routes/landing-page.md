# Route: 🎯 Landing Page

> *"Convierte visitantes en leads. Una sola página, un solo objetivo."*

## Metadata

- **Modo:** 🎯 Landing Page
- **Descripción:** Página de alta conversión sin backend. Valida mensajería, capta leads o lanza una idea.
- **Tiempo estimado:** ~1 hora
- **Steps activos:** 4
- **Cuándo usar:** Cuando no necesitas app — solo una página que convierte

---

## Pipeline

```
Definición Rápida → Copywriting & Mensajería → Diseño Visual → SEO & Deploy
      Step 1               Step 2                  Step 3          Step 4
      10 min               20 min                  25 min          5 min
```

**No usa:** BMC completo, PDR, Tech Spec, UX Research, User Stories, UX Design, UI Workflow, Security Audit, Blueprint

---

### Step 1 · Definición Rápida

- **Asset:** Ninguno — entrevista directa
- **Output:** `LANDING-BRIEF-[nombre].md` (inline, no archivo separado — integrado en el proceso)
- **Tiempo:** ~10 min
- **Qué hace:** Captura lo esencial para construir la landing en una conversación rápida
- **Preguntas clave:**
  1. *"¿Qué es exactamente lo que ofreces? Una frase."*
  2. *"¿A quién va dirigido? Describe a esa persona."*
  3. *"¿Cuál es el mayor dolor/problema que resuelves?"*
  4. *"¿Cuál es el CTA principal? (registrarse, comprar, agendar llamada, unirse a waitlist)"*
  5. *"¿Tienes prueba social? (testimonios, logos de clientes, métricas)"*
  6. *"¿Hay urgencia o escasez? (early access, precio especial por tiempo limitado)"*
  7. *"¿Tono? (profesional, casual, técnico, aspiracional)"*

---

### Step 2 · Copywriting & Mensajería

- **Asset:** `assets/copywriting-cro.md`
- **Output:** `COPY-[nombre].md` con toda la jerarquía de mensajería
- **Tiempo:** ~20 min
- **Qué hace:** Genera el copy completo de la landing — desde la definición de mensajería central hasta cada sección del cuerpo, formulario y CTAs
- **Inputs requeridos:** `LANDING-BRIEF-[nombre].md` del Step 1
- **Adaptación para Landing:**
  - Primero definir la jerarquía de mensajes: Pain / Gain / Differentiator / Proof / CTA
  - 3 variaciones de headline para elegir (Outcome / Problem / Differentiation)
  - Psicología aplicada en cada sección (Loss Aversion, Social Proof, Goal-Gradient)
  - Form CRO: mínimo de campos necesarios según el tipo de landing

---

### Step 3 · Diseño Visual

- **Asset:** `assets/front-end-design.md` → luego `assets/08-ui.md`
- **Output:** Componente `LandingPage` en `src/app/page.tsx` (o `src/features/landing/`)
- **Tiempo:** ~25 min
- **Qué hace:** Landing page visualmente distintiva con el copy del Step 2
- **Inputs requeridos:** `COPY-[nombre].md` (o brief del Step 1)
- **Adaptación para Landing:**
  - Estructura de secciones: Hero → Pain → Solution → Features → Social Proof → Pricing → FAQ → CTA Final
  - Leer `front-end-design.md` para principios anti-AI-slop
  - Una sola column layout para máximo focus
  - Mobile-first: la mayoría de tráfico llega desde móvil
  - Performance: imágenes optimizadas, LCP < 2.5s
  - **No construir:** auth, base de datos, backend — solo HTML/CSS/JS estático o Next.js con Server Components

---

### Step 4 · SEO & Deploy

- **Asset:** `assets/seo-landing.md`
- **Output:** Landing desplegada con URL pública + SEO implementado
- **Tiempo:** ~10 min
- **Qué hace:** Implementa metadata completa, schema markup, robots.txt con acceso a bots de IA, Core Web Vitals checklist, deploy a Vercel y analytics básico
- **Inputs requeridos:** `COPY-[nombre].md` (para title, description, keywords) + landing implementada del Step 3
- **Adaptación para Landing:**
  - `metadata` export en `layout.tsx`: title, description, og:image, twitter:card
  - JSON-LD: Organization + SoftwareApplication/WebPage + FAQPage (si aplica)
  - `public/robots.txt` con GPTBot, PerplexityBot, ClaudeBot, Google-Extended habilitados
  - Verificar LCP < 2.5s con `<Image priority>` en hero
  - Deploy con `vercel --prod` o push a main

---

## Outputs Finales

| Entregable | Generado en |
|-----------|-------------|
| `COPY-[nombre].md` (mensajería completa) | Step 2 |
| `src/app/page.tsx` (landing implementada) | Step 3 |
| URL pública en Vercel | Step 4 |

---

## Arquitectura Técnica (Mínima)

```
mi-landing/
├── src/
│   └── app/
│       ├── page.tsx          ← Landing page component
│       ├── layout.tsx        ← Metadata + fonts
│       └── globals.css       ← Tailwind base
├── public/
│   ├── og-image.png          ← Open Graph image (1200×630)
│   └── favicon.ico
└── next.config.ts
```

**No necesitas:**
- Supabase (a menos que tengas formulario de waitlist)
- Auth
- Base de datos
- API routes (excepto para el formulario de contacto/waitlist)

**Excepción — Si hay formulario de captación:**
Agregar una API route mínima: `src/app/api/waitlist/route.ts` que guarda el email en Supabase o lo envía a Resend/Mailchimp.

---

## Qué se Omite y Por Qué

| Elemento omitido | Razón |
|-----------------|-------|
| BMC / PDR | La landing es el experimento — el business model se define si convierte |
| UX Research | Una landing tiene un usuario objetivo claro desde el brief |
| User Stories | No hay features — hay secciones y un CTA |
| UX Design | La landing tiene estructura estándar probada — no necesita IA nueva |
| Security Audit | No hay datos sensibles ni backend complejo |
| Blueprint | La landing se construye y se itera — no necesita plan de fases |

---

---

*"La mejor landing page tiene una sola promesa, un solo CTA, y cero distracciones."*
