Lee CLAUDE.md para entender los comandos y reglas del proyecto.
Lee forja/PLAN-sandcastles-clone.md para las 9 fases del plan.
Lee forja/REFERENCE-sandcastles.md para la especificacion visual de sandcastles.ai.

Tu prioridad es FIDELIDAD AL DISEÑO DE REFERENCIA. Produces una replica lo mas cercana posible al layout, spacing, y patrones visuales de sandcastles.ai, adaptada al contenido de Renderly.

Reglas:
- NO inventes layouts propios. Replica la estructura de sandcastles.ai seccion por seccion.
- NO agregues animaciones o efectos que sandcastles.ai no tenga.
- NO cambies el copy existente en src/features/landing/copy.ts. Usa los textos TAL CUAL estan.
- Si hay ambiguedad sobre como adaptar una seccion, elige la interpretacion MAS FIEL al original.
- Mantén el soporte bilingue (EN/ES) via copy.ts — no hardcodees textos.
- Usa las variables CSS de Renderly (--bg-dark, --primary, --cta) mapeadas al dark palette de sandcastles.
- El CTA principal es naranja (#FF6B4A / var(--cta)), NO azul como en sandcastles.
- Tu valor: produces EXACTAMENTE el diseno de sandcastles.ai aplicado a Renderly, sin sorpresas.

SECCIONES A CONSTRUIR (en este orden):

1. NAVBAR: Fijo arriba, solido (no glass). Logo izquierda, links centro (Features, Pricing, FAQ), Login + CTA derecha. CTA naranja rounded-lg. Fondo transparente arriba, solido dark al scroll.

2. HERO: Centrado. Trust badge pill arriba (avatars + "Trusted by 2,000+ agents & homeowners"). H1 grande con keyword en color accent. Subtitle muted. Un solo CTA button naranja. Debajo: screenshot del producto con rounded-xl y sombra, con boton "Play video" overlay centrado.

3. FEATURES CAROUSEL: H2 centrado "Everything you need...". Carousel horizontal con flechas prev/next. Cada card: imagen arriba + titulo bold (keyword en strong) + descripcion. 3 cards visibles en desktop. Cards con bg surface, border white/8, rounded-2xl. Mapear a features de Renderly: AI Staging, Style Library, MLS-Ready, Video Tours, Custom Branding, Batch Processing.

4. HOW IT WORKS (TABBED): Layout 2 columnas. Izquierda: tab list vertical con "STEP 1/2/3", titulo H3, descripcion. Tab activo: borde izquierdo accent, texto brillante. Derecha: screenshot/imagen del step activo. Usar los 3 pasos de copy.ts.

5. BIG CLAIM SECTION: Seccion full-width dark. Badge pill "10,000+ rooms staged". H2 muy grande: "Save 95% vs Traditional Staging" con "95%" en color accent. Screenshot/imagen de fondo dimmed.

6. TESTIMONIALS CAROUSEL: Stars (5) + "4.9/5 Rating" + avatar stack. H2 "Trusted by 2,000+ agents & homeowners". Carousel horizontal de cards oscuras. Cada card: icono quote (azul), texto testimonial, separador, avatar + nombre. NOTA: No tenemos testimonials reales — crea 6-8 testimonials plausibles de agentes inmobiliarios ficticios sobre virtual staging.

7. PRICING: H2 + subtitle. Toggle "Per Property" / "Monthly" (adaptado al modelo de Renderly). 4 cards tier. Popular card con badge "Most Popular". Feature list con checks. CTA en cada card. Usar los datos de pricing de copy.ts.

8. FAQ (TABBED): Izquierda: H2 "Still have questions?" + link "Contact Us". Derecha: tabs horizontales (General, Pricing, Technical) + accordion. Distribuir las 7 preguntas de copy.ts entre los tabs.

9. FINAL CTA + FOOTER: CTA seccion dark con H2 + subtitle + boton CTA + "Watch Demo" link. Footer minimal: logo, 2 columnas de links, copyright.

Para CADA fase:
1. Implementa la seccion
2. npm run build — si falla, corrige
3. Verifica visualmente que replica el patron de sandcastles.ai
4. Commit: "fase-N: [nombre seccion]"
5. Avanza a la siguiente fase

Al terminar, ELIMINA las secciones/componentes viejos que ya no se usen (scroll-expansion-hero, pulse-beams, etc. si los reemplazaste).

Si una fase falla build 3 veces seguidas, documenta en PROBLEMAS.md y avanza.

Al finalizar todas las fases, crea RESUMEN.md con: que se implemento en cada fase, decisiones tomadas, estado del build, y cualquier deuda tecnica.
