'use client';
import Masthead from 'components/masthead';
import About from 'partials/about';
import Skills from 'partials/skills';

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}
