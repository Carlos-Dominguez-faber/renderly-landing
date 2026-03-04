export type Lang = 'en' | 'es'

interface FeatureItem {
  title: string
  titleHighlight: string
  description: string
  image: string
}

interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
  rating: number
}

interface CopySection {
  banner: { text: string; cta: string }
  nav: {
    cta: string
    links: { features: string; pricing: string; faq: string }
  }
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
  bigClaim: {
    badge: string
    oldPrice: string
    newPrice: string
    headline: string
    subtitle: string
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
  features: {
    badge: string
    items: FeatureItem[]
  }
  howItWorks: {
    title: string
    subtitle: string
    stepPrefix: string
    steps: Array<{ step: string; title: string; description: string }>
  }
  video: {
    title: string
    subtitle: string
  }
  testimonials: {
    heading: string
    ratingLabel: string
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
    badge: string
    subtitle: string
    contactCta: string
    tabs: Array<{ id: string; label: string }>
    items: Array<{ question: string; answer: string }>
  }
  pricing: {
    badge: string
    title: string
    subtitle: string
    popularBadge: string
    featuresIncluded: string
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
    trustItems: string[]
    videoLabel: string
  }
  footer: {
    tagline: string
    copyright: string
    productLabel: string
    companyLabel: string
    links: {
      features: string
      pricing: string
      faq: string
      about: string
      contact: string
      login: string
    }
    privacyLink: string
    termsLink: string
  }
}

export const copy: Record<Lang, CopySection> = {
  en: {
    banner: {
      text: 'Early Access: 50% off all paid plans. Limited spots.',
      cta: 'Claim Discount',
    },
    nav: {
      cta: 'Get Started Free',
      links: { features: 'Features', pricing: 'Pricing', faq: 'FAQ' },
    },
    hero: {
      titleTop: 'AI Virtual Staging',
      titleBottom: 'from $19.99 per Property',
      tagline: 'No Designer Needed',
      scrollHint: 'Scroll to explore',
    },
    heroContent: {
      badge: 'AI-Powered Virtual Staging',
      headline: 'Affordable Virtual Home Staging',
      headlineHighlight: 'from $19.99',
      subtitle:
        'Upload a photo, pick a style, get MLS-ready staged images in minutes. No designer needed. Serving Winnipeg, Canada & beyond.',
      cta: 'Stage Your First Room Free',
      secondaryCta: 'Watch Demo',
      trustBadges: [
        'No credit card required',
        'Pay once, use forever',
        'Results in 30 seconds',
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
    bigClaim: {
      badge: '10,000+ rooms staged this month',
      oldPrice: '$2,500',
      newPrice: '$19.99',
      headline: 'Same Impact. 99% Less Cost.',
      subtitle: 'Traditional staging vs Renderly. The math is simple.',
    },
    comparison: {
      title: 'See the Transformation',
      subtitle:
        'Drag the slider to compare an empty room with AI-powered virtual staging.',
      beforeLabel: 'Before',
      afterLabel: 'After',
    },
    pain: {
      title: 'Empty Rooms Don\'t Sell',
      paragraphs: [
        'Whether you\'re a real estate agent, a homeowner selling your property, or a landlord listing a rental, you already know: buyers can\'t picture themselves living in a blank space. So you stage, and that\'s where the headache starts.',
        'Physical staging runs $2,000 to $5,000 per property. You coordinate with rental companies, schedule movers, hope nothing gets damaged. The whole process takes weeks.',
        'Want a different style for a different buyer profile? Start over. Pay again. Meanwhile, your listing sits and motivated buyers move on.',
      ],
    },
    benefits: {
      title: 'Master Every Detail',
      subtitle:
        'Our AI doesn\'t just place furniture. It understands architecture, lighting, and materials to create photorealistic results.',
      items: [
        {
          title: 'Lightning Processing',
          description:
            'Proprietary neural networks render complex lighting and shadows in under a minute. 100x faster than traditional manual editing.',
        },
        {
          title: 'A Fraction of the Cost',
          description:
            'Replace expensive physical staging. Save up to $2,500 per property listing with unlimited revisions to get the perfect look.',
        },
        {
          title: 'Design Library',
          description:
            'Access over 5,000+ 3D assets curated by professional interior designers. From Mid-Century Modern to Contemporary Chic.',
        },
      ],
    },
    features: {
      badge: 'Features',
      items: [
        {
          title: 'AI Virtual',
          titleHighlight: 'Staging',
          description: 'Transform empty rooms into beautifully furnished spaces with photorealistic AI in under 30 seconds.',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Style',
          titleHighlight: 'Library',
          description: 'Choose from 5,000+ curated 3D assets. Modern, Scandinavian, Mid-Century, and every aesthetic covered.',
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'MLS-Ready',
          titleHighlight: 'Output',
          description: 'High-resolution images optimized for MLS listings, social media, and print marketing materials.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Video',
          titleHighlight: 'Tours',
          description: 'Generate cinematic property walkthroughs from your staged photos. Up to 24 seconds in 4K quality.',
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Custom',
          titleHighlight: 'Branding',
          description: 'Add your logo and brand colors to every staged image. Professional presentation for every listing.',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Batch',
          titleHighlight: 'Processing',
          description: 'Stage entire properties at once. Upload multiple rooms and get all results in a single batch.',
          image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80&auto=format&fit=crop',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three steps. That\'s it.',
      stepPrefix: 'Step',
      steps: [
        {
          step: '01',
          title: 'Upload',
          description:
            'Snap a photo of any empty room and upload it to Renderly.',
        },
        {
          step: '02',
          title: 'Style',
          description:
            'Choose from dozens of design styles. Modern, traditional, mid-century, Scandinavian. You pick.',
        },
        {
          step: '03',
          title: 'Download',
          description:
            'Get your professionally staged photo in minutes. Ready for MLS, social media, or your listing page.',
        },
      ],
    },
    video: {
      title: 'See It in Action',
      subtitle:
        'Watch how Renderly transforms an empty room into a beautifully staged space in seconds.',
    },
    testimonials: {
      heading: 'Trusted by 2,000+ agents & homeowners',
      ratingLabel: '/5 Rating',
      items: [
        {
          name: 'Sarah Mitchell',
          role: 'Real Estate Agent, RE/MAX',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          text: 'Renderly cut my staging costs by 90%. I used to spend $3,000 per listing on physical staging. Now I get better-looking photos for $29.99. My listings sell in half the time.',
          rating: 5,
        },
        {
          name: 'Marcus Chen',
          role: 'Broker, Coldwell Banker',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          text: 'The AI understands lighting and shadows in a way I have never seen before. Buyers literally cannot tell the difference between our virtual staging and real photos.',
          rating: 5,
        },
        {
          name: 'Emily Rodriguez',
          role: 'Property Manager',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          text: 'Managing 40+ rental units means staging is impossible. With Renderly, I stage every vacant unit in minutes. Vacancy rates dropped 35% since we started using it.',
          rating: 5,
        },
        {
          name: 'David Park',
          role: 'Real Estate Agent, Keller Williams',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          text: 'The video tours feature is a game-changer. I send 8-second walkthrough videos to potential buyers and get 3x more showing requests than with static photos alone.',
          rating: 5,
        },
        {
          name: 'Jessica Thompson',
          role: 'Homeowner, Winnipeg',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
          text: 'Selling FSBO and saved thousands by staging virtually. The Scandinavian style I chose got so many compliments during showings. Sold above asking price!',
          rating: 5,
        },
        {
          name: 'Robert Williams',
          role: 'Commercial Agent, CBRE',
          avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
          text: 'We use Renderly for commercial properties too. Conference rooms, lobbies, open offices. The AI handles it all. Batch processing saves us hours every week.',
          rating: 5,
        },
        {
          name: 'Amanda Foster',
          role: 'Interior Designer & Agent',
          avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
          text: 'As a designer, I was skeptical. But the quality of the 3D assets and the lighting accuracy genuinely impressed me. I now recommend it to all my agent clients.',
          rating: 5,
        },
        {
          name: 'Michael Torres',
          role: 'Real Estate Investor',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          text: 'Flipping houses means fast turnaround. Renderly lets me list properties before renovations are complete. I stage the "after" vision and attract buyers early.',
          rating: 5,
        },
      ],
    },
    earlyAccess: {
      title: 'Join the Early Access',
      description:
        'Renderly is launching and we\'re inviting a select group of agents to try it first. All we ask is your honest feedback.',
      discount: '50% off any paid plan',
      form: {
        emailPlaceholder: 'name@realty.com',
        namePlaceholder: 'Jane Smith',
        submit: 'Get Early Access - 50% Off',
        microcopy: 'Free to start. No spam, ever.',
        success:
          'You\'re in! Check your email for your early access link and discount code.',
      },
    },
    faq: {
      title: 'Questions & Answers',
      badge: 'FAQ',
      subtitle: 'Everything you need to know about Renderly',
      contactCta: 'Still have questions? Contact us',
      tabs: [
        { id: 'general', label: 'General' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'technical', label: 'Technical' },
      ],
      items: [
        {
          question: 'What is virtual staging?',
          answer:
            'Virtual staging is the process of digitally adding furniture, decor, and finishes to photos of empty rooms using AI. It produces photorealistic images that help buyers visualize a space, typically costing 95% less than physical staging and delivering results in minutes instead of weeks.',
        },
        {
          question: 'How much does virtual staging cost?',
          answer:
            'Renderly offers virtual staging starting at $0 (free plan with 1 image) up to $29.99 per property for the Professional plan with 9 staged images. The Enterprise plan at $75/month covers unlimited properties. Most plans are one-time payments, no subscription required.',
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
          question: 'Virtual staging vs traditional staging: which is better?',
          answer:
            'Traditional physical staging costs $2,000-$5,000 per property and takes weeks to coordinate. Virtual staging starts at $19.99 per property and delivers results in minutes. Both help listings sell faster, but virtual staging is 95% cheaper and infinitely faster.',
        },
        {
          question: 'Does virtual staging help sell a house faster?',
          answer:
            'Yes. Studies show staged listings sell 73% faster and for 5-10% more than unstaged homes. Virtual staging delivers the same buyer engagement benefits as physical staging at a fraction of the cost.',
        },
        {
          question: 'Do I need any design skills to use Renderly?',
          answer:
            'No. Renderly is built for real estate agents, homeowners, and landlords. Upload a photo, pick a style, and the AI handles everything. No design software, no learning curve, no designer required.',
        },
      ],
    },
    pricing: {
      badge: 'Simple Pricing',
      title: 'Choose Your Plan',
      subtitle:
        'Transform empty properties into stunning spaces. No subscriptions for most plans. Pay once, use forever.',
      popularBadge: 'Most Popular',
      featuresIncluded: 'Features included',
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
      title: 'Ready to Close More Deals?',
      subtitle:
        'Listings with virtual staging sell 30% faster and for 5-10% more. Start transforming your properties today.',
      cta: 'Claim Free Trial',
      secondaryCta: 'Watch Demo',
      trustItems: [
        'No credit card required',
        'Results in 30 seconds',
        'MLS-ready output',
      ],
      videoLabel: 'See Renderly in action',
    },
    footer: {
      tagline: 'AI-powered virtual staging for real estate professionals.',
      copyright: '\u00a9 2026 Renderly. All rights reserved.',
      productLabel: 'Product',
      companyLabel: 'Company',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        faq: 'FAQ',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
      },
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms of Service',
    },
  },
  es: {
    banner: {
      text: 'Early Access: 50% de descuento en todos los planes. Lugares limitados.',
      cta: 'Obtener Descuento',
    },
    nav: {
      cta: 'Empieza Gratis',
      links: { features: 'Funcionalidades', pricing: 'Precios', faq: 'FAQ' },
    },
    hero: {
      titleTop: 'Virtual Staging con IA',
      titleBottom: 'desde $19.99 por Propiedad',
      tagline: 'Sin Dise\u00f1ador',
      scrollHint: 'Desplaza para explorar',
    },
    heroContent: {
      badge: 'Virtual Staging con IA',
      headline: 'Virtual Home Staging Accesible',
      headlineHighlight: 'desde $19.99',
      subtitle:
        'Sube una foto, elige un estilo, obt\u00e9n im\u00e1genes staging listas para MLS en minutos. Sin dise\u00f1ador. Sirviendo Winnipeg, Canad\u00e1 y m\u00e1s all\u00e1.',
      cta: 'Amuebla Tu Primera Habitaci\u00f3n Gratis',
      secondaryCta: 'Ver Demo',
      trustBadges: [
        'Sin tarjeta de cr\u00e9dito',
        'Paga una vez, \u00fasalo siempre',
        'Resultados en 30 segundos',
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
    bigClaim: {
      badge: '10,000+ habitaciones amuebladas este mes',
      oldPrice: '$2,500',
      newPrice: '$19.99',
      headline: 'Mismo Impacto. 99% Menos Costo.',
      subtitle: 'Staging tradicional vs Renderly. La matem\u00e1tica es simple.',
    },
    comparison: {
      title: 'Mira la Transformaci\u00f3n',
      subtitle:
        'Arrastra el slider para comparar una habitaci\u00f3n vac\u00eda con staging virtual con IA.',
      beforeLabel: 'Antes',
      afterLabel: 'Despu\u00e9s',
    },
    pain: {
      title: 'Las Habitaciones Vac\u00edas No Venden',
      paragraphs: [
        'Ya seas agente inmobiliario, propietario vendiendo tu casa, o arrendador publicando un alquiler, ya lo sabes: los compradores no pueden imaginarse viviendo en un espacio en blanco. Recurres al staging f\u00edsico, y ah\u00ed empieza el dolor de cabeza.',
        'El staging tradicional cuesta entre $2,000 y $5,000 por propiedad. Coordinas con empresas de renta de muebles, programas mudanzas, y rezas para que nada se da\u00f1e. Todo el proceso toma semanas.',
        '\u00bfNecesitas un estilo diferente para otro perfil de comprador? Empieza de cero. Paga de nuevo. Mientras tanto, tu propiedad sigue sin venderse.',
      ],
    },
    benefits: {
      title: 'Domina Cada Detalle',
      subtitle:
        'Nuestra IA no solo coloca muebles. Entiende arquitectura, iluminaci\u00f3n y materiales para crear resultados fotorrealistas.',
      items: [
        {
          title: 'Procesamiento Rel\u00e1mpago',
          description:
            'Redes neuronales propietarias renderizan iluminaci\u00f3n y sombras complejas en menos de un minuto. 100x m\u00e1s r\u00e1pido que la edici\u00f3n manual.',
        },
        {
          title: 'Una Fracci\u00f3n del Costo',
          description:
            'Reemplaza el staging f\u00edsico costoso. Ahorra hasta $2,500 por propiedad con revisiones ilimitadas para lograr el look perfecto.',
        },
        {
          title: 'Biblioteca de Dise\u00f1o',
          description:
            'Accede a m\u00e1s de 5,000 activos 3D curados por dise\u00f1adores profesionales. Desde Mid-Century Modern hasta Contempor\u00e1neo Chic.',
        },
      ],
    },
    features: {
      badge: 'Funcionalidades',
      items: [
        {
          title: 'Virtual Staging',
          titleHighlight: 'con IA',
          description: 'Transforma habitaciones vac\u00edas en espacios bellamente amueblados con IA fotorrealista en menos de 30 segundos.',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Biblioteca de',
          titleHighlight: 'Estilos',
          description: 'Elige entre 5,000+ activos 3D curados. Moderno, escandinavo, mid-century y cada est\u00e9tica cubierta.',
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Listo para',
          titleHighlight: 'MLS',
          description: 'Im\u00e1genes de alta resoluci\u00f3n optimizadas para listados MLS, redes sociales y materiales de marketing.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Tours en',
          titleHighlight: 'Video',
          description: 'Genera recorridos cinem\u00e1ticos de propiedades desde tus fotos amuebladas. Hasta 24 segundos en calidad 4K.',
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Branding',
          titleHighlight: 'Personalizado',
          description: 'Agrega tu logo y colores de marca a cada imagen amueblada. Presentaci\u00f3n profesional para cada listado.',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop',
        },
        {
          title: 'Procesamiento',
          titleHighlight: 'por Lotes',
          description: 'Amuebla propiedades enteras de una vez. Sube m\u00faltiples habitaciones y obt\u00e9n todos los resultados en un solo lote.',
          image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80&auto=format&fit=crop',
        },
      ],
    },
    howItWorks: {
      title: 'C\u00f3mo Funciona',
      subtitle: 'Tres pasos. Eso es todo.',
      stepPrefix: 'Paso',
      steps: [
        {
          step: '01',
          title: 'Sube',
          description:
            'Toma una foto de cualquier habitaci\u00f3n vac\u00eda y s\u00fabela a Renderly.',
        },
        {
          step: '02',
          title: 'Elige',
          description:
            'Escoge entre decenas de estilos de dise\u00f1o. Moderno, tradicional, mid-century, escandinavo. T\u00fa decides.',
        },
        {
          step: '03',
          title: 'Descarga',
          description:
            'Recibe tu foto amueblada profesionalmente en minutos. Lista para MLS, redes sociales, o tu listado.',
        },
      ],
    },
    video: {
      title: 'M\u00edralo en Acci\u00f3n',
      subtitle:
        'Mira c\u00f3mo Renderly transforma una habitaci\u00f3n vac\u00eda en un espacio bellamente amueblado en segundos.',
    },
    testimonials: {
      heading: 'Confianza de 2,000+ agentes y propietarios',
      ratingLabel: '/5 Calificaci\u00f3n',
      items: [
        {
          name: 'Sarah Mitchell',
          role: 'Agente Inmobiliaria, RE/MAX',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          text: 'Renderly redujo mis costos de staging en un 90%. Sol\u00eda gastar $3,000 por listado en staging f\u00edsico. Ahora obtengo mejores fotos por $29.99. Mis propiedades se venden en la mitad del tiempo.',
          rating: 5,
        },
        {
          name: 'Marcus Chen',
          role: 'Broker, Coldwell Banker',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          text: 'La IA entiende la iluminaci\u00f3n y las sombras como nunca hab\u00eda visto. Los compradores literalmente no pueden distinguir entre nuestro staging virtual y fotos reales.',
          rating: 5,
        },
        {
          name: 'Emily Rodriguez',
          role: 'Administradora de Propiedades',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          text: 'Administrar 40+ unidades de alquiler hace que el staging sea imposible. Con Renderly, amueblo cada unidad vacante en minutos. Las tasas de vacancia bajaron un 35% desde que empezamos a usarlo.',
          rating: 5,
        },
        {
          name: 'David Park',
          role: 'Agente Inmobiliario, Keller Williams',
          avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          text: 'Los tours en video son revolucionarios. Env\u00edo videos de 8 segundos a compradores potenciales y recibo 3 veces m\u00e1s solicitudes de visita que solo con fotos est\u00e1ticas.',
          rating: 5,
        },
        {
          name: 'Jessica Thompson',
          role: 'Propietaria, Winnipeg',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
          text: 'Vendiendo sin agente y ahorrando miles con staging virtual. El estilo escandinavo que eleg\u00ed recibi\u00f3 muchos elogios durante las visitas. Se vendi\u00f3 por encima del precio pedido.',
          rating: 5,
        },
        {
          name: 'Robert Williams',
          role: 'Agente Comercial, CBRE',
          avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
          text: 'Usamos Renderly para propiedades comerciales tambi\u00e9n. Salas de conferencias, lobbies, oficinas abiertas. La IA lo maneja todo. El procesamiento por lotes nos ahorra horas cada semana.',
          rating: 5,
        },
        {
          name: 'Amanda Foster',
          role: 'Dise\u00f1adora de Interiores y Agente',
          avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
          text: 'Como dise\u00f1adora, era esc\u00e9ptica. Pero la calidad de los activos 3D y la precisi\u00f3n de la iluminaci\u00f3n me impresionaron genuinamente. Ahora lo recomiendo a todos mis clientes agentes.',
          rating: 5,
        },
        {
          name: 'Michael Torres',
          role: 'Inversionista Inmobiliario',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          text: 'Flipear casas requiere rapidez. Renderly me permite listar propiedades antes de completar las renovaciones. Amueblo la visi\u00f3n del "despu\u00e9s" y atraigo compradores antes.',
          rating: 5,
        },
      ],
    },
    earlyAccess: {
      title: '\u00danete al Early Access',
      description:
        'Renderly est\u00e1 lanzando e invitamos a un grupo selecto de agentes a probarlo primero. Solo pedimos tu feedback honesto.',
      discount: '50% de descuento en cualquier plan',
      form: {
        emailPlaceholder: 'nombre@inmobiliaria.com',
        namePlaceholder: 'Juan P\u00e9rez',
        submit: 'Obtener Early Access - 50% Desc.',
        microcopy: 'Gratis para empezar. Jam\u00e1s spam.',
        success:
          '\u00a1Ya est\u00e1s dentro! Revisa tu email para tu enlace de early access y c\u00f3digo de descuento.',
      },
    },
    faq: {
      title: 'Preguntas Frecuentes',
      badge: 'FAQ',
      subtitle: 'Todo lo que necesitas saber sobre Renderly',
      contactCta: '\u00bfTienes m\u00e1s preguntas? Cont\u00e1ctanos',
      tabs: [
        { id: 'general', label: 'General' },
        { id: 'pricing', label: 'Precios' },
        { id: 'technical', label: 'T\u00e9cnico' },
      ],
      items: [
        {
          question: '\u00bfQu\u00e9 es el virtual staging?',
          answer:
            'El virtual staging es el proceso de agregar digitalmente muebles, decoraci\u00f3n y acabados a fotos de habitaciones vac\u00edas usando IA. Produce im\u00e1genes fotorrealistas que ayudan a los compradores a visualizar un espacio, costando t\u00edpicamente 95% menos que el staging f\u00edsico y entregando resultados en minutos.',
        },
        {
          question: '\u00bfCu\u00e1nto cuesta el virtual staging?',
          answer:
            'Renderly ofrece virtual staging desde $0 (plan gratuito con 1 imagen) hasta $29.99 por propiedad en el plan Profesional con 9 im\u00e1genes. El plan Enterprise a $75/mes cubre propiedades ilimitadas. La mayor\u00eda de planes son pagos \u00fanicos, sin suscripci\u00f3n.',
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
          question: 'Virtual staging vs staging tradicional: \u00bfcu\u00e1l es mejor?',
          answer:
            'El staging f\u00edsico tradicional cuesta $2,000-$5,000 por propiedad y toma semanas coordinar. El virtual staging comienza en $19.99 por propiedad y entrega resultados en minutos. Ambos ayudan a vender m\u00e1s r\u00e1pido, pero el virtual staging es 95% m\u00e1s econ\u00f3mico e infinitamente m\u00e1s r\u00e1pido.',
        },
        {
          question: '\u00bfEl virtual staging ayuda a vender una casa m\u00e1s r\u00e1pido?',
          answer:
            'S\u00ed. Estudios muestran que las propiedades con staging se venden 73% m\u00e1s r\u00e1pido y por 5-10% m\u00e1s que las propiedades sin staging. El virtual staging ofrece los mismos beneficios de engagement con compradores a una fracci\u00f3n del costo.',
        },
        {
          question: '\u00bfNecesito habilidades de dise\u00f1o para usar Renderly?',
          answer:
            'No. Renderly est\u00e1 hecho para agentes inmobiliarios, propietarios y arrendadores. Sube una foto, elige un estilo, y la IA se encarga de todo. Sin software de dise\u00f1o, sin curva de aprendizaje.',
        },
      ],
    },
    pricing: {
      badge: 'Precios Simples',
      title: 'Elige Tu Plan',
      subtitle:
        'Transforma propiedades vac\u00edas en espacios impresionantes. Sin suscripciones para la mayor\u00eda de planes. Paga una vez, \u00fasalo siempre.',
      popularBadge: 'M\u00e1s Popular',
      featuresIncluded: 'Funcionalidades incluidas',
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
      title: '\u00bfListo para Cerrar M\u00e1s Ventas?',
      subtitle:
        'Las propiedades con staging virtual se venden 30% m\u00e1s r\u00e1pido y por 5-10% m\u00e1s. Empieza a transformar tus propiedades hoy.',
      cta: 'Prueba Gratis',
      secondaryCta: 'Ver Demo',
      trustItems: [
        'Sin tarjeta de cr\u00e9dito',
        'Resultados en 30 segundos',
        'Im\u00e1genes listas para sitios m\u00e1s populares',
      ],
      videoLabel: 'Mira Renderly en acci\u00f3n',
    },
    footer: {
      tagline:
        'Virtual staging con IA para agentes inmobiliarios, propietarios y arrendadores.',
      copyright: '\u00a9 2026 Renderly. Todos los derechos reservados.',
      productLabel: 'Producto',
      companyLabel: 'Empresa',
      links: {
        features: 'Funcionalidades',
        pricing: 'Precios',
        faq: 'FAQ',
        about: 'Nosotros',
        contact: 'Contacto',
        login: 'Iniciar Sesi\u00f3n',
      },
      privacyLink: 'Pol\u00edtica de Privacidad',
      termsLink: 'T\u00e9rminos de Servicio',
    },
  },
}
