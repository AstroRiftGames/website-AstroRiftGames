// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' por defecto

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      // Navegación
      inicio: 'Inicio',
      quienesSomos: 'Quiénes Somos',
      servicios: 'Servicios',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      
      // Hero
      heroTitle: 'Astro Rift Games',
      heroSubtitle: 'Creamos experiencias interactivas, memorables y únicas para jugadores de todo el mundo.',
      conoceMas: 'Conocé más',
      verJuegos: 'Ver Juegos',
      
      // About
      aboutTitle: 'Quiénes Somos',
      aboutText1: 'es una empresa de desarrolladores de videojuegos independientes que crean experiencias únicas a partir de la pasión y la creatividad.',
      aboutText2: 'Nuestro objetivo es construir mundos memorables y jugar con la imaginación, llevando a los jugadores a través de aventuras que permanecerán en sus corazones para siempre.',
      juegsPublicados: 'Juegos Publicados',
      pasion: 'Pasión',
      
      // Services
      serviciosTitle: 'Servicios',
      serviciosSubtitle: 'Ofrecemos soluciones completas para dar vida a tus ideas de videojuegos',
      desarrolloTitle: 'Desarrollo a medida',
      desarrolloText: 'Creamos videojuegos desde cero, adaptados completamente a tus ideas y visión única.',
      arteTitle: 'Arte y animación',
      arteText: 'Diseño visual único y animaciones fluidas que dan vida a cada proyecto.',
      sonidoTitle: 'Diseño de sonido',
      sonidoText: 'Ambientes inmersivos y banda sonora original que complementan la experiencia.',
      solicitarCotizacion: 'Solicitar Cotización',
      
      // Projects
      proyectosTitle: 'Nuestros Juegos',
      proyectosSubtitle: 'Explorá los mundos que hemos creado con pasión y dedicación',
      corvusTitle: 'Project C.O.R.V.U.S.',
      corvusDesc: 'Un thriller de supervivencia en 2D que te mantendrá al borde del asiento con su atmósfera tensa y mecánicas innovadoras.',
      corvusGenre: 'Terror de Supervivencia - 2D',
      muecasTitle: 'Müecas Game',
      muecasDesc: 'Un juego de supervivencia endless runner en 2D con mecánicas adictivas y desafíos constantes.',
      muecasGenre: 'Supervivencia - 2D - Corredor Infinito',
      disponible: 'Disponible',
      jugarAhora: 'Jugar Ahora',
      tieneIdea: '¿Tenés una idea para un juego?',
      trabajemosJuntos: 'Trabajemos Juntos',
      
      // Features
      atmosferaUnica: 'Atmósfera única',
      supervivencia: 'Supervivencia',
      historiaInmersiva: 'Historia inmersiva',
      corredorInfinito: 'Corredor Infinito',
      altaRejugabilidad: 'Alta rejugabilidad',
      motorUnity: 'Motor Unity',
      programacionCS: 'Programación C#',
      multiplataforma: 'Multiplataforma',
      arte2D: 'Arte 2D',
      disenoPersonajes: 'Diseño de Personajes',
      disenoUI: 'Diseño UI/UX',
      efectosSonido: 'Efectos de Sonido',
      composicionMusical: 'Composición Musical',
      implementacionAudio: 'Implementación de Audio',
      
      // Contact
      contactoTitle: 'Contacto',
      envianosMsg: 'Envianos un Mensaje',
      nombre: 'Nombre',
      tuNombre: 'Tu nombre completo',
      email: 'Email',
      mensaje: 'Mensaje',
      mensajePlaceholder: 'Cuéntanos sobre tu proyecto, idea de juego o cómo podemos ayudarte...',
      enviarMensaje: 'Enviar Mensaje',
      enviando: 'Enviando...',
      mensajeEnviado: '¡Mensaje Enviado!',
      responderemosProto: 'Te responderemos pronto.',
      
      // Footer
      derechos: 'Astro Rift Games'
    },
    en: {
      // Navigation
      inicio: 'Home',
      quienesSomos: 'About Us',
      servicios: 'Services',
      proyectos: 'Projects',
      contacto: 'Contact',
      
      // Hero
      heroTitle: 'Astro Rift Games',
      heroSubtitle: 'We create interactive, memorable and unique experiences for players around the world.',
      conoceMas: 'Learn More',
      verJuegos: 'View Games',
      
      // About
      aboutTitle: 'About Us',
      aboutText1: 'is an independent video game development company that creates unique experiences from passion and creativity.',
      aboutText2: 'Our goal is to build memorable worlds and play with imagination, taking players through adventures that will remain in their hearts forever.',
      juegsPublicados: 'Games Published',
      pasion: 'Passion',
      
      // Services
      serviciosTitle: 'Services',
      serviciosSubtitle: 'We offer complete solutions to bring your video game ideas to life',
      desarrolloTitle: 'Custom Development',
      desarrolloText: 'We create video games from scratch, completely adapted to your ideas and unique vision.',
      arteTitle: 'Art and Animation',
      arteText: 'Unique visual design and fluid animations that bring each project to life.',
      sonidoTitle: 'Sound Design',
      sonidoText: 'Immersive environments and original soundtrack that complement the experience.',
      solicitarCotizacion: 'Request Quote',
      
      // Projects
      proyectosTitle: 'Our Games',
      proyectosSubtitle: 'Explore the worlds we have created with passion and dedication',
      corvusTitle: 'Project C.O.R.V.U.S.',
      corvusDesc: 'A 2D survival thriller that will keep you on the edge of your seat with its tense atmosphere and innovative mechanics.',
      corvusGenre: 'Survival Horror - 2D',
      muecasTitle: 'Müecas Game',
      muecasDesc: 'A 2D survival endless runner game with addictive mechanics and constant challenges.',
      muecasGenre: 'Survival - 2D - Endless Runner',
      disponible: 'Available',
      jugarAhora: 'Play Now',
      tieneIdea: 'Do you have an idea for a game?',
      trabajemosJuntos: 'Let\'s Work Together',
      
      // Features
      atmosferaUnica: 'Unique Atmosphere',
      supervivencia: 'Survival',
      historiaInmersiva: 'Immersive Story',
      corredorInfinito: 'Endless Runner',
      altaRejugabilidad: 'High Replayability',
      motorUnity: 'Unity Engine',
      programacionCS: 'C# Programming',
      multiplataforma: 'Multiplatform',
      arte2D: '2D Art',
      disenoPersonajes: 'Character Design',
      disenoUI: 'UI/UX Design',
      efectosSonido: 'Sound Effects',
      composicionMusical: 'Musical Composition',
      implementacionAudio: 'Audio Implementation',
      
      // Contact
      contactoTitle: 'Contact',
      envianosMsg: 'Send Us a Message',
      nombre: 'Name',
      tuNombre: 'Your full name',
      email: 'Email',
      mensaje: 'Message',
      mensajePlaceholder: 'Tell us about your project, game idea or how we can help you...',
      enviarMensaje: 'Send Message',
      enviando: 'Sending...',
      mensajeEnviado: 'Message Sent!',
      responderemosProto: 'We will respond soon.',
      
      // Footer
      derechos: 'Astro Rift Games'
    }
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};