'use client';

import Masthead from 'components/masthead';
import About from 'partials/about';
import Skills from 'partials/skills';
import Clients from 'partials/clients';
import Testimonials from 'partials/testimonials';
import Contact from 'partials/contact';

export default function Home() {
  return (
    <main>
      <Masthead id="home"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Clients id="clients"/>
      <Testimonials id="testimonials"/>
      <Contact id="contact"/>
    </main>
  );
}
