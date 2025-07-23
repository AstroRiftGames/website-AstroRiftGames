import './App.css'
import { Nav, Footer } from './components/Index';
import { Hero, About, Services, Projects, Contact } from './sections/'
import { FloatingParticles } from './components/Index';

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* PARTÍCULAS GLOBALES - Cubren todo el sitio */}
      <FloatingParticles 
        particleCount={40}
        colors={['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4']}
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
  )
}

export default App