import './App.css'
import { Nav, Footer } from '/src/components/';
import { Hero, About, Services, Projects, Contact } from './sections/'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
