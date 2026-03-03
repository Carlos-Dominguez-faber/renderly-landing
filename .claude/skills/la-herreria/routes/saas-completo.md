# Route: 🏗️ SaaS Completo

> *"El pipeline completo. De idea a blueprint production-ready."*

## Metadata

- **Modo:** 🏗️ SaaS Completo
- **Descripción:** Aplicación web production-ready con auth, pagos, seguridad y escalabilidad
- **Tiempo estimado:** 5-8 horas
- **Skills activos:** 10 de 10
- **Cuándo usar:** Cuando el objetivo es lanzar un producto real, no solo validar

---

## Pipeline

```
BMC → PDR → Tech Spec → UX Research → User Stories → UX Design → UI Workflow → UI → Security → Blueprint
 #1    #2       #3           #4             #5            #6           #7        #8      #9         #10
30m   20m      15m          40m            30m           45m          45m       30m     60m         45m
```

---

### Step 1 · Business Model Canvas

- **Asset:** `assets/01-business-model-canvas.md`
- **Output:** `BMC-[nombre].md` + `VPC-[nombre].md`
- **Tiempo:** 20-40 min
- **Qué hace:** Define los 9 bloques del modelo de negocio + Value Proposition Canvas
- **Inputs requeridos:** Solo la idea del usuario
- **Notas:** Define el `[nombre-kebab]` del proyecto aquí. Se usa en todos los outputs.

---

### Step 2 · PDR Generator

- **Asset:** `assets/02-pdr-generator.md`
- **Output:** `PDR-[nombre].md`
- **Tiempo:** 15-30 min
- **Qué hace:** Entrevista de producto → Product Definition Report completo
- **Inputs requeridos:** `BMC-[nombre].md`

---

### Step 3 · Tech Spec

- **Asset:** `assets/03-tech-spec.md`
- **Output:** `TECH-SPEC-[nombre].md`
- **Tiempo:** 10-20 min
- **Qué hace:** Stack, DB schema, arquitectura, APIs, decisiones técnicas
- **Inputs requeridos:** `PDR-[nombre].md`
- **Stack:** Next.js + Supabase + TypeScript (Golden Path de Forge)

---

### Step 4 · UX Research

- **Asset:** `assets/04-ux-research.md`
- **Output:** `docs/ux-research/` (personas/, mental-models/, journeys/)
- **Tiempo:** 30-45 min
- **Qué hace:** Personas + Modelos Mentales + Journey Maps desde el PDR
- **Inputs requeridos:** `PDR-[nombre].md`

---

### Step 5 · User Stories

- **Asset:** `assets/05-user-stories.md`
- **Output:** `USER-STORIES-[nombre].md`
- **Tiempo:** 20-40 min
- **Qué hace:** Epics + Stories INVEST con criterios de aceptación
- **Inputs requeridos:** `PDR-[nombre].md` + `TECH-SPEC-[nombre].md` + `docs/ux-research/`

---

### Step 6 · UX Design

- **Asset:** `assets/06-ux-design.md`
- **Output:** `docs/ux-design/` (information-architecture.md, interaction-patterns.md, onboarding.md, usability-evaluation/)
- **Tiempo:** 30-50 min
- **Qué hace:** IA + Interaction Patterns + Usabilidad + Onboarding
- **Inputs requeridos:** `USER-STORIES-[nombre].md`

---

### Step 7 · UI Design Workflow

- **Asset:** `assets/07-ui-design-workflow.md`
- **Output:** `docs/ui-design/screen-flows/` + `docs/ui-design/components/`
- **Tiempo:** 30-60 min
- **Qué hace:** Screen flows + acceptance targets por pantalla
- **Inputs requeridos:** `docs/ux-design/`

---

### Step 8 · UI

- **Asset:** `assets/front-end-design.md` → luego `assets/08-ui.md`
- **Output:** `UI-[nombre].md` + `src/features/` + `src/shared/ui/`
- **Tiempo:** 30-60 min
- **Qué hace:** Design system + UI implementada (anti-AI-slop)
- **Inputs requeridos:** `docs/ui-design/screen-flows/`
- **⚠️ Importante:** Leer `front-end-design.md` ANTES que `08-ui.md` para los principios estéticos

---

### Step 9 · Security Audit

- **Asset:** `assets/09-security-audit.md`
- **Output:** `SECURITY-AUDIT-[nombre].md`
- **Tiempo:** 45-75 min
- **Qué hace:** OWASP Top 10 + Vibe Coding risks + escalabilidad + observabilidad
- **Inputs requeridos:** `UI-[nombre].md` + `TECH-SPEC-[nombre].md`
- **⚠️ Regla crítica:** Si hay vulnerabilidades críticas, NO avanzar al Step 10

---

### Step 10 · Master Blueprint

- **Asset:** `assets/10-master-blueprint.md`
- **Output:** `BLUEPRINT-[nombre].md`
- **Tiempo:** 30-60 min
- **Qué hace:** Consolida TODO en un plan de ejecución por fases con estimaciones
- **Inputs requeridos:** Todos los outputs anteriores
- **Prerequisito:** Security Audit aprobado (sin críticos)

---

## Outputs Finales

| Archivo | Generado en |
|---------|-------------|
| `BMC-[nombre].md` | Step 1 |
| `VPC-[nombre].md` | Step 1 |
| `PDR-[nombre].md` | Step 2 |
| `TECH-SPEC-[nombre].md` | Step 3 |
| `docs/ux-research/` | Step 4 |
| `USER-STORIES-[nombre].md` | Step 5 |
| `docs/ux-design/` | Step 6 |
| `docs/ui-design/` | Step 7 |
| `UI-[nombre].md` | Step 8 |
| `SECURITY-AUDIT-[nombre].md` | Step 9 |
| `BLUEPRINT-[nombre].md` | Step 10 ← **Entregable final** |

---

## Cuándo Saltar Steps

| Situación | Skip | Razón |
|-----------|------|-------|
| Ya tiene BMC/modelo de negocio | Step 1 | Empieza en PDR con el doc existente |
| Ya tiene diseños en Figma | Steps 6, 7, 8 | No regenerar UI |
| Ya tiene UX research | Step 4 | Empieza en User Stories |
| Ya tiene auditoría aprobada | Step 9 | Va directo a Blueprint |

---

*"El pipeline completo no es burocracia — es la diferencia entre un producto que dura y uno que hay que rehacer."*
