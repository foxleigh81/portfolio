'use client';
import Masthead from 'components/masthead';
import Block from 'components/block';

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Block name="about">
          <h2>About Me</h2>
          <p>
            I have been a web developer since 1998, I initially started when the
            term was <em>&apos;web master&apos;</em> and we had to build the
            entire site from initial design all the way up to deployment. I have
            since specialised in front-end development and project architecture,
            usually as the development lead.
          </p>

          <p>
            My primary skills centre around JavaScript, primarily the React and
            NextJS frameworks, I have extensive experience with front-end and
            back-end NodeJS. I&apos;m a strong advocate of Web Standards,
            Usability, Accessibility and the DRY principle.
          </p>

          {/*TODO: <p>
            If you are interested in knowing more about my career history, here
            is a full account from 1998 to present.
          </p> */}
        </Block>
      </main>
    </>
  );
}
