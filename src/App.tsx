import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <About />
        <Features />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
