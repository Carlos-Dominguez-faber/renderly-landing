# /redesign — Auditoría y Elevación de Proyecto Existente

Evalúa el diseño de un proyecto existente, identifica los problemas más críticos y los arregla en orden de impacto — sin romper funcionalidad ni reescribir desde cero.

---

## Cuándo Usar

- Ya tienes una app funcionando pero se ve genérica o "hecha por IA"
- Quieres elevar la calidad visual antes de lanzar o mostrar a usuarios
- Heredaste un proyecto y necesitas un diagnóstico objetivo
- Post-MVP: el producto funciona, ahora necesita pulirse

---

## Protocolo de Ejecución

Al recibir `/redesign`, ejecutar en este orden:

### Paso 1: Cargar el Skill
Leer y activar `.claude/skills/redesign-skill/SKILL.md`.
Si `taste-skill` está disponible, cargarlo también como referencia de calidad.

### Paso 2: Scan del Proyecto
```
→ Explorar estructura src/ o app/
→ Leer package.json (stack, versiones)
→ Abrir 3-5 componentes clave
→ Revisar globals.css y tailwind.config si existe
→ Screenshot de páginas principales (Playwright si disponible)
```

### Paso 3: Auditoría Completa
Evaluar las 9 categorías del redesign-skill:
Tipografía · Color · Layout · Interactividad · Contenido · Componentes · Iconografía · Código · Omisiones

### Paso 4: Presentar Reporte
Generar `REDESIGN-AUDIT-[nombre].md` con:
- Nivel actual (A/B/C/D)
- Hallazgos catalogados por severidad (🔴/🟡/🟢)
- Plan de ejecución ordenado por impacto
- Tiempo estimado por fase

**ESPERAR APROBACIÓN DEL USUARIO antes de hacer cambios al código.**

### Paso 5: Ejecutar Fixes (con aprobación)
Arreglar en orden: Font → Color → States → Layout → Components → Polish

---

## Mensaje de Inicio

Al recibir `/redesign`, mostrar:

```
🔍 Redesign Mode activado.

Voy a auditar tu proyecto en 9 categorías:
Tipografía · Color · Layout · Interactividad · Contenido
Componentes · Iconografía · Código · Omisiones

Primero exploro la estructura, luego genero el reporte REDESIGN-AUDIT.md
con todos los hallazgos ordenados por impacto.

No toco código hasta que apruebes el plan.

Iniciando scan...
```
