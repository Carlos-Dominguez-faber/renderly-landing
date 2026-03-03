Lee CLAUDE.md para entender los comandos y reglas del proyecto.
Lee forja/PLAN-sandcastles-clone.md para las 9 fases del plan.
Lee forja/REFERENCE-sandcastles.md para la especificacion visual de sandcastles.ai.
Lee forja/copy-variant-3.md para el NUEVO COPY que debes usar en esta variante.

Tu prioridad es INNOVACION VISUAL Y DE COPY. Usas la ESTRUCTURA de sandcastles.ai como guia de QUE secciones construir, pero tomas libertad TOTAL en COMO construirlas. Ademas, usas el copy alternativo de variant-3.md (outcome-focused, emotional, urgency-driven).

Reglas:
- ANTES de implementar, documenta tu approach en ARQUITECTURA.md: que haras diferente y por que.
- CAMBIA el copy: lee forja/copy-variant-3.md y actualiza copy.ts con los textos de Variant 3 para EN. Adapta ES para que coincida con el nuevo tono.
- Mantén el soporte bilingue (EN/ES) — traduce el nuevo copy a ES con el mismo tono emocional.
- Experimenta con patterns visuales diferentes: layouts asimetricos, tipografia dramatica, micro-animaciones inesperadas, scroll-triggered reveals.
- Puedes usar libraries que el plan no menciona si mejoran el resultado (GSAP, Lenis, etc.).
- Si un approach experimental falla despues de 2 intentos, vuelve al approach standard y documentalo en PROBLEMAS.md.
- Usa las variables CSS de Renderly como base pero puedes extender la paleta.
- El CTA principal es naranja (#FF6B4A), pero puedes experimentar con gradients, glows, y efectos.
- Tu valor: puede descubrir un approach SUPERIOR que no se considero en la planeacion.

SECCIONES A CONSTRUIR (en este orden):

1. NAVBAR: Experimenta. Ideas: navbar que desaparece al scroll down y reaparece al scroll up. O navbar con efecto de morphing. O navbar ultra-minimal que se expande al hover. Documenta tu eleccion en ARQUITECTURA.md.

2. HERO: El nuevo copy tiene headline "Sell Properties 73% Faster" y subtitle "Listings That Sit Cost You $500/Week". Ideas: hero con tipografia oversized que domina el viewport, split layout (texto izquierda, producto screenshot derecha), counter animado para el "73%", urgencia visual con color rojo/naranja para "$500/Week". El hero debe IMPACTAR emocionalmente — el visitor debe sentir urgencia.

3. FEATURES: En vez de carousel, experimenta. Ideas: scroll-triggered reveal donde cada feature aparece en secuencia, sticky section donde el contenido cambia al scrollear, bento grid con tamaños irregulares, o timeline visual. Mapear a features de Renderly.

4. HOW IT WORKS: Experimenta con la presentacion. Ideas: scroll-based storytelling donde cada step ocupa el viewport completo, animacion tipo "before → during → after" con morphing de imagenes, stepper interactivo. Los 3 pasos del nuevo copy: "Snap a Photo → Pick a Style → Download & List".

5. BIG CLAIM: La seccion de impacto. Nuevo copy: "$2,500 vs $19.99". Ideas: comparacion dramatica con tipografia a dos tamaños extremos, animacion de counter que va de $2,500 a $19.99, glitch effect, o split-screen contrast.

6. TESTIMONIALS: Crea 6-8 testimonials ficticios plausibles. Experimenta con la presentacion: ideas: masonry layout, marquee scroll infinito, testimonials que aparecen al scrollear como mensajes de chat, glassmorphism cards.

7. PRICING: Mismo contenido que copy.ts pero presentacion experimental. Ideas: pricing slider interactivo, comparison table con highlight on hover, pricing calculator, cards con hover 3D tilt.

8. FAQ: Experimenta. Ideas: FAQ como chat/conversacion, FAQ con busqueda en tiempo real, FAQ con categorias visuales (iconos), FAQ tipo "command palette" (/ para buscar).

9. FINAL CTA + FOOTER: CTA experimental. Ideas: CTA con countdown timer (127 spots left — del nuevo copy), floating CTA que persigue al usuario, full-screen takeover CTA al llegar al final, CTA con social proof counter animado.

Para CADA fase:
1. Documenta tu approach alternativo en ARQUITECTURA.md
2. Implementa siguiendo tu approach documentado
3. npm run build — si falla, evalua si el approach es viable
4. Si no es viable despues de 2 intentos, vuelve al approach standard de sandcastles.ai
5. Commit: "fase-N: [nombre seccion] [approach: alternativo/standard]"
6. Avanza a la siguiente fase

Al terminar, ELIMINA las secciones/componentes viejos que ya no se usen.

Si una fase falla build 3 veces seguidas, documenta en PROBLEMAS.md y avanza.

Al finalizar, crea RESUMEN.md con: que se implemento, approaches alternativos usados, cuales funcionaron y cuales no, estado del build, copy changes hechos, y deuda tecnica.
