// src/sections/Projects.jsx
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const games = [
    {
      id: 1,
      title: t('projects.games.corvus.title'),
      description: t('projects.games.corvus.description'),
      image: "/images/corvus_logo_SinNombre.png",
      link: "https://astroriftgames.itch.io/project-corvus",
      genre: t('projects.games.corvus.genre'),
      status: t('projects.status'),
      features: t('projects.games.corvus.features')
    },
    {
      id: 2,
      title: t('projects.games.muecas.title'),
      description: t('projects.games.muecas.description'),
      image: "/images/MuecasGameLogo.jpg",
      link: "https://astroriftgames.itch.io/muecas",
      genre: t('projects.games.muecas.genre'),
      status: t('projects.status'),
      features: t('projects.games.muecas.features')
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
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
                    {t('projects.playNow')}
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