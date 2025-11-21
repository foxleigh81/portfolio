import Masthead from 'components/masthead';
import FoxysLabBanner from 'components/foxys-lab-banner';
import About from 'partials/about';
import Skills from 'partials/skills';
import Clients from 'partials/clients';
import Testimonials from 'partials/testimonials';
import Footer from 'partials/footer';
import DynamicContactLoader from 'components/dynamic-contact-loader';

export default function Home() {
  return (
    <main>
      <Masthead id="home" />
      <FoxysLabBanner />
      <About id="about" />
      <Skills id="skills" />
      <Clients id="clients" />
      <Testimonials id="testimonials" />
      <DynamicContactLoader id="contact" />
      <Footer />
    </main>
  );
}
