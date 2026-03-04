import { type Lang } from './copy'

interface FeatureItem {
  title: string
  titleHighlight: string
  description: string
}

interface TestimonialItem {
  quote: string
  name: string
  role: string
}

interface ExtraCopy {
  hero: {
    trustBadge: string
  }
  features: {
    title: string
    subtitle: string
    items: FeatureItem[]
  }
  testimonials: {
    badge: string
    title: string
    rating: string
    ratingLabel: string
    items: TestimonialItem[]
  }
  bigClaim: {
    badge: string
    title: string
    titleHighlight: string
  }
}

export const extraCopy: Record<Lang, ExtraCopy> = {
  en: {
    hero: {
      trustBadge: 'Trusted by 2,000+ agents & homeowners',
    },
    features: {
      title: 'Everything You Need to Stage Smarter',
      subtitle: 'Powerful AI tools that make virtual staging effortless',
      items: [
        {
          title: 'AI Staging',
          titleHighlight: 'AI',
          description:
            'Transform empty rooms into furnished spaces using neural networks that understand architecture and lighting.',
        },
        {
          title: 'Style Library',
          titleHighlight: 'Style',
          description:
            'Access 5,000+ curated designs from professional interior designers. Modern, Mid-Century, Scandinavian, and more.',
        },
        {
          title: 'MLS-Ready Photos',
          titleHighlight: 'MLS-Ready',
          description:
            'Export high-resolution images that comply with MLS standards. Professional results ready for your listings.',
        },
        {
          title: 'Video Tours',
          titleHighlight: 'Video',
          description:
            'Generate walkthrough video tours of staged spaces. Perfect for social media and virtual open houses.',
        },
        {
          title: 'Custom Branding',
          titleHighlight: 'Branding',
          description:
            'Add your logo and brand colors to every staged photo. Build recognition with every listing you share.',
        },
        {
          title: 'Batch Processing',
          titleHighlight: 'Batch',
          description:
            'Stage multiple rooms in one go. Upload an entire property and get all rooms styled in minutes.',
        },
      ],
    },
    testimonials: {
      badge: '4.9/5 Rating',
      title: 'Trusted by 2,000+ Agents & Homeowners',
      rating: '4.9',
      ratingLabel: 'from 2,000+ reviews',
      items: [
        {
          quote:
            'Renderly has completely transformed how I present listings. My clients love seeing their empty properties come to life within minutes.',
          name: 'Sarah Mitchell',
          role: 'RE/MAX Agent, Toronto',
        },
        {
          quote:
            'I used to spend $3,000 per property on physical staging. Now I get better results for under $30. The ROI is incredible.',
          name: 'David Chen',
          role: 'Century 21 Realtor, Vancouver',
        },
        {
          quote:
            'The turnaround time is insane. I uploaded photos at lunch and had staged images ready by the time I got back to the office.',
          name: 'Jessica Torres',
          role: 'Keller Williams, Calgary',
        },
        {
          quote:
            'My listings with Renderly staging sell 40% faster than unstaged ones. The investment pays for itself on the first property.',
          name: 'Michael Park',
          role: 'Coldwell Banker Agent, Ottawa',
        },
        {
          quote:
            'As a property manager, I stage dozens of units monthly. The batch processing feature saves me hours every single week.',
          name: 'Amanda Foster',
          role: 'Property Manager, Winnipeg',
        },
        {
          quote:
            "The AI understands room dimensions perfectly. Every piece of furniture looks like it actually belongs in the space. Buyers can't tell the difference.",
          name: 'Robert Kim',
          role: 'Independent Broker, Montreal',
        },
      ],
    },
    bigClaim: {
      badge: '10,000+ rooms staged',
      title: 'Save 95% vs Traditional Staging',
      titleHighlight: '95%',
    },
  },
  es: {
    hero: {
      trustBadge: 'La confianza de 2,000+ agentes y propietarios',
    },
    features: {
      title: 'Todo lo que Necesitas para un Staging Inteligente',
      subtitle:
        'Herramientas de IA potentes que hacen el virtual staging sin esfuerzo',
      items: [
        {
          title: 'Staging con IA',
          titleHighlight: 'IA',
          description:
            'Transforma habitaciones vacías en espacios amueblados usando redes neuronales que entienden arquitectura e iluminación.',
        },
        {
          title: 'Biblioteca de Estilos',
          titleHighlight: 'Estilos',
          description:
            'Accede a 5,000+ diseños curados por diseñadores profesionales. Moderno, Mid-Century, Escandinavo y más.',
        },
        {
          title: 'Fotos Listas para MLS',
          titleHighlight: 'MLS',
          description:
            'Exporta imágenes en alta resolución que cumplen con los estándares MLS. Resultados profesionales listos para tus listados.',
        },
        {
          title: 'Tours en Video',
          titleHighlight: 'Video',
          description:
            'Genera tours en video de espacios amueblados. Perfectos para redes sociales y open houses virtuales.',
        },
        {
          title: 'Branding Personalizado',
          titleHighlight: 'Branding',
          description:
            'Agrega tu logo y colores de marca a cada foto. Construye reconocimiento con cada listado que compartas.',
        },
        {
          title: 'Procesamiento por Lotes',
          titleHighlight: 'Lotes',
          description:
            'Amuebla múltiples habitaciones a la vez. Sube una propiedad completa y obtén todas las habitaciones estilizadas en minutos.',
        },
      ],
    },
    testimonials: {
      badge: '4.9/5 Calificación',
      title: 'La confianza de 2,000+ Agentes y Propietarios',
      rating: '4.9',
      ratingLabel: 'de 2,000+ reseñas',
      items: [
        {
          quote:
            'Renderly ha transformado completamente cómo presento mis listados. A mis clientes les encanta ver sus propiedades vacías cobrar vida en minutos.',
          name: 'Sarah Mitchell',
          role: 'Agente RE/MAX, Toronto',
        },
        {
          quote:
            'Antes gastaba $3,000 por propiedad en staging físico. Ahora obtengo mejores resultados por menos de $30. El retorno es increíble.',
          name: 'David Chen',
          role: 'Realtor Century 21, Vancouver',
        },
        {
          quote:
            'La rapidez es impresionante. Subí las fotos a la hora del almuerzo y tenía las imágenes amuebladas listas cuando regresé a la oficina.',
          name: 'Jessica Torres',
          role: 'Keller Williams, Calgary',
        },
        {
          quote:
            'Mis listados con staging de Renderly se venden 40% más rápido. La inversión se paga sola con la primera propiedad.',
          name: 'Michael Park',
          role: 'Agente Coldwell Banker, Ottawa',
        },
        {
          quote:
            'Como property manager, amueblo docenas de unidades al mes. El procesamiento por lotes me ahorra horas cada semana.',
          name: 'Amanda Foster',
          role: 'Property Manager, Winnipeg',
        },
        {
          quote:
            'La IA entiende las dimensiones perfectamente. Cada mueble se ve como si realmente perteneciera al espacio. Los compradores no notan la diferencia.',
          name: 'Robert Kim',
          role: 'Broker Independiente, Montreal',
        },
      ],
    },
    bigClaim: {
      badge: '10,000+ habitaciones amuebladas',
      title: 'Ahorra 95% vs Staging Tradicional',
      titleHighlight: '95%',
    },
  },
}
