'use client';

import Masthead from 'components/masthead';
import About from 'partials/about';
import Skills from 'partials/skills';
import Clients from 'partials/clients';
import Testimonials from 'partials/testimonials';

export default function Home() {
  return (
    <main>
      <Masthead />
      <About /> 
      <Skills /> 
      <Clients  />
      <Testimonials  />
    </main>
  );
}