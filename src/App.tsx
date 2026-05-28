import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Methods from './components/Methods';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Results />
        <Methods />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
