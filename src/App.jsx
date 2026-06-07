import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import WhyEvezas from './components/WhyEvezas';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <WhyEvezas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
