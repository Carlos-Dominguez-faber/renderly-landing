# La Forja — Renderly Sandcastles Clone

> 3 agentes autonomos construyen variantes del landing page de Renderly
> clonando el diseno de [sandcastles.ai](https://www.sandcastles.ai/).

---

## Sandboxes

| # | Personalidad | Copy | Branch |
|---|-------------|------|--------|
| 1 | **Literal** | Existing Renderly copy | `forja/sandbox-1-literal` |
| 2 | **Creativo** | Existing Renderly copy | `forja/sandbox-2-creativo` |
| 3 | **Disruptivo** | New outcome-focused copy | `forja/sandbox-3-disruptivo` |

---

## Paso a Paso

### 1. Ejecutar setup

```bash
chmod +x forja/setup.sh && ./forja/setup.sh
```

Esto crea 3 git worktrees (`../sandbox-1`, `../sandbox-2`, `../sandbox-3`)
con sus branches e instala dependencias.

### 2. Lanzar los 3 agentes

Abre 3 tabs en tu terminal. En cada una:

**Tab 1 — Literal:**
```bash
cd "/Users/carlosdominguez/Vibe Coding/sandbox-1"
claude --dangerously-skip-permissions "$(cat "/Users/carlosdominguez/Vibe Coding/Demo/forja/prompts/sandbox-1-literal.md")"
```

**Tab 2 — Creativo:**
```bash
cd "/Users/carlosdominguez/Vibe Coding/sandbox-2"
claude --dangerously-skip-permissions "$(cat "/Users/carlosdominguez/Vibe Coding/Demo/forja/prompts/sandbox-2-creativo.md")"
```

**Tab 3 — Disruptivo:**
```bash
cd "/Users/carlosdominguez/Vibe Coding/sandbox-3"
claude --dangerously-skip-permissions "$(cat "/Users/carlosdominguez/Vibe Coding/Demo/forja/prompts/sandbox-3-disruptivo.md")"
```

### 3. Mientras los agentes trabajan

Puedes seguir trabajando en tu sesion manual en el repo principal.
Los worktrees son independientes — no interfieren entre si.

Para verificar el progreso de cada sandbox:
```bash
cd "/Users/carlosdominguez/Vibe Coding/sandbox-1" && git log --oneline -5
cd "/Users/carlosdominguez/Vibe Coding/sandbox-2" && git log --oneline -5
cd "/Users/carlosdominguez/Vibe Coding/sandbox-3" && git log --oneline -5
```

Para ver visualmente cada variante:
```bash
cd "/Users/carlosdominguez/Vibe Coding/sandbox-1" && npm run dev  # puerto 3000
cd "/Users/carlosdominguez/Vibe Coding/sandbox-2" && npm run dev  # puerto 3001
cd "/Users/carlosdominguez/Vibe Coding/sandbox-3" && npm run dev  # puerto 3002
```

### 4. Review (cuando terminen)

Usa el prompt de review en tu sesion manual:

```bash
cd "/Users/carlosdominguez/Vibe Coding/Demo"
claude --dangerously-skip-permissions "$(cat "/Users/carlosdominguez/Vibe Coding/Demo/forja/prompts/review-prompt.md")"
```

El agente de review comparara las 3 implementaciones y recomendara
de cual sandbox cherry-pick cada seccion.

### 5. Cleanup

Cuando hayas terminado el merge:

```bash
chmod +x forja/cleanup.sh && ./forja/cleanup.sh
```

---

## Archivos

```
forja/
├── README.md                         ← Este archivo
├── PLAN-sandcastles-clone.md         ← Plan con las 9 fases
├── REFERENCE-sandcastles.md          ← Spec visual de sandcastles.ai
├── copy-variant-3.md                 ← Copy alternativo para sandbox 3
├── setup.sh                          ← Crea worktrees
├── cleanup.sh                        ← Elimina worktrees
└── prompts/
    ├── sandbox-1-literal.md          ← Prompt: replica fiel
    ├── sandbox-2-creativo.md         ← Prompt: mejoras de UX
    ├── sandbox-3-disruptivo.md       ← Prompt: experimental + nuevo copy
    └── review-prompt.md              ← Prompt: compara y recomienda merge
```

---

## Variant 3 Copy (Preview)

El sandbox disruptivo usa un copy completamente diferente:

| Aspecto | Copy Actual | Variant 3 |
|---------|-------------|-----------|
| Hero H1 | "AI Virtual Staging" | "Sell Properties 73% Faster" |
| Pain | "Empty Rooms Don't Sell" | "48 Hours. Zero Inquiries." |
| Benefits | Feature-focused | Outcome-focused |
| CTA | "Get Started Free" | "Stage My First Room Free" |
| Urgency | "50% off" | "127 spots left" |
