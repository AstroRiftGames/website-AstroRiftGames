const Projects = () => {
  const games = [
    {
      id: 1,
      title: "Project C.O.R.V.U.S.",
      description: "Un thriller de supervivencia en 2D que te mantendrá al borde del asiento con su atmósfera tensa y mecánicas innovadoras.",
      image: "/images/corvus_logo_SinNombre.png",
      link: "https://astroriftgames.itch.io/project-corvus",
      genre: "Terror de Supervivencia - 2D",
      status: "Disponible",
      features: ["Atmósfera única", "Supervivencia", "Historia inmersiva"]
    },
    {
      id: 2,
      title: "Müecas Game",
      description: "Un juego de supervivencia endless runner en 2D con mecánicas adictivas y desafíos constantes.",
      image: "/images/MuecasGameLogo.jpg",
      link: "https://astroriftgames.itch.io/muecas",
      genre: "Supervivencia - 2D - Corredor Infinito",
      status: "Disponible",
      features: ["Corredor Infinito", "Supervivencia", "Alta rejugabilidad"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Nuestros Juegos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explorá los mundos que hemos creado con pasión y dedicación
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <div 
              key={game.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {game.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {game.title}
                </h3>
                
                <p className="text-indigo-400 font-semibold mb-4">
                  {game.genre}
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                  {game.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm border border-indigo-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 !text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Jugar Ahora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  
export default Projects