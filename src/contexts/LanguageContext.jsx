import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de LanguageProvider');
  }
  return context;
};

// Traducciones completas
const translations = {
  es: {
    nav: {
      games: "Juegos",
      studio: "Estudio",
      services: "Servicios",
      contact: "Contacto",
      playSlash: "Jugar Slash 'em Out",
      followUs: "Síguenos en:",
      primaryLabel: "Navegación principal",
      sectionLabel: "Secciones",
      homeLabel: "Ir al inicio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
    },
    hero: {
      headlineLine1: "Juegos originales.",
      headlineLine2: "Experiencias interactivas.",
      supportingText: "Creamos juegos para jugadores y experiencias a medida para marcas, estudios y equipos.",
      viewGames: "Ver juegos",
      viewServices: "Ver servicios",
      latestReleaseLabel: "Último lanzamiento:",
      latestReleaseTitle: "Slash 'em Out"
    },
    about: {
      eyebrow: "Sobre nosotros",
      title: "Juegos indie y soporte de desarrollo",
      description1: "Astro Rift Games es un estudio independiente que crea juegos originales con foco en gameplay, atmósfera y mecánicas memorables.",
      description2: "Además de nuestros propios proyectos, ofrecemos soporte de outsourcing para estudios y equipos, desde sistemas de gameplay y prototipos hasta desarrollo en Unity y C# listo para producción.",
      capabilities: {
        originalGames: {
          title: "Juegos originales",
          text: "Diseñamos y desarrollamos juegos originales con foco en diversión, atmósfera y mecánicas memorables."
        },
        unity: {
          title: "Unity & C#",
          text: "Experiencia en Unity y C# para construir sistemas de juego robustos, escalables y optimizados."
        },
        outsourcing: {
          title: "Soporte de outsourcing",
          text: "Soporte de desarrollo flexible adaptado a tus necesidades, desde prototipos hasta producción completa."
        }
      },
      ctaServices: "Ver servicios",
      ctaContact: "Contactanos"
    },
    services: {
      eyebrow: "Servicios",
      title: "Juegos a medida y experiencias interactivas",
      subtitle: "Para marcas, estudios y equipos.",
      items: {
        advergames: {
          title: "Advergames y experiencias de marca",
          description: "Creamos juegos promocionales y experiencias interactivas que conectan marcas con audiencias de forma memorable."
        },
        custom: {
          title: "Desarrollo de juegos a medida",
          description: "Diseñamos y desarrollamos juegos desde cero, adaptados a objetivos creativos, técnicos y comerciales específicos."
        },
        production: {
          title: "Unity y soporte de producción",
          description: "Brindamos soporte de desarrollo para estudios y equipos, desde sistemas en Unity y C# hasta features listas para producción."
        }
      },
      closingText: "Construyamos algo juntos.",
      cta: "Contactanos"
    },
    projects: {
      featured: "Destacado",
      latestRelease: "Último lanzamiento",
      availablePlay: "Disponible ahora en Google Play",
      otherProjects: "Otros proyectos",
      facts: {
        status: "Estado",
        statusVal: "Lanzado",
        platform: "Plataforma",
        platformVal: "Android",
        store: "Tienda",
        storeVal: "Google Play"
      },
      eyebrow: "Juegos",
      title: "Juegos originales de Astro Rift",
      subtitle: "Descubrí nuestro último lanzamiento y los mundos que estamos creando.",
      games: {
        corvus: {
          title: "Project C.O.R.V.U.S.",
          description: "Un thriller de supervivencia en 2D que te mantendrá al borde del asiento con su atmósfera tensa y mecánicas innovadoras.",
          genre: "Terror de Supervivencia - 2D",
          features: ["Atmósfera única", "Supervivencia", "Historia inmersiva"],
          status: "Disponible",
        },
        muecas: {
          title: "Müecas Game", 
          description: "Un juego de supervivencia endless runner en 2D con mecánicas adictivas y desafíos constantes.",
          genre: "Supervivencia - 2D - Corredor Infinito",
          features: ["Corredor Infinito", "Supervivencia", "Alta rejugabilidad"],
        status: "Disponible",
        },
        slash: {
          title: "Slash 'em Out!", 
          description: "Juego de acción casual en 2D donde moverse es atacar. Cada salto elimina enemigos y exige precisión, mezclando reflejos, estrategia y ritmo frenético.",
          genre: "Acción - 2D - Mobile",
          hook: "Moverse es atacar.",
          features: ["Plataformas", "Estrategia", "Android"],
          status: "Disponible",
          cta: "Descargalo ahora",
          storeLabel: "Disponible en Google Play",
          storeUrl: "https://play.google.com/store/apps/details?id=com.astroriftgames.slashemout",
          storeBadge: "/images/google-play-badge.svg",
          watchTrailerOnYoutube: "Ver trailer de Slash 'em Out en YouTube"
        }
      },
      playNow: "Jugar Ahora",
      viewProject: "Ver Proyecto",
      watchTrailer: "Ver Trailer",
      comingSoon: "Próximamente",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo juntos",
      subtitle: "Consultas, propuestas, outsourcing o ideas de juego — escribinos.",
      supportLine: "Contanos qué necesitás y te responderemos.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        attachments: "📎 Archivos Adjuntos (Opcional)",
        dragDrop: "Arrastrá tus archivos aquí o",
        clickSelect: "hacé clic para seleccionar",
        fileInfo: "PDFs, documentos, imágenes, referencias • Máximo 5 archivos • 10MB cada uno",
        selectedFiles: "Archivos seleccionados",
        removeFile: "Remover archivo",
        sendMessage: "Enviar Mensaje",
        sending: "Enviando mensaje...",
        namePlaceholder: "Tu nombre completo",
        emailPlaceholder: "tu@email.com",
        messagePlaceholder: "Contanos tu consulta, propuesta, proyecto o cualquier cosa que quieras comentarnos...",
        required: "*"
      },
      success: {
        title: "¡Mensaje Enviado! 🚀",
        description: "Te responderemos pronto a tu casilla de email.",
        confirmation: "También enviamos una confirmación a tu email con los detalles."
      }
    },
    footer: {
      backToTop: "Volver arriba",
      copyright: "Todos los derechos reservados."
    },
    common: {
      astroRiftGames: "Somos Astro Rift Games"
    }
  },
  
  en: {
    nav: {
      games: "Games",
      studio: "Studio",
      services: "Services",
      contact: "Contact",
      playSlash: "Play Slash 'em Out",
      followUs: "Follow us:",
      primaryLabel: "Primary navigation",
      sectionLabel: "Sections",
      homeLabel: "Go to home",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      headlineLine1: "Original games.",
      headlineLine2: "Custom interactive experiences.",
      supportingText: "We create games for players and interactive projects for brands, studios and teams.",
      viewGames: "View Games",
      viewServices: "View Services",
      latestReleaseLabel: "Latest release:",
      latestReleaseTitle: "Slash 'em Out"
    },
    about: {
      eyebrow: "About Us",
      title: "Indie games & development support",
      description1: "Astro Rift Games is an independent studio creating original games with a focus on gameplay, atmosphere and memorable mechanics.",
      description2: "Alongside our own projects, we provide outsourcing support for studios and teams, from gameplay systems and prototypes to production-ready Unity and C# development.",
      capabilities: {
        originalGames: {
          title: "Original Games",
          text: "We design and build original games with a focus on fun, atmosphere and memorable mechanics."
        },
        unity: {
          title: "Unity & C#",
          text: "Deep expertise in Unity and C# to build robust, scalable and performance-ready game systems."
        },
        outsourcing: {
          title: "Outsourcing Support",
          text: "Flexible development support tailored to your needs — from prototypes to full production."
        }
      },
      ctaServices: "View Services",
      ctaContact: "Contact Us"
    },
    services: {
      eyebrow: "Services",
      title: "Custom games and interactive experiences",
      subtitle: "For brands, studios and teams.",
      items: {
        advergames: {
          title: "Advergames & Branded Experiences",
          description: "We create promotional games and interactive experiences that help brands connect with audiences in memorable ways."
        },
        custom: {
          title: "Custom Game Development",
          description: "We design and build games from scratch, tailored to specific creative, technical and business goals."
        },
        production: {
          title: "Unity & Production Support",
          description: "We support studios and teams with development work, from Unity and C# systems to production-ready features."
        }
      },
      closingText: "Let’s build something together.",
      cta: "Contact Us"
    },
    projects: {
      featured: "Featured",
      latestRelease: "Latest Release",
      availablePlay: "Available now on Google Play",
      otherProjects: "Other Projects",
      facts: {
        status: "Status",
        statusVal: "Released",
        platform: "Platform",
        platformVal: "Android",
        store: "Store",
        storeVal: "Google Play"
      },
      eyebrow: "Games",
      title: "Original games from Astro Rift",
      subtitle: "Discover our latest release and the worlds we are building.",
      games: {
        corvus: {
          title: "Project C.O.R.V.U.S.",
          description: "A 2D survival thriller that will keep you on the edge of your seat with its tense atmosphere and innovative mechanics.",
          genre: "Survival Horror - 2D",
          features: ["Unique Atmosphere", "Survival", "Immersive Story"],
          status: "Available",
        },
        muecas: {
          title: "Müecas Game",
          description: "A 2D endless runner survival game with addictive mechanics and constant challenges.",
          genre: "Survival - 2D - Endless Runner",
          features: ["Endless Runner", "Survival", "High Replayability"],
          status: "Available",
        },
        slash: {
          title: "Slash 'em Out!",
          description: "A 2D casual action game where moving is attacking. Every jump eliminates enemies and demands precision, combining reflexes, strategy, and frenetic pace.",
          genre: "Action - 2D - Mobile",
          hook: "Moving is attacking.",
          features: ["Platformer", "Strategy", "Android"],
          status: "Available",
          cta: "Download now",
          storeLabel: "Available on Google Play",
          storeUrl: "https://play.google.com/store/apps/details?id=com.astroriftgames.slashemout",
          storeBadge: "/images/google-play-badge.svg",
          watchTrailerOnYoutube: "Watch Slash 'em Out trailer on YouTube"
        }
      },
      playNow: "Play Now",
      viewProject: "View Project",
      watchTrailer: "Watch Trailer",
      comingSoon: "Coming Soon",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something together",
      subtitle: "Questions, proposals, outsourcing or game ideas — write to us.",
      supportLine: "Tell us what you need and we’ll get back to you.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        attachments: "📎 File Attachments (Optional)",
        dragDrop: "Drag your files here or",
        clickSelect: "click to select",
        fileInfo: "PDFs, documents, images, references • Maximum 5 files • 10MB each",
        selectedFiles: "Selected files",
        removeFile: "Remove file",
        sendMessage: "Send Message",
        sending: "Sending message...",
        namePlaceholder: "Your full name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell us your query, proposal, project or anything you want to share with us...",
        required: "*"
      },
      success: {
        title: "Message Sent! 🚀",
        description: "We will respond soon to your email.",
        confirmation: "We also sent a confirmation to your email with the details."
      }
    },
    footer: {
      backToTop: "Back to top",
      copyright: "All rights reserved."
    },
    common: {
      astroRiftGames: "We are Astro Rift Games"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  // Detectar idioma inicial
  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'es';
  };

  const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('preferred-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const value = {
    currentLanguage,
    toggleLanguage,
    t,
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
