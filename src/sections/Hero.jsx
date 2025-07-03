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
      
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="stars absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{top: '20%', left: '10%'}}></div>
        <div className="stars absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{top: '40%', left: '80%', animationDelay: '1s'}}></div>
        <div className="stars absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{top: '60%', left: '20%', animationDelay: '2s'}}></div>
        <div className="stars absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{top: '80%', left: '70%', animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-md bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Astro Rift Games
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl opacity-90 leading-relaxed">
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