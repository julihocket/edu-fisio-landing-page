
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Treatments from '../components/Treatments';
import Testimonials from '../components/Testimonials';
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <Testimonials />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
