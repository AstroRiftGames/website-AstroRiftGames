import './App.css'
import { Nav, Footer } from './components';
import { Hero, About, Services, Projects, Contact } from './sections/'
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App