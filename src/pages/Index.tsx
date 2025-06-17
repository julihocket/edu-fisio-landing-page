
import Header from '../components/Header';
import Hero from '../components/Hero';
import Specialties from '../components/Specialties';
import About from '../components/About';
import Results from '../components/Results';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Specialties />
      <About />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
