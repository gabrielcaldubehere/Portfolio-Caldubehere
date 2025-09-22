import Hero from './components/Hero.tsx'
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';
import CardProjects from './components/CardProjects.tsx';
import Contact from './components/Contact.tsx';
import "./App.css"

function App() {
  
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-purple-700 m-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Skills />
          <CardProjects />
          <Contact />
        </div>
        <Footer />
      </main>

    </>
  )
}

export default App