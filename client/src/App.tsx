import Hero from './components/Hero.tsx'
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';
import CardProjects from './components/CardProjects.tsx';
import Contact from './components/Contact.tsx';
import "./App.css"

function App() {
  
  return (
    <>
      <main className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-purple-700 m-0'>
        <Hero />
        <Skills />
        <CardProjects/>
        <Contact/>
        <Footer />
      </main>

    </>
  )
}

export default App