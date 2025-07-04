import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const games = [
    {
      id: 1,
      title: t('corvusTitle'),
      description: t('corvusDesc'),
      image: "/images/corvus_logo_SinNombre.png",
      link: "https://astroriftgames.itch.io/project-corvus",
      genre: t('corvusGenre'),
      status: t('disponible'),
      features: [t('atmosferaUnica'), t('supervivencia'), t('historiaInmersiva')]
    },
    {
      id: 2,
      title: t('muecasTitle'),
      description: t('muecasDesc'),
      image: "/images/MuecasGameLogo.jpg",
      link: "https://astroriftgames.itch.io/muecas",
      genre: t('muecasGenre'),
      status: t('disponible'),
      features: [t('corredorInfinito'), t('supervivencia'), t('altaRejugabilidad')]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {t('proyectosTitle')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('proyectosSubtitle')}
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
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
                  >
                    {t('jugarAhora')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">{t('tieneIdea')}</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('trabajemosJuntos')}
          </button>
        </div>
      </div>
    </section>
  )
}
  
export default Projects