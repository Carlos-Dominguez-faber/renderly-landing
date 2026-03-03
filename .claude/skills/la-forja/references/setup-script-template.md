# Template: Script de Setup (setup.sh)

El script se genera dinámicamente basándose en el número de agentes y si usa Supabase.

---

## Template Base

```bash
#!/bin/bash
set -e

# ═══════════════════════════════════════════════════════════
# LA FORJA — Setup de Sandboxes
# Proyecto: {{project_name}}
# Agentes: {{num_agents}}
# Supabase: {{uses_supabase}}
# ═══════════════════════════════════════════════════════════

REPO_DIR=$(cd "$(dirname "$0")/.." && pwd)
echo ""
echo "🔨 LA FORJA — Configurando {{num_agents}} sandboxes"
echo "📁 Repo: $REPO_DIR"
echo ""

# ─── Verificaciones ──────────────────────────────────────

# Verificar git
if ! command -v git &> /dev/null; then
    echo "❌ Git no encontrado. Instálalo primero."
    exit 1
fi

{{#if uses_supabase}}
# Verificar Docker
if ! docker info &> /dev/null 2>&1; then
    echo "❌ Docker no está corriendo. Abre Docker Desktop primero."
    exit 1
fi

# Verificar Supabase CLI
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI no encontrado. Instala con: brew install supabase/tap/supabase"
    exit 1
fi
{{/if}}

# Verificar que estamos en un repo git
if ! git rev-parse --is-inside-work-tree &> /dev/null 2>&1; then
    echo "❌ No estás dentro de un repositorio git."
    exit 1
fi

# ─── Crear Worktrees ─────────────────────────────────────

echo "🌿 Creando worktrees..."

{{#each agents}}
if [ -d "$REPO_DIR/../sandbox-{{index}}" ]; then
    echo "   sandbox-{{index}} ya existe, saltando..."
else
    git worktree add "$REPO_DIR/../sandbox-{{index}}" -b {{branch_name}}
    echo "   ✅ sandbox-{{index}} (branch: {{branch_name}})"
fi
{{/each}}

{{#if uses_supabase}}
# ─── Configurar Supabase por Sandbox ─────────────────────

echo ""
echo "⚙️  Configurando Supabase por sandbox..."

{{#each agents}}
echo "   Configurando sandbox-{{index}} (puertos {{port_base}}+)..."
cd "$REPO_DIR/../sandbox-{{index}}"

# Cambiar project_id
sed -i '' 's/project_id = ".*"/project_id = "sandbox-{{index}}"/' supabase/config.toml

{{#if (not_first)}}
# Cambiar puertos (sumando {{port_offset}} a los defaults)
sed -i '' 's/port = 54321/port = {{api_port}}/' supabase/config.toml
sed -i '' 's/port = 54322/port = {{db_port}}/' supabase/config.toml
sed -i '' 's/port = 54323/port = {{studio_port}}/' supabase/config.toml
sed -i '' 's/port = 54324/port = {{inbucket_port}}/' supabase/config.toml
sed -i '' 's/shadow_port = 54320/shadow_port = {{shadow_port}}/' supabase/config.toml
sed -i '' 's/port = 54329/port = {{pooler_port}}/' supabase/config.toml
sed -i '' 's/port = 54327/port = {{analytics_port}}/' supabase/config.toml
sed -i '' 's/inspector_port = 8083/inspector_port = {{inspector_port}}/' supabase/config.toml
sed -i '' 's|site_url = "http://localhost:3000"|site_url = "http://localhost:{{dev_port}}"|' supabase/config.toml
{{/if}}

{{/each}}

# ─── Levantar Supabase ───────────────────────────────────

echo ""
echo "🚀 Levantando instancias de Supabase..."
echo "   (Primera vez puede tardar 2-3 min por instancia)"
echo ""

{{#each agents}}
echo "   Levantando sandbox-{{index}}..."
cd "$REPO_DIR/../sandbox-{{index}}"
supabase start > /tmp/supabase-sandbox-{{index}}.log 2>&1

# Extraer keys del output
ANON_KEY_{{index}}=$(supabase status -o env | grep ANON_KEY | cut -d '=' -f2)
SERVICE_KEY_{{index}}=$(supabase status -o env | grep SERVICE_ROLE_KEY | cut -d '=' -f2)

# Crear .env.local
cat > .env.local << ENVEOF
NEXT_PUBLIC_SUPABASE_URL=http://localhost:{{api_port}}
NEXT_PUBLIC_SUPABASE_ANON_KEY=$ANON_KEY_{{index}}
SUPABASE_SERVICE_ROLE_KEY=$SERVICE_KEY_{{index}}
ENVEOF

echo "   ✅ sandbox-{{index}} corriendo en puerto {{api_port}}"
{{/each}}

# ─── Aplicar migraciones ─────────────────────────────────

echo ""
echo "📦 Aplicando migraciones..."

{{#each agents}}
cd "$REPO_DIR/../sandbox-{{index}}" && supabase db reset > /dev/null 2>&1
echo "   ✅ sandbox-{{index}} migraciones aplicadas"
{{/each}}

{{/if}}

# ─── Resumen ──────────────────────────────────────────────

echo ""
echo "═══════════════════════════════════════════════════════"
echo "🔨 LA FORJA — Setup Completo"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "Worktrees:"
git worktree list
echo ""

{{#if uses_supabase}}
echo "Supabase Dashboards:"
{{#each agents}}
echo "  Sandbox {{index}}: http://localhost:{{studio_port}}"
{{/each}}
echo ""
echo "Inbucket (emails de auth):"
{{#each agents}}
echo "  Sandbox {{index}}: http://localhost:{{inbucket_port}}"
{{/each}}
echo ""
{{/if}}

echo "🚀 Siguiente paso: Lanza cada agente en su tab de Ghostty"
echo ""
{{#each agents}}
echo "Tab {{index}} ({{personality}}):"
echo "  cd $REPO_DIR/../sandbox-{{index}}"
echo "  c \"\$(cat $REPO_DIR/forja/prompts/sandbox-{{index}}-{{personality_slug}}.md)\""
echo ""
{{/each}}

echo "VS Code (sesión manual):"
echo "  Abre $REPO_DIR en VS Code"
echo "  Ejecuta Claude Code y usa el prompt de review cuando los sandboxes terminen"
echo ""
echo "═══════════════════════════════════════════════════════"
```

---

## Tabla de Puertos

| Sandbox | API | DB | Studio | Inbucket | Shadow | Pooler | Analytics | Inspector | Dev Server |
|---------|-----|-----|--------|----------|--------|--------|-----------|-----------|------------|
| 1 | 54321 | 54322 | 54323 | 54324 | 54320 | 54329 | 54327 | 8083 | 3000 |
| 2 | 55321 | 55322 | 55323 | 55324 | 55320 | 55329 | 55327 | 8084 | 3001 |
| 3 | 56321 | 56322 | 56323 | 56324 | 56320 | 56329 | 56327 | 8085 | 3002 |
| 4 | 57321 | 57322 | 57323 | 57324 | 57320 | 57329 | 57327 | 8086 | 3003 |
| 5 | 58321 | 58322 | 58323 | 58324 | 58320 | 58329 | 58327 | 8087 | 3004 |

---

## Reglas del Script

1. **Idempotente.** Si un worktree ya existe, lo salta sin error.
2. **Verificaciones primero.** Verifica git, docker, supabase CLI antes de hacer cualquier cosa.
3. **Keys automáticas.** Extrae las API keys de `supabase status` y las escribe en .env.local.
4. **Resumen al final.** Muestra todos los URLs, puertos, y los comandos exactos para lanzar.
5. **El script vive en `forja/setup.sh`** dentro del repo, se commitea.

---

## Script de Limpieza (cleanup.sh)

También generar un script de limpieza:

```bash
#!/bin/bash
set -e

REPO_DIR=$(cd "$(dirname "$0")/.." && pwd)

echo "🧹 Limpiando sandboxes de La Forja..."

{{#if uses_supabase}}
# Parar Supabase
echo "   Parando todas las instancias de Supabase..."
supabase stop --all 2>/dev/null || true
{{/if}}

# Eliminar worktrees
{{#each agents}}
if [ -d "$REPO_DIR/../sandbox-{{index}}" ]; then
    git worktree remove "$REPO_DIR/../sandbox-{{index}}" --force 2>/dev/null || true
    echo "   ✅ sandbox-{{index}} eliminado"
fi
{{/each}}

# Eliminar branches
{{#each agents}}
git branch -D {{branch_name}} 2>/dev/null || true
{{/each}}

echo ""
echo "✅ Limpieza completa."
echo ""
echo "Para limpiar imágenes Docker (recupera espacio):"
echo "  docker system prune -a --volumes"
```
