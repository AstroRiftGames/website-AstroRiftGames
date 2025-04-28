const Projects = () => {
    return (
      <section id="projects" className="py-20 px-4">
        <h2 className="text-5xl font-semibold text-center mb-8">Nuestros Juegos</h2>
        <div className="grid md:grid-cols-3 gap-8 bg-gray-800 py-8 px-4">
          {/* Aquí puedes mapear tus juegos */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <a href="https://astroriftgames.itch.io/project-corvus">
              <img src="../src/assets/corvus_logo_SinNombre.png" alt="Juego 1" className="rounded mb-3" />
            </a>
            <h3 className="text-2xl font-bold mb-4">Project C.O.R.V.U.S.</h3>
            <p className="text-sm text-gray-300">Survival horror - 2D</p>
          </div>
          {/* Más juegos */}
          <div className="bg-gray-700 rounded-lg shadow-md p-6 hover:scale-105 transition">
            <a href="https://astroriftgames.itch.io/muecas">
              <img src="../src/assets/MuecasGameLogo.jpg" alt="Juego 2" className="rounded mb-3" />
            </a>
            <h3 className="text-2xl font-bold mb-4">Müecas Game</h3>
            <p className="text-sm text-gray-300">Survival - 2D - Endless Runner</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects