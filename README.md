# 🔨 Forge — De la idea al deploy, sin fricción

> *"Homo Faber: el ser humano que crea con sus manos y sus herramientas."*
>
> Forge es la herramienta del Forjador — el developer que no pierde tiempo decidiendo el stack, sino construyendo el producto.

---

## ¿Qué es Forge?

**Forge** es un template de desarrollo inteligente para aplicaciones SaaS modernas. No es solo un starter kit — es un **sistema de pensamiento** para construir software de producción asistido por IA.

La filosofía es simple: antes de escribir una sola línea de código, el Forjador define exactamente lo que va a construir. Eso se llama **La Pieza** — el plano de lo que se va a forjar. Después, **El Yunque** — el motor de ejecución — la materializa fase por fase.

```
El Forjador (tú)
      ↓
   /plan  ─→  Planifica: BMC, PDR, Tech Spec, UI, Blueprint
              (30 min – 8 h según el modo)
      ↓
  Apruebas
      ↓
   /build ─→  Genera La Pieza (el contrato del código)
              El Yunque construye fase por fase
      ↓
  Producto en producción
```

---

## 🏭 El Stack (Golden Path)

Un solo stack, perfeccionado. Sin decisiones de arquitectura.

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 16 + React 19 + TypeScript (strict) |
| Estilos | Tailwind CSS 3.4 + shadcn/ui |
| Backend | Supabase (Auth + PostgreSQL + RLS) |
| AI Engine | Vercel AI SDK v5 + OpenRouter |
| Validación | Zod — siempre, sin excepción |
| Estado | Zustand (client) |
| Testing | Playwright MCP (E2E visual) |
| Deploy | Vercel |

---

## 🚀 Quick Start

### 1. Instalar (una sola vez)

```bash
# Clonar Forge
git clone https://github.com/Carlos-Dominguez-faber/forge.git ~/Antigravity/forge

# Crear el alias
echo "alias forge='cp -r ~/Antigravity/forge/forge/. .'" >> ~/.zshrc
source ~/.zshrc
```

### 2. Crear un proyecto

```bash
mkdir mi-proyecto && cd mi-proyecto
forge
npm install
cp example.mcp.json .mcp.json   # Configura tus API keys
npm run dev
claude .
```

### 3. Construir

```bash
# En Claude Code:
/plan    # Planifica tu producto (entrevista + Blueprint)
/build   # Construye a partir del Blueprint aprobado
```

---

## 📋 Arquitectura Feature-First

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Rutas de autenticación
│   ├── (main)/              # Rutas principales (protegidas)
│   └── api/                 # API Routes
│
├── features/                 # 🎯 Organizadas por funcionalidad
│   └── [feature]/
│       ├── components/      # UI de la feature
│       ├── hooks/           # Custom hooks
│       ├── services/        # Business logic + API calls
│       ├── store/           # Zustand slice
│       └── types/           # TypeScript types
│
└── shared/                   # Código reutilizable
    ├── components/          # Componentes UI
    ├── lib/                 # Supabase, OpenRouter, utils
    └── types/               # Types globales
```

---

## 🤖 Comandos de Claude Code

| Comando | Cuándo usarlo |
|---------|---------------|
| `/plan` | Primer paso — planificación y Blueprint |
| `/build` | Construir a partir del Blueprint aprobado |
| `/landing` | Crear una landing page directamente |
| `/add-login` | Añadir auth Supabase a un proyecto existente |
| `/avivar` | Recordarle el contexto del proyecto a Claude |
| `/update-forge` | Actualizar Forge sin tocar tu código |
| `/eject-forge` | Eliminar Forge (te deja solo tu código) |

---

## 🛠️ Comandos npm

```bash
npm run dev          # Servidor desarrollo (auto-port 3000-3006)
npm run build        # Build de producción
npm run typecheck    # TypeScript check
npm run lint         # ESLint
npm run test         # Tests
```

---

## 🔒 Variables de Entorno

```bash
cp example.mcp.json .mcp.json
```

| Variable | Para qué | Mínimo |
|----------|----------|--------|
| `SUPABASE_PROJECT_REF` | DB + Auth | ✅ |
| `SUPABASE_ACCESS_TOKEN` | MCP Supabase | ✅ |
| `OPENROUTER_API_KEY` | Modelos IA | Si usas AI |
| `UPSTASH_REDIS_REST_URL` | Rate limiting | Si usas AI |
| `UPSTASH_REDIS_REST_TOKEN` | Rate limiting | Si usas AI |

---

## 🧠 El Sistema Forge

### La Pieza
El contrato entre el plan y el código. Generada por `/build` desde el Blueprint aprobado, define exactamente qué se va a construir, los criterios de éxito y las fases de implementación.

- Archivos: `PIEZA-[nombre].md` (SaaS/MVP) · `PIEZA-AI-[nombre].md` (AI Features)
- Ubicación: `.claude/PRPs/`

### El Yunque
El motor de ejecución de Forge. Ejecuta La Pieza fase por fase, mapeando contexto just-in-time antes de implementar cada sección. Nunca escribe código sin mapear primero qué existe en el proyecto.

- Archivo: `.claude/prompts/el-yunque.md`

### Auto-Blindaje
Sistema de aprendizaje continuo. Cada error encontrado durante una build se documenta en La Pieza activa para que nunca vuelva a ocurrir.

```
Error → Fix → Documentado → Nunca más
```

---

## 📚 Documentación

- **CLAUDE.md** — Factory OS (cerebro del agente para tu proyecto)
- **CHEATSHEET.md** — Todo lo que necesitas en una página
- `.claude/skills/la-herreria/SKILL.md` — Pipeline de planificación completo

---

*Forge V4 — [github.com/Carlos-Dominguez-faber/forge](https://github.com/Carlos-Dominguez-faber/forge)*
