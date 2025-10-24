import './App.css'
import { LanguageProvider } from './contexts/LanguageContext';
import { Nav, Footer } from './components/Index';
import { Hero, About, Services, Projects, Contact } from './sections/'
import { FloatingParticles } from './components/Index';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen relative">
        {/* FANTASMAS FLOTANTES DE HALLOWEEN */}
        <FloatingParticles 
          particleCount={25}
          colors={['#ff6b35', '#f7931e', '#9d4edd', '#c77dff']} // Colores Halloween
          enableGlow={true}
          speed="slow"
          className="global-particles"
          halloweenMode={true} // ⭐ ACTIVAR MODO HALLOWEEN
        />
        
        <Nav />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App