---
name: la-forja
description: >
  Orquestador de ejecución autónoma con agentes sandbox en Git Worktrees.
  Se activa DESPUÉS de la fase de planeación (cuando ya existen plan.md, tasks.md,
  BLUEPRINT.md, o cualquier documento de plan con fases definidas). Pregunta al usuario
  si quiere ejecutar el build manualmente o con agentes autónomos en sandboxes paralelos.
  Si elige sandboxes, pregunta cuántos agentes (1-5), genera toda la configuración:
  worktrees, config de Supabase local por sandbox, CLAUDE.md, .env.local, y los prompts
  personalizados para cada agente con variaciones de personalidad (literal → creativo →
  disruptivo). También genera el prompt de review para que el agente manual compare y
  cherry-pick lo mejor de cada sandbox.
  Usa este skill siempre que el usuario diga "la forja", "quiero usar sandboxes",
  "agentes autónomos", "worktrees", "ejecutar con múltiples agentes", "lanza los
  agentes", "modo forja", "forja el build", o cuando termine el blueprint y quiera
  pasar a ejecución. También se activa si el usuario dice "quiero correr X agentes
  en paralelo", "sandbox mode", o "autonomous build".
---

# La Forja — Orquestador de Ejecución Autónoma

> *"Planeaste con precisión. Ahora deja que la Forja lo construya."*

La Forja es el puente entre planeación y ejecución. Toma el output de La Herrería
(o cualquier plan estructurado por fases) y lo convierte en una operación de build
con múltiples agentes autónomos trabajando en paralelo, cada uno con su propio
entorno aislado y una personalidad diferente.

```
BLUEPRINT → LA FORJA → N agentes sandbox en paralelo → Review → Cherry-pick → Merge
```

---

## Cuándo Se Activa

La Forja se activa cuando:

1. **El pipeline de La Herrería termina** (después del Blueprint, Skill #10)
2. **El usuario tiene documentos de plan con fases** (plan.md, tasks.md, BLUEPRINT-[nombre].md)
3. **El usuario pide explícitamente** usar sandboxes, agentes autónomos, o "la forja"

La Forja NO se activa si no hay un plan con fases definidas. Si el usuario quiere
usar La Forja pero no tiene plan, redirigir a La Herrería primero.

---

## Detección de Estado

### Al Activarse

```
He detectado los siguientes documentos de planificación:

✅ BLUEPRINT-[nombre].md — [Resumen de fases]
✅ TECH-SPEC-[nombre].md — [Stack tecnológico]

El plan tiene [N] fases con [X] tareas totales.

¿Cómo quieres ejecutar el build?
```

Presentar opciones al usuario:

1. **Build Manual** → "Trabajamos tú y yo fase por fase, con tu aprobación en cada paso"
2. **Modo Forja** → "Lanzo agentes autónomos en sandboxes paralelos mientras tú trabajas manual"

Si elige Build Manual → el agente procede normalmente sin invocar La Forja.
Si elige Modo Forja → continuar con el flujo de La Forja.

### Preguntas de Configuración

Si el usuario elige Modo Forja:

```
¡Modo Forja activado! Vamos a configurar tu operación.

¿Cuántos agentes autónomos quieres lanzar?
```

Opciones: 1, 2, 3, 4, 5

Después:

```
¿Tu proyecto usa Supabase?
```

Si sí:

```
¿Cómo quieres aislar las bases de datos?

1. Supabase Local con Docker (gratis, requiere Docker Desktop)
2. Proyectos separados en Supabase Cloud (requiere plan Pro para 3+)
```

---

## Personalidades de Agentes

Cada agente sandbox tiene una personalidad que define su approach. Las personalidades
se asignan automáticamente según el número de agentes:

### 1 Agente

| Agente | Personalidad | Descripción |
|--------|-------------|-------------|
| Sandbox 1 | **Equilibrado** | Balance entre velocidad, calidad y buenas prácticas |

### 2 Agentes

| Agente | Personalidad | Descripción |
|--------|-------------|-------------|
| Sandbox 1 | **Literal** | Se apega estrictamente al plan, sin desviaciones |
| Sandbox 2 | **Creativo** | Toma libertades para mejorar la implementación |

### 3 Agentes

| Agente | Personalidad | Descripción |
|--------|-------------|-------------|
| Sandbox 1 | **Literal** | Se apega al código y plan tal cual está escrito |
| Sandbox 2 | **Creativo** | Libertad moderada para mejorar patterns y UX |
| Sandbox 3 | **Disruptivo** | Experimenta con approaches alternativos y nuevas ideas |

### 4 Agentes

| Agente | Personalidad | Descripción |
|--------|-------------|-------------|
| Sandbox 1 | **Literal** | Apego estricto al plan |
| Sandbox 2 | **Quality** | Prioriza TDD y cobertura de tests exhaustiva |
| Sandbox 3 | **Creativo** | Mejoras de implementación y UX |
| Sandbox 4 | **Disruptivo** | Arquitectura alternativa y experimentación |

### 5 Agentes

| Agente | Personalidad | Descripción |
|--------|-------------|-------------|
| Sandbox 1 | **Literal** | Apego estricto al plan |
| Sandbox 2 | **Speed** | Velocidad de ejecución, implementación directa |
| Sandbox 3 | **Quality** | TDD y tests exhaustivos |
| Sandbox 4 | **Creativo** | Mejoras de patterns y UX |
| Sandbox 5 | **Disruptivo** | Arquitectura alternativa radical |

---

## Generación de Outputs

Cuando el usuario confirma la configuración, La Forja genera TODO lo necesario
para ejecutar la operación. Los outputs se generan como archivos en el proyecto.

### Estructura de Outputs

```
forja/
├── README.md                      ← Guía paso a paso para el usuario
├── setup.sh                       ← Script de setup automatizado
├── cleanup.sh                     ← Script de limpieza
├── CLAUDE.md                      ← Instrucciones base para todos los agentes
├── prompts/
│   ├── sandbox-1-literal.md       ← Prompt del agente 1
│   ├── sandbox-2-creativo.md      ← Prompt del agente 2
│   ├── sandbox-3-disruptivo.md    ← Prompt del agente 3 (si aplica)
│   └── review-prompt.md           ← Prompt para el agente manual de review
├── configs/
│   ├── sandbox-1-config.toml      ← Config Supabase sandbox 1 (si aplica)
│   ├── sandbox-2-config.toml      ← Config Supabase sandbox 2 (si aplica)
│   └── sandbox-3-config.toml      ← Config Supabase sandbox 3 (si aplica)
└── env-templates/
    ├── sandbox-1.env.local        ← Template de env para sandbox 1
    ├── sandbox-2.env.local        ← Template de env para sandbox 2
    └── sandbox-3.env.local        ← Template de env para sandbox 3
```

---

## Generación del CLAUDE.md

El CLAUDE.md es compartido por TODOS los agentes sandbox (vive en la raíz del repo
y se hereda via worktree). Se genera basándose en el plan del usuario.

### Template del CLAUDE.md

Leer `references/claude-md-template.md` para el template completo y adaptarlo
al proyecto específico del usuario. El template incluye:

- Comandos disponibles (/build, /playwright, /e2e, /lint, /db:migrate, etc.)
- Reglas de ejecución (build + test después de cada fase)
- Skills disponibles (si el usuario tiene skills/)
- Convenciones del proyecto
- Stack técnico extraído del plan
- Reglas de base de datos (si usa Supabase)

---

## Generación de Prompts por Agente

Cada prompt se genera dinámicamente basándose en:

1. El plan del usuario (fases, tareas, migraciones)
2. La personalidad asignada al agente
3. El stack técnico del proyecto
4. Si usa Supabase u otras integraciones

### Estructura de un Prompt de Agente

Leer `references/agent-prompt-template.md` para el template completo.

Cada prompt sigue esta estructura:

```
1. INSTRUCCIONES DE LECTURA
   → Lee CLAUDE.md, BLUEPRINT-[nombre].md, TECH-SPEC-[nombre].md

2. PERSONALIDAD Y PRIORIDAD
   → Define qué prioriza este agente específico

3. ENTORNO
   → Qué servicios tiene disponibles (Supabase, etc.)

4. INSTRUCCIONES POR GRUPO DE FASES
   → Qué skills leer, qué patterns usar en cada grupo

5. LOOP DE EJECUCIÓN POR FASE
   → Los pasos exactos que repite en cada fase

6. MANEJO DE ERRORES
   → Qué hacer si tests fallan, si se atora, etc.

7. OUTPUTS FINALES
   → RESUMEN.md, PROBLEMAS.md, etc.
```

### Variaciones por Personalidad

Las variaciones se inyectan en la sección 2 y 4 del prompt:

**Literal:**
```
Tu prioridad es FIDELIDAD AL PLAN. Implementa exactamente lo que dice el plan
y tasks sin desviaciones. No agregues features, patterns, o abstracciones que
no estén explícitamente en el plan. Si hay ambigüedad, elige la interpretación
más simple y directa. Tu valor es que produces exactamente lo que se planeó.
```

**Speed:**
```
Tu prioridad es VELOCIDAD. Implementa cada fase de la forma más directa y
eficiente posible. Evita sobre-ingeniería. Si el plan pide un CRUD, haz un CRUD
simple que funcione, no un pattern repository con abstracciones. Tu valor es que
produces resultados rápido para validar que el plan funciona.
```

**Quality:**
```
Tu prioridad es CALIDAD y COBERTURA DE TESTS. Cada feature debe tener tests
exhaustivos. Usa TDD: escribe los tests PRIMERO, luego implementa hasta que pasen.
Agrega tests de edge cases, error handling, y happy paths. Tu valor es que produces
código con alta confianza de que funciona correctamente.
```

**Creativo:**
```
Tu prioridad es MEJORA PRAGMÁTICA. Sigue el plan pero toma libertades moderadas
para mejorar la implementación: mejores patterns, mejor UX, abstracciones útiles
que el plan no consideró pero que hacen el código más mantenible. Documenta cada
mejora que hagas en MEJORAS.md explicando qué cambiaste y por qué. Tu valor es
que produces una versión mejorada del plan.
```

**Disruptivo:**
```
Tu prioridad es INNOVACIÓN ARQUITECTÓNICA. Usa el plan como guía de QUÉ construir
pero toma libertad total en CÓMO construirlo. Experimenta con patterns diferentes,
estructuras de proyecto alternativas, libraries que el plan no consideró. Antes de
implementar cada fase, documenta tu approach alternativo en ARQUITECTURA.md
explicando qué harás diferente y por qué. Tu valor es que puede descubrir
approaches superiores que no se consideraron en la planeación.
```

**Equilibrado (para 1 solo agente):**
```
Tu prioridad es BALANCE. Sigue el plan con fidelidad pero aplica buen juicio:
si ves una mejora obvia, aplícala. Si un test es evidente, escríbelo. No
sobre-ingenierices pero tampoco cortes esquinas. Documenta decisiones importantes
en DECISIONES.md. Tu valor es que produces un resultado sólido y equilibrado.
```

---

## Generación del Script de Setup

El script `setup.sh` automatiza la creación de worktrees y configuración de
Supabase. Leer `references/setup-script-template.md` para el template.

El script debe:

1. Crear N worktrees con branches descriptivas
2. Configurar project_id y puertos en config.toml de cada sandbox (si usa Supabase)
3. Generar JWT secrets únicos por sandbox (si usa Supabase)
4. Crear .env.local por sandbox con las credenciales correctas
5. Ejecutar supabase start en cada sandbox (si usa Supabase)
6. Aplicar migraciones existentes
7. Mostrar resumen de URLs y credenciales

---

## Generación del Prompt de Review

Cuando los sandboxes terminan, el agente manual necesita un prompt para hacer
review. Se genera en `forja/prompts/review-prompt.md`.

### Template del Review Prompt

```
Tengo [N] sandboxes que ejecutaron el mismo plan de [M] fases con approaches diferentes:

[Para cada sandbox:]
- ../sandbox-[N] (branch [nombre-branch]) → personalidad: [personalidad]
  [Si Supabase:] Supabase: http://localhost:[puerto]

Cada uno tiene un RESUMEN.md y posiblemente PROBLEMAS.md.
[Si creativo:] El sandbox creativo tiene MEJORAS.md.
[Si disruptivo:] El sandbox disruptivo tiene ARQUITECTURA.md.

Haz esto:
1. Lee todos los RESUMEN.md para contexto general
2. Lee PROBLEMAS.md, MEJORAS.md, y ARQUITECTURA.md si existen
3. [Si Supabase:] Compara las migraciones SQL de los [N] sandboxes
4. Para cada fase (1-[M]), compara la implementación de los [N] sandboxes
5. Dime cuál sandbox lo hizo mejor en cada fase y por qué
6. Recomienda de cuál sandbox hacer cherry-pick para cada fase
7. [Si Supabase:] Identifica si las migraciones son compatibles entre sí
8. Identifica si hay ideas del sandbox disruptivo/creativo que valga la pena incorporar
```

---

## Flujo de Conversación Completo

### Paso 1: Detección

```
🔨 La Forja detectada.

He analizado tu plan:
- [N] fases definidas
- [X] tareas totales
- Stack: [tecnologías]
- [Usa / No usa] Supabase

¿Cómo quieres ejecutar el build?
```

→ Ofrecer opciones: Build Manual vs Modo Forja

### Paso 2: Configuración (si Modo Forja)

```
⚙️ Configurando La Forja...

¿Cuántos agentes autónomos quieres lanzar?
```

→ Preguntar con widget de selección: 1, 2, 3, 4, 5

```
[Si usa Supabase:]
¿Cómo quieres aislar las bases de datos?
```

→ Docker Local vs Supabase Cloud

### Paso 3: Generación

```
🔨 Forjando configuración para [N] agentes...

Generando:
├── CLAUDE.md (instrucciones compartidas)
├── Prompt sandbox-1: [Personalidad]
├── Prompt sandbox-2: [Personalidad]
├── Prompt sandbox-3: [Personalidad]
├── Script de setup (setup.sh)
├── Configs de Supabase ([N] instancias)
├── Templates de .env.local
└── Prompt de review

[Generar todos los archivos]
```

### Paso 4: Presentar al Usuario

```
✅ La Forja está lista.

📁 Archivos generados en forja/:
   [lista de archivos]

🚀 Para ejecutar:

1. Abre Docker Desktop
2. Corre el script de setup:
   chmod +x forja/setup.sh && ./forja/setup.sh

3. Abre [N] tabs en Ghostty y lanza cada agente:
   [Comandos exactos por tab]

4. Abre VS Code y comienza tu sesión manual

5. Cuando los sandboxes terminen, usa el prompt de review:
   forja/prompts/review-prompt.md

¿Quieres que ajuste algo antes de lanzar?
```

### Paso 5: Post-Ejecución (Review)

Cuando el usuario regresa después de que los sandboxes terminaron:

```
¿Los agentes terminaron? Vamos a revisar.

[Leer review-prompt.md y ejecutarlo]
[Analizar los N sandboxes]
[Presentar recomendaciones de cherry-pick]
```

---

## Reglas del Skill

### Generación

1. **Todos los prompts son copy-paste-ready.** El usuario debe poder copiar
   el prompt exacto y pegarlo en Ghostty.

2. **El setup.sh debe ser idempotente.** Si lo corres dos veces, no rompe nada.

3. **Los puertos de Supabase se asignan incrementando de 1000 en 1000:**
   Sandbox 1: 54321+, Sandbox 2: 55321+, Sandbox 3: 56321+, etc.

4. **Las personalidades se asignan en orden:** Literal → Speed → Quality →
   Creativo → Disruptivo. Si hay menos agentes, se seleccionan las más
   relevantes según la tabla de personalidades.

5. **El CLAUDE.md se genera basándose en el plan real del usuario,** no con
   contenido genérico. Los comandos, skills, y convenciones reflejan su stack.

### Review

6. **El prompt de review se adapta al número de sandboxes y personalidades.**

7. **Si hay Supabase, el review incluye comparación de migraciones.**

8. **El review siempre prioriza:** funcionalidad > tests > arquitectura > innovación.

### Seguridad

9. **Nunca incluir secrets reales en archivos commiteados.** Los .env.local
   se generan como templates con placeholders o via script.

10. **Los JWT secrets se generan en runtime por el setup.sh,** no hardcodeados.

---

## Archivos de Referencia

Para generar los outputs, leer estos archivos en orden:

| Referencia | Cuándo Leer | Qué Contiene |
|------------|-------------|-------------|
| `references/claude-md-template.md` | Al generar CLAUDE.md | Template adaptable por stack |
| `references/agent-prompt-template.md` | Al generar prompts de agentes | Template con secciones y variaciones |
| `references/setup-script-template.md` | Al generar setup.sh | Script con lógica de worktrees + Supabase |

---

*"La Forja no reemplaza tu criterio. Multiplica tus manos."*
