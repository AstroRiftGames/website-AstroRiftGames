// src/sections/Hero.jsx
const Hero = () => {
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
      px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-md">Astro Rift Games</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">Creamos experiencias interactivas, memorables y únicas para jugadores de todo el mundo.</p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
          Conocé más
        </button>
      </section>
    )
  }

  export default Hero