import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardProjects from "./components/CardProjects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AIChatWidget from "./components/AIChatWidget";

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <Hero />
        <CardProjects />
        <Skills />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;
