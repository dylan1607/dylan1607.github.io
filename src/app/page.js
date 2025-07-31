import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
