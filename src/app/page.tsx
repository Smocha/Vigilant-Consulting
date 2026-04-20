import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <ContactForm />
    </main>
  );
}