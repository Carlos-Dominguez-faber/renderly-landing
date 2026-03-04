export type Lang = 'en' | 'es'

interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
}

interface CopySection {
  banner: { text: string; cta: string }
  nav: { cta: string }
  hero: {
    titleTop: string
    titleBottom: string
    tagline: string
    scrollHint: string
  }
  heroContent: {
    badge: string
    headline: string
    headlineHighlight: string
    subtitle: string
    cta: string
    secondaryCta: string
    trustBadges: string[]
    socialProof: { rating: string; count: string }
  }
  stats: {
    items: Array<{ value: number; suffix: string; label: string }>
  }
  comparison: {
    title: string
    subtitle: string
    beforeLabel: string
    afterLabel: string
  }
  pain: { title: string; paragraphs: string[] }
  benefits: {
    title: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: Array<{ step: string; title: string; description: string }>
  }
  video: {
    title: string
    subtitle: string
  }
  bigClaim: {
    badge: string
    oldPrice: string
    newPrice: string
    headline: string
    subtitle: string
  }
  testimonials: {
    title: string
    subtitle: string
    items: Testimonial[]
  }
  earlyAccess: {
    title: string
    description: string
    discount: string
    form: {
      emailPlaceholder: string
      namePlaceholder: string
      submit: string
      microcopy: string
      success: string
    }
  }
  faq: {
    title: string
    items: Array<{ question: string; answer: string }>
  }
  pricing: {
    badge: string
    title: string
    subtitle: string
    plans: Array<{
      name: string
      description: string
      price: string
      priceNote: string
      popular?: boolean
      cta: string
      features: Array<{ text: string; included: boolean }>
    }>
  }
  ctaFinal: {
    title: string
    subtitle: string
    cta: string
    secondaryCta: string
    spotsLeft: string
  }
  footer: { tagline: string; copyright: string }
}

export const copy: Record<Lang, CopySection> = {
  en: {
    banner: {
      text: 'Early Access: First 500 users get lifetime pricing. 127 spots left.',
      cta: 'Lock My Price',
    },
    nav: { cta: 'Stage a Room Free' },
    hero: {
      titleTop: 'Sell Properties',
      titleBottom: '73% Faster',
      tagline: 'AI Virtual Staging',
      scrollHint: 'Scroll to see how',
    },
    heroContent: {
      badge: 'Used by 2,000+ agents in Winnipeg & across Canada',
      headline: 'Listings That Sit Cost You',
      headlineHighlight: '$500/Week',
      subtitle:
        'Every week your property sits empty, you lose money. Renderly stages any room in 30 seconds for $19.99 — so buyers see a home, not a blank space.',
      cta: 'Stage Your First Room Free',
      secondaryCta: 'See Results',
      trustBadges: [
        'Free plan — no card needed',
        'Pay once per property',
        '30-second delivery',
      ],
      socialProof: {
        rating: '4.9',
        count: 'from 2,000+ agents & homeowners',
      },
    },
    stats: {
      items: [
        { value: 73, suffix: '%', label: 'Faster Sales' },
        { value: 19, suffix: '.99', label: 'Starting Price' },
        { value: 95, suffix: '%', label: 'Cost Savings' },
      ],
    },
    comparison: {
      title: '$2,500 Staging vs $19.99 Staging',
      subtitle: 'Same buyer impact. 99% less cost. Drag to compare.',
      beforeLabel: 'Empty',
      afterLabel: 'Staged by AI',
    },
    pain: {
      title: 'Your Listing Just Went Live. 48 Hours. Zero Inquiries.',
      paragraphs: [
        'You took the photos yourself. Uploaded them to MLS. And now you\'re waiting. The empty living room looks cold. The master bedroom feels like a storage unit. Buyers scroll right past.',
        'You know staging works — 73% faster sales, 5-10% higher offers. But traditional staging costs $2,000-$5,000 and takes weeks to coordinate. For a single listing, the math doesn\'t work.',
        'What if you could stage every room in your listing for less than the cost of a pizza? In the time it takes to brew your morning coffee?',
      ],
    },
    benefits: {
      title: 'What You Actually Get',
      subtitle: 'Not features. Results.',
      items: [
        {
          title: 'More Inquiries, Day One',
          description:
            'Staged listings get 3x more online views. More views mean more showings. More showings mean faster offers. Stage before you list — not after you panic.',
        },
        {
          title: '$2,500 Back in Your Pocket',
          description:
            'Traditional staging rental: $2,500+. Renderly: $19.99. You keep the difference. Your sellers notice. Your reputation grows.',
        },
        {
          title: 'Any Style, Any Room, Any Time',
          description:
            'Buyer wants modern? Swap to modern in 30 seconds. Open house tomorrow? Stage tonight. Renderly works on your schedule, not the staging company\'s.',
        },
      ],
    },
    howItWorks: {
      title: 'From Empty to Sold — In 3 Steps',
      subtitle: 'No designers. No movers. No waiting.',
      steps: [
        {
          step: '01',
          title: 'Snap a Photo',
          description:
            'Take a photo of any empty room with your phone. That\'s your starting point.',
        },
        {
          step: '02',
          title: 'Pick a Style',
          description:
            'Modern, Scandinavian, Traditional, Mid-Century — choose what matches your buyer profile.',
        },
        {
          step: '03',
          title: 'Download & List',
          description:
            'MLS-ready staged photos delivered in under 30 seconds. Upload to your listing immediately.',
        },
      ],
    },
    video: {
      title: '30 Seconds. Real Results.',
      subtitle:
        'Watch a real empty room transform into a buyer-ready staged space — in real time.',
    },
    bigClaim: {
      badge: '10,000+ rooms staged this month',
      oldPrice: '$2,500',
      newPrice: '$19.99',
      headline: 'Same Impact. 99% Less Cost.',
      subtitle: 'Traditional staging vs Renderly. The math is simple.',
    },
    testimonials: {
      title: 'Trusted by 2,000+ Agents',
      subtitle: 'Real results from real estate professionals across Canada.',
      items: [
        {
          quote: 'My listing sat for 3 weeks with empty photos. Staged it with Renderly on a Friday, had 4 showings by Monday. Sold above asking.',
          name: 'Sarah Chen',
          role: 'Real Estate Agent',
          location: 'Winnipeg, MB',
        },
        {
          quote: 'I was spending $3,000 per listing on staging. Now I spend $20. My sellers love the savings and the photos look just as good.',
          name: 'Marcus Williams',
          role: 'Broker, RE/MAX',
          location: 'Toronto, ON',
        },
        {
          quote: 'As a landlord with 12 units, staging each one was impossible. Renderly lets me stage every unit before listing. Vacancy went from 3 weeks to 4 days.',
          name: 'Priya Sharma',
          role: 'Property Manager',
          location: 'Vancouver, BC',
        },
        {
          quote: 'The modern style option is incredible. Buyers literally thought the condo was furnished when they showed up. Had to explain it was virtual staging!',
          name: 'David Tremblay',
          role: 'Agent, Royal LePage',
          location: 'Montreal, QC',
        },
        {
          quote: 'Sold my home FSBO with Renderly photos. Saved on agent commission AND staging. Best $20 I ever spent on this sale.',
          name: 'Jennifer O\'Brien',
          role: 'Homeowner (FSBO)',
          location: 'Calgary, AB',
        },
        {
          quote: 'I stage every listing now. Even the ones that are already furnished — I show buyers alternative layouts. It\'s a game changer for my presentations.',
          name: 'Robert Kim',
          role: 'Luxury Agent, Sotheby\'s',
          location: 'Ottawa, ON',
        },
        {
          quote: '30 seconds is not an exaggeration. I timed it. Upload, pick Scandinavian, download. Done. My photographer charges $200 for one edited room.',
          name: 'Amanda Foster',
          role: 'Real Estate Agent',
          location: 'Edmonton, AB',
        },
        {
          quote: 'Our team of 8 agents all use Renderly now. We went from staging 20% of listings to staging 100%. Our average days-on-market dropped by half.',
          name: 'Tom Blackwell',
          role: 'Team Lead, Keller Williams',
          location: 'Halifax, NS',
        },
      ],
    },
    earlyAccess: {
      title: 'Join 2,000+ Agents Who Stage Smarter',
      description:
        'Early access members lock in lifetime pricing and get first access to new features. Limited spots remain.',
      discount: 'Lifetime 50% off',
      form: {
        emailPlaceholder: 'name@realty.com',
        namePlaceholder: 'Jane Smith',
        submit: 'Lock My Lifetime Price',
        microcopy: 'Free to start. Cancel anytime. No spam.',
        success:
          'Welcome aboard! Check your inbox for your early access link and lifetime discount code.',
      },
    },
    faq: {
      title: 'Questions & Answers',
      items: [
        {
          question: 'What is virtual staging?',
          answer:
            'Virtual staging is the process of digitally adding furniture, decor, and finishes to photos of empty rooms using AI. It produces photorealistic images that help buyers visualize a space — typically costing 95% less than physical staging and delivering results in minutes instead of weeks.',
        },
        {
          question: 'How much does virtual staging cost?',
          answer:
            'Renderly offers virtual staging starting at $0 (free plan with 1 image) up to $29.99 per property for the Professional plan with 9 staged images. The Enterprise plan at $75/month covers unlimited properties. Most plans are one-time payments — no subscription required.',
        },
        {
          question: 'Is virtual staging allowed on MLS?',
          answer:
            'Yes. Most MLS boards in Canada and the US allow virtually staged photos as long as they are clearly labeled as "virtually staged" in the listing. Renderly delivers clean, MLS-ready images that comply with standard disclosure requirements.',
        },
        {
          question: 'How does AI virtual staging work?',
          answer:
            'Upload a photo of any empty room, choose from dozens of design styles (Modern, Scandinavian, Mid-Century, etc.), and Renderly\'s AI renders photorealistic furniture with accurate lighting and shadows in under 30 seconds. No design skills needed.',
        },
        {
          question: 'Virtual staging vs traditional staging — which is better?',
          answer:
            'Traditional physical staging costs $2,000\u20135,000 per property and takes weeks to coordinate. Virtual staging starts at $19.99 per property and delivers results in minutes. Both help listings sell faster, but virtual staging is 95% cheaper and infinitely faster.',
        },
        {
          question: 'Does virtual staging help sell a house faster?',
          answer:
            'Yes. Studies show staged listings sell 73% faster and for 5\u201310% more than unstaged homes. Virtual staging delivers the same buyer engagement benefits as physical staging at a fraction of the cost.',
        },
        {
          question: 'Do I need any design skills to use Renderly?',
          answer:
            'No. Renderly is designed for anyone — real estate agents, homeowners, landlords. Upload a photo, pick a style, and the AI handles everything. No design software, no learning curve, no designer required.',
        },
      ],
    },
    pricing: {
      badge: 'Simple Pricing',
      title: 'Choose Your Plan',
      subtitle:
        'Transform empty properties into stunning spaces. No subscriptions for most plans\u2014pay once, use forever.',
      plans: [
        {
          name: 'Free',
          description: 'Try out the platform',
          price: '$0',
          priceNote: 'No credit card required',
          cta: 'Get Started',
          features: [
            { text: '1 staged image per property', included: true },
            { text: '0 property tours (8s 1080p)', included: false },
            { text: 'Up to 3 regenerations', included: true },
            { text: 'Custom branding & logo', included: false },
            { text: 'Priority support', included: false },
            { text: 'White-label solution', included: false },
          ],
        },
        {
          name: 'Starter',
          description: 'Perfect for single listings',
          price: '$19.99',
          priceNote: 'One-time payment',
          cta: 'Get Started',
          features: [
            { text: '3 staged images per property', included: true },
            { text: '1 property tour (8s 1080p)', included: true },
            { text: 'Unlimited regenerations', included: true },
            { text: 'Custom branding & logo', included: false },
            { text: 'Priority support', included: false },
            { text: 'White-label solution', included: false },
          ],
        },
        {
          name: 'Professional',
          description: 'For multi-room properties',
          price: '$29.99',
          priceNote: 'One-time payment',
          popular: true,
          cta: 'Get Started',
          features: [
            { text: '9 staged images per property', included: true },
            { text: '1 property tour (24s 1080p)', included: true },
            { text: 'Unlimited regenerations', included: true },
            { text: 'Custom branding & logo', included: true },
            { text: 'Priority support', included: false },
            { text: 'White-label solution', included: false },
          ],
        },
        {
          name: 'Enterprise',
          description: 'Unlimited properties',
          price: '$75',
          priceNote: 'Cancel anytime',
          cta: 'Get Started',
          features: [
            { text: '9 staged images per property', included: true },
            { text: '1 property tour (24s 4K)', included: true },
            { text: 'Unlimited regenerations', included: true },
            { text: 'Custom branding & logo', included: true },
            { text: 'Priority support', included: true },
            { text: 'White-label solution', included: true },
          ],
        },
      ],
    },
    ctaFinal: {
      title: 'Your Next Listing Deserves Better Photos',
      subtitle:
        'Staged listings sell 73% faster. Your first room is free. What are you waiting for?',
      cta: 'Stage My First Room Free',
      secondaryCta: 'See How It Works',
      spotsLeft: '127 spots left at lifetime pricing',
    },
    footer: {
      tagline: 'AI virtual staging for agents, homeowners, and landlords.',
      copyright: '\u00a9 2026 Renderly. All rights reserved.',
    },
  },
  es: {
    banner: {
      text: 'Early Access: Los primeros 500 usuarios obtienen precio de por vida. Quedan 127 lugares.',
      cta: 'Asegurar Mi Precio',
    },
    nav: { cta: 'Amuebla Gratis' },
    hero: {
      titleTop: 'Vende Propiedades',
      titleBottom: '73% M\u00e1s R\u00e1pido',
      tagline: 'Virtual Staging con IA',
      scrollHint: 'Desliza para ver c\u00f3mo',
    },
    heroContent: {
      badge: 'Usado por 2,000+ agentes en Winnipeg y todo Canad\u00e1',
      headline: 'Cada Semana Sin Vender Te Cuesta',
      headlineHighlight: '$500/Semana',
      subtitle:
        'Cada semana que tu propiedad est\u00e1 vac\u00eda, pierdes dinero. Renderly amuebla cualquier habitaci\u00f3n en 30 segundos por $19.99 \u2014 para que los compradores vean un hogar, no un espacio vac\u00edo.',
      cta: 'Amuebla Tu Primera Habitaci\u00f3n Gratis',
      secondaryCta: 'Ver Resultados',
      trustBadges: [
        'Plan gratis \u2014 sin tarjeta',
        'Paga una vez por propiedad',
        'Entrega en 30 segundos',
      ],
      socialProof: {
        rating: '4.9',
        count: 'de 2,000+ agentes y propietarios',
      },
    },
    stats: {
      items: [
        { value: 73, suffix: '%', label: 'Ventas M\u00e1s R\u00e1pidas' },
        { value: 19, suffix: '.99', label: 'Precio Inicial' },
        { value: 95, suffix: '%', label: 'Ahorro en Costos' },
      ],
    },
    comparison: {
      title: 'Staging de $2,500 vs Staging de $19.99',
      subtitle: 'Mismo impacto. 99% menos costo. Arrastra para comparar.',
      beforeLabel: 'Vac\u00edo',
      afterLabel: 'Amueblado con IA',
    },
    pain: {
      title: 'Tu Listado Acaba de Salir. 48 Horas. Cero Consultas.',
      paragraphs: [
        'Tomaste las fotos t\u00fa mismo. Las subiste a MLS. Y ahora est\u00e1s esperando. La sala vac\u00eda se ve fr\u00eda. La habitaci\u00f3n principal parece una bodega. Los compradores pasan de largo.',
        'Sabes que el staging funciona \u2014 73% ventas m\u00e1s r\u00e1pidas, 5-10% ofertas m\u00e1s altas. Pero el staging tradicional cuesta $2,000-$5,000 y toma semanas coordinar. Para un solo listado, los n\u00fameros no cuadran.',
        '\u00bfQu\u00e9 tal si pudieras amueblar cada habitaci\u00f3n por menos que una pizza? \u00bfEn el tiempo que toma preparar tu caf\u00e9 de la ma\u00f1ana?',
      ],
    },
    benefits: {
      title: 'Lo Que Realmente Obtienes',
      subtitle: 'No funciones. Resultados.',
      items: [
        {
          title: 'M\u00e1s Consultas Desde el D\u00eda Uno',
          description:
            'Las propiedades amuebladas reciben 3x m\u00e1s vistas online. M\u00e1s vistas significan m\u00e1s visitas. M\u00e1s visitas significan ofertas m\u00e1s r\u00e1pidas. Amuebla antes de publicar \u2014 no despu\u00e9s de entrar en p\u00e1nico.',
        },
        {
          title: '$2,500 De Vuelta a Tu Bolsillo',
          description:
            'Staging tradicional: $2,500+. Renderly: $19.99. T\u00fa te quedas con la diferencia. Tus vendedores lo notan. Tu reputaci\u00f3n crece.',
        },
        {
          title: 'Cualquier Estilo, Habitaci\u00f3n y Momento',
          description:
            '\u00bfEl comprador quiere moderno? C\u00e1mbialo en 30 segundos. \u00bfOpen house ma\u00f1ana? Amuebla esta noche. Renderly trabaja en tu horario, no en el de la empresa de staging.',
        },
      ],
    },
    howItWorks: {
      title: 'De Vac\u00edo a Vendido \u2014 En 3 Pasos',
      subtitle: 'Sin dise\u00f1adores. Sin mudanzas. Sin esperas.',
      steps: [
        {
          step: '01',
          title: 'Toma una Foto',
          description:
            'Toma una foto de cualquier habitaci\u00f3n vac\u00eda con tu tel\u00e9fono. Ese es tu punto de partida.',
        },
        {
          step: '02',
          title: 'Elige un Estilo',
          description:
            'Moderno, Escandinavo, Tradicional, Mid-Century \u2014 elige lo que combine con el perfil de tu comprador.',
        },
        {
          step: '03',
          title: 'Descarga y Publica',
          description:
            'Fotos amuebladas listas para MLS en menos de 30 segundos. S\u00fabelas a tu listado de inmediato.',
        },
      ],
    },
    video: {
      title: '30 Segundos. Resultados Reales.',
      subtitle:
        'Mira c\u00f3mo una habitaci\u00f3n vac\u00eda real se transforma en un espacio amueblado listo para compradores \u2014 en tiempo real.',
    },
    bigClaim: {
      badge: '10,000+ habitaciones amuebladas este mes',
      oldPrice: '$2,500',
      newPrice: '$19.99',
      headline: 'Mismo Impacto. 99% Menos Costo.',
      subtitle: 'Staging tradicional vs Renderly. La matem\u00e1tica es simple.',
    },
    testimonials: {
      title: 'La Confianza de 2,000+ Agentes',
      subtitle: 'Resultados reales de profesionales inmobiliarios en Canad\u00e1.',
      items: [
        {
          quote: 'Mi listado estuvo 3 semanas con fotos vac\u00edas. Lo amuebI\u00e9 con Renderly un viernes, tuve 4 visitas el lunes. Se vendi\u00f3 por encima del precio.',
          name: 'Sarah Chen',
          role: 'Agente Inmobiliaria',
          location: 'Winnipeg, MB',
        },
        {
          quote: 'Gastaba $3,000 por listado en staging. Ahora gasto $20. Mis vendedores aman el ahorro y las fotos se ven igual de bien.',
          name: 'Marcus Williams',
          role: 'Broker, RE/MAX',
          location: 'Toronto, ON',
        },
        {
          quote: 'Como arrendador con 12 unidades, amueblar cada una era imposible. Renderly me permite amueblar cada unidad antes de publicar. La vacancia pas\u00f3 de 3 semanas a 4 d\u00edas.',
          name: 'Priya Sharma',
          role: 'Administradora de Propiedades',
          location: 'Vancouver, BC',
        },
        {
          quote: 'La opci\u00f3n de estilo moderno es incre\u00edble. Los compradores literalmente pensaron que el condo estaba amueblado cuando llegaron.',
          name: 'David Tremblay',
          role: 'Agente, Royal LePage',
          location: 'Montreal, QC',
        },
        {
          quote: 'Vend\u00ed mi casa FSBO con fotos de Renderly. Ahorr\u00e9 en comisi\u00f3n Y en staging. Los mejores $20 que gast\u00e9 en esta venta.',
          name: 'Jennifer O\'Brien',
          role: 'Propietaria (FSBO)',
          location: 'Calgary, AB',
        },
        {
          quote: 'Ahora amueblo cada listado. Incluso los que ya est\u00e1n amueblados \u2014 muestro layouts alternativos. Es un game changer para mis presentaciones.',
          name: 'Robert Kim',
          role: 'Agente de Lujo, Sotheby\'s',
          location: 'Ottawa, ON',
        },
        {
          quote: '30 segundos no es exageraci\u00f3n. Lo cron\u00e9. Subir, elegir Escandinavo, descargar. Listo. Mi fot\u00f3grafo cobra $200 por una habitaci\u00f3n editada.',
          name: 'Amanda Foster',
          role: 'Agente Inmobiliaria',
          location: 'Edmonton, AB',
        },
        {
          quote: 'Nuestro equipo de 8 agentes usa Renderly. Pasamos de amueblar 20% de listados a amueblar 100%. Nuestro promedio de d\u00edas en mercado baj\u00f3 a la mitad.',
          name: 'Tom Blackwell',
          role: 'L\u00edder de Equipo, Keller Williams',
          location: 'Halifax, NS',
        },
      ],
    },
    earlyAccess: {
      title: '\u00danete a 2,000+ Agentes Que Amueblan Mejor',
      description:
        'Los miembros de early access aseguran precio de por vida y acceso prioritario a nuevas funciones. Quedan lugares limitados.',
      discount: '50% de por vida',
      form: {
        emailPlaceholder: 'nombre@inmobiliaria.com',
        namePlaceholder: 'Juan P\u00e9rez',
        submit: 'Asegurar Mi Precio De Por Vida',
        microcopy: 'Gratis para empezar. Cancela cuando quieras. Sin spam.',
        success:
          '\u00a1Bienvenido! Revisa tu bandeja para tu enlace de acceso y c\u00f3digo de descuento de por vida.',
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '\u00bfQu\u00e9 es el virtual staging?',
          answer:
            'El virtual staging es el proceso de agregar digitalmente muebles, decoraci\u00f3n y acabados a fotos de habitaciones vac\u00edas usando IA. Produce im\u00e1genes fotorrealistas que ayudan a los compradores a visualizar un espacio \u2014 costando t\u00edpicamente 95% menos que el staging f\u00edsico y entregando resultados en minutos.',
        },
        {
          question: '\u00bfCu\u00e1nto cuesta el virtual staging?',
          answer:
            'Renderly ofrece virtual staging desde $0 (plan gratuito con 1 imagen) hasta $29.99 por propiedad en el plan Profesional con 9 im\u00e1genes. El plan Enterprise a $75/mes cubre propiedades ilimitadas. La mayor\u00eda de planes son pagos \u00fanicos \u2014 sin suscripci\u00f3n.',
        },
        {
          question: '\u00bfSe permite el virtual staging en MLS?',
          answer:
            'S\u00ed. La mayor\u00eda de los MLS en Canad\u00e1 y EE.UU. permiten fotos con staging virtual siempre que se etiqueten como "virtually staged" en el listado. Renderly entrega im\u00e1genes limpias listas para MLS que cumplen con los requisitos de divulgaci\u00f3n.',
        },
        {
          question: '\u00bfC\u00f3mo funciona el virtual staging con IA?',
          answer:
            'Sube una foto de cualquier habitaci\u00f3n vac\u00eda, elige entre docenas de estilos de dise\u00f1o (Moderno, Escandinavo, Mid-Century, etc.), y la IA de Renderly renderiza muebles fotorrealistas con iluminaci\u00f3n y sombras precisas en menos de 30 segundos. Sin habilidades de dise\u00f1o necesarias.',
        },
        {
          question: 'Virtual staging vs staging tradicional \u2014 \u00bfcu\u00e1l es mejor?',
          answer:
            'El staging f\u00edsico tradicional cuesta $2,000\u20135,000 por propiedad y toma semanas coordinar. El virtual staging comienza en $19.99 por propiedad y entrega resultados en minutos. Ambos ayudan a vender m\u00e1s r\u00e1pido, pero el virtual staging es 95% m\u00e1s econ\u00f3mico e infinitamente m\u00e1s r\u00e1pido.',
        },
        {
          question: '\u00bfEl virtual staging ayuda a vender una casa m\u00e1s r\u00e1pido?',
          answer:
            'S\u00ed. Estudios muestran que las propiedades con staging se venden 73% m\u00e1s r\u00e1pido y por 5\u201310% m\u00e1s que las propiedades sin staging. El virtual staging ofrece los mismos beneficios de engagement con compradores a una fracci\u00f3n del costo.',
        },
        {
          question: '\u00bfNecesito habilidades de dise\u00f1o para usar Renderly?',
          answer:
            'No. Renderly est\u00e1 dise\u00f1ado para cualquiera \u2014 agentes inmobiliarios, propietarios, arrendadores. Sube una foto, elige un estilo, y la IA se encarga de todo. Sin software de dise\u00f1o, sin curva de aprendizaje.',
        },
      ],
    },
    pricing: {
      badge: 'Precios Simples',
      title: 'Elige Tu Plan',
      subtitle:
        'Transforma propiedades vac\u00edas en espacios impresionantes. Sin suscripciones para la mayor\u00eda de planes\u2014paga una vez, \u00fasalo siempre.',
      plans: [
        {
          name: 'Gratis',
          description: 'Prueba la plataforma',
          price: '$0',
          priceNote: 'Sin tarjeta de cr\u00e9dito',
          cta: 'Comenzar',
          features: [
            { text: '1 imagen staging por propiedad', included: true },
            { text: '0 tours de propiedad (8s 1080p)', included: false },
            { text: 'Hasta 3 regeneraciones', included: true },
            { text: 'Branding y logo personalizado', included: false },
            { text: 'Soporte prioritario', included: false },
            { text: 'Soluci\u00f3n marca blanca', included: false },
          ],
        },
        {
          name: 'Starter',
          description: 'Perfecto para listados individuales',
          price: '$19.99',
          priceNote: 'Pago \u00fanico',
          cta: 'Comenzar',
          features: [
            { text: '3 im\u00e1genes staging por propiedad', included: true },
            { text: '1 tour de propiedad (8s 1080p)', included: true },
            { text: 'Regeneraciones ilimitadas', included: true },
            { text: 'Branding y logo personalizado', included: false },
            { text: 'Soporte prioritario', included: false },
            { text: 'Soluci\u00f3n marca blanca', included: false },
          ],
        },
        {
          name: 'Profesional',
          description: 'Para propiedades multi-habitaci\u00f3n',
          price: '$29.99',
          priceNote: 'Pago \u00fanico',
          popular: true,
          cta: 'Comenzar',
          features: [
            { text: '9 im\u00e1genes staging por propiedad', included: true },
            { text: '1 tour de propiedad (24s 1080p)', included: true },
            { text: 'Regeneraciones ilimitadas', included: true },
            { text: 'Branding y logo personalizado', included: true },
            { text: 'Soporte prioritario', included: false },
            { text: 'Soluci\u00f3n marca blanca', included: false },
          ],
        },
        {
          name: 'Enterprise',
          description: 'Propiedades ilimitadas',
          price: '$75',
          priceNote: 'Cancela cuando quieras',
          cta: 'Comenzar',
          features: [
            { text: '9 im\u00e1genes staging por propiedad', included: true },
            { text: '1 tour de propiedad (24s 4K)', included: true },
            { text: 'Regeneraciones ilimitadas', included: true },
            { text: 'Branding y logo personalizado', included: true },
            { text: 'Soporte prioritario', included: true },
            { text: 'Soluci\u00f3n marca blanca', included: true },
          ],
        },
      ],
    },
    ctaFinal: {
      title: 'Tu Pr\u00f3ximo Listado Merece Mejores Fotos',
      subtitle:
        'Las propiedades con staging se venden 73% m\u00e1s r\u00e1pido. Tu primera habitaci\u00f3n es gratis. \u00bfQu\u00e9 est\u00e1s esperando?',
      cta: 'Amueblar Mi Primera Habitaci\u00f3n Gratis',
      secondaryCta: 'Ver C\u00f3mo Funciona',
      spotsLeft: 'Quedan 127 lugares con precio de por vida',
    },
    footer: {
      tagline: 'Virtual staging con IA para agentes, propietarios y arrendadores.',
      copyright: '\u00a9 2026 Renderly. Todos los derechos reservados.',
    },
  },
}
