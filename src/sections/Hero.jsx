const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen 
    bg-hero-pattern 
    bg-cover 
    bg-center 
    flex 
    flex-col 
    items-center 
    justify-center 
    text-center 
    text-white 
    px-4
    relative
    overflow-hidden">
      
      {/* YA NO NECESITAMOS PARTÍCULAS AQUÍ - Las globales se encargan */}
      
      <div className="relative z-10">
        {/* Imagen reemplazando el h1 - RUTA CORREGIDA */}
        <div className="mb-6">
          <img 
            src="/images/NOMBRE-ARG.png" 
            alt="Astro Rift Games"
            className="w-full max-w-4xl mx-auto h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed text-center">
          Creamos experiencias interactivas, memorables y únicas para jugadores de todo el mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Conocé más
          </button>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Juegos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero