const Services = () => {
    return (
      <section id="services" className="py-20 px-4 items-center gap=8 text-center">
        <h2 className="text-5xl font-semibold mb-8">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Desarrollo a medida</h3>
            <p className="text-gray-300 leading-relaxed">Creamos videojuegos desde cero, adaptados a tus ideas.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Arte y animación</h3>
            <p className="text-gray-300 leading-relaxed">Diseño visual único para cada proyecto.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Diseño de sonido</h3>
            <p className="text-gray-300 leading-relaxed">Ambientes inmersivos y banda sonora original.</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services