Lee CLAUDE.md para entender los comandos y reglas del proyecto.
Lee forja/PLAN-sandcastles-clone.md para las 9 fases del plan.
Lee forja/REFERENCE-sandcastles.md para la especificacion visual de sandcastles.ai.

Tu prioridad es MEJORA PRAGMATICA. Usas sandcastles.ai como BASE pero tomas libertades moderadas para mejorar la UX, las animaciones, y la calidad visual donde veas oportunidad. Documenta cada mejora en MEJORAS.md.

Reglas:
- Sigue la ESTRUCTURA de sandcastles.ai (mismas secciones, mismo orden) pero mejora el COMO.
- NO cambies el copy existente en src/features/landing/copy.ts. Usa los textos TAL CUAL estan.
- Puedes agregar microinteracciones, transiciones, y animaciones con Framer Motion donde mejoren la UX.
- Puedes mejorar el responsive design mas alla de lo que sandcastles.ai hace.
- Puedes usar components de Aceternity UI, shadcn, u otros si resuelven mejor un patron.
- Si creas una abstraccion util (ej: un Carousel reutilizable), documentalo en MEJORAS.md.
- Mantén el soporte bilingue (EN/ES) via copy.ts.
- Usa las variables CSS de Renderly (--bg-dark, --primary, --cta).
- El CTA principal es naranja (#FF6B4A), NO azul.
- Tu valor: produces una version MEJORADA del diseno de sandcastles.ai que se siente mas premium.

SECCIONES A CONSTRUIR (en este orden):

1. NAVBAR: Fijo arriba. Puedes mantener un efecto glass/blur sutil (mejorado sobre sandcastles que usa solido). Logo izquierda, links centro, CTA derecha. Transicion suave al scroll. MEJORA LIBRE: animacion de entrada, hover effects en links.

2. HERO: Centrado. Trust badge + H1 + subtitle + CTA + producto screenshot. MEJORA LIBRE: puedes agregar un gradient mesh sutil al fondo, animaciones de entrada escalonadas con Framer Motion, efecto parallax sutil en la screenshot. El play button puede tener un efecto de pulse/glow.

3. FEATURES CAROUSEL: Carousel horizontal. MEJORA LIBRE: puedes agregar drag-to-scroll ademas de flechas, hover effect en cards con scale + shadow, snap scrolling. Si ves valor en un layout de bento-grid en vez de carousel simple, documentalo en MEJORAS.md y hazlo.

4. HOW IT WORKS (TABBED): 2 columnas, tabs verticales. MEJORA LIBRE: transicion animada entre tabs (slide/fade), indicador de progreso visual, mobile-first tab layout (horizontal pills en mobile vs vertical en desktop).

5. BIG CLAIM SECTION: Full-width, statement tipografico grande. MEJORA LIBRE: animated counter para el "95%", gradient text, background con particles sutiles o pattern grid.

6. TESTIMONIALS CAROUSEL: Cards de testimonials. MEJORA LIBRE: auto-scroll lento, marquee effect, cards con hover tilt (perspective 3D sutil), better avatar presentation. Crea 6-8 testimonials ficticios plausibles de agentes inmobiliarios.

7. PRICING: Cards con toggle. MEJORA LIBRE: animacion de flip/morph al cambiar toggle, card hover con elevation, popular card con glow border, feature comparison tooltip. Usar datos de copy.ts.

8. FAQ (TABBED): Tabs + accordion. MEJORA LIBRE: smooth expand/collapse animation, search functionality, categorized tabs con iconos. Distribuir preguntas de copy.ts entre tabs.

9. FINAL CTA + FOOTER: MEJORA LIBRE: CTA con background animation (gradient shift, particles), footer con hover effects en links, scroll-to-top button.

Para CADA fase:
1. ANTES de implementar, evalua si hay mejoras que valgan la pena
2. Si hay mejoras, documentalas en MEJORAS.md PRIMERO (que cambias, por que, que beneficio da)
3. Implementa la seccion (con mejoras si las documentaste)
4. npm run build — si falla, corrige
5. Commit: "fase-N: [nombre seccion] [+ mejoras aplicadas]"
6. Avanza a la siguiente fase

Al terminar, ELIMINA las secciones/componentes viejos que ya no se usen.

Si una fase falla build 3 veces seguidas, documenta en PROBLEMAS.md y avanza.

Al finalizar, crea RESUMEN.md con: que se implemento en cada fase, mejoras aplicadas, decisiones tomadas, estado del build, y deuda tecnica.
