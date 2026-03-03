Tengo 3 sandboxes que ejecutaron el mismo plan de 9 fases con approaches diferentes:

- ../sandbox-1 (branch forja/sandbox-1-literal) → personalidad: LITERAL
  Replica fiel de sandcastles.ai, copy existente de Renderly sin cambios.

- ../sandbox-2 (branch forja/sandbox-2-creativo) → personalidad: CREATIVO
  Sandcastles.ai como base pero con mejoras de UX, animaciones, y calidad visual.
  Tiene MEJORAS.md documentando cada cambio.

- ../sandbox-3 (branch forja/sandbox-3-disruptivo) → personalidad: DISRUPTIVO
  Estructura de sandcastles.ai pero con approach visual experimental + copy alternativo (outcome-focused).
  Tiene ARQUITECTURA.md documentando sus approaches y RESUMEN.md con resultados.

Haz esto:

1. Lee los 3 RESUMEN.md para contexto general de cada sandbox.
2. Lee MEJORAS.md de sandbox-2 para ver que mejoras aplico.
3. Lee ARQUITECTURA.md de sandbox-3 para ver que approaches experimento.
4. Si existen, lee PROBLEMAS.md de cualquier sandbox para ver donde se atascaron.

5. Para cada fase (1-9), compara la implementacion de los 3 sandboxes:
   - Abre el archivo equivalente de cada sandbox y compara el codigo.
   - Evalua: fidelidad al diseño de sandcastles.ai, calidad de codigo, responsive, animaciones, copy effectiveness.

6. Para cada seccion, dime:
   - Cual sandbox lo hizo MEJOR y por que
   - Si hay ideas del sandbox creativo o disruptivo que valga la pena incorporar
   - Si el copy alternativo (sandbox-3) es mas efectivo que el original

7. Genera un PLAN DE CHERRY-PICK:
   - Para cada seccion, recomienda de cual sandbox tomar el codigo
   - Identifica mejoras del creativo que se deban integrar
   - Identifica ideas del disruptivo que merezcan incorporarse
   - Evalua si el copy variant-3 (outcome-focused) deberia reemplazar al actual

8. Genera los comandos git cherry-pick o merge exactos para combinar lo mejor de los 3 sandboxes.

IMPORTANTE:
- Prioriza: funcionalidad > responsive > diseño > animaciones > innovacion
- El build DEBE pasar despues de cada merge
- Si dos sandboxes tienen la misma seccion en calidad similar, prefiere el mas simple
- No mezcles copy de diferentes variants sin razon — elige uno u otro
