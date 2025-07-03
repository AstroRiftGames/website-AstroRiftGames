import './App.css'
import { Nav, Footer } from './components/Index';
import { Hero, About, Services, Projects, Contact } from './sections/'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <main>
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