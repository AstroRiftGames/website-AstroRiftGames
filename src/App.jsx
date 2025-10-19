import './App.css'
import { LanguageProvider } from './contexts/LanguageContext';
import { Nav, Footer } from './components/Index';
import { Hero, About, Services, Projects, Contact } from './sections/'
import { FloatingParticles } from './components/Index';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen relative">
        <FloatingParticles 
          particleCount={40}
          colors={['#f97316', '#ea580c', '#fb923c', '#fdba74']}
          enableGlow={true}
          speed="slow"
          className="global-particles"
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