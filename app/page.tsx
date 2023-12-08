'use client';
import Masthead from 'components/masthead';
import About from 'partials/about';
import Skills from 'partials/skills';
import Clients from 'partials/clients';

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <About />
        <Skills />
        <Clients />
      </main>
    </>
  );
}
