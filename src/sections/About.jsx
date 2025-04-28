const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:flex items-center gap-8 text-white">
      <img src="../src/assets/arglogonamedown.png" alt="About" className="w-full md:max-w-md rounded-xl mb-6 md:mb-0 object-cover" />
      <div className="rounded-lg shadow-md p-6 hover:scale-105 transition">
        <h3 className="text-2xl font-bold mb-4">Quiénes Somos</h3>
        <p className="text-base leading-relaxed">Astro Rift Games es una empresa de desarrolladores de videojuegos independientes que crean experiencias únicas a partir de la pasión y la creatividad. Nuestro objetivo es construir mundos memorables y jugar con la imaginación.</p>
      </div>
    </section>
    );
  }
  
export default About