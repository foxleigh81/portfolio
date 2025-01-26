const clients = [
  {
    slug: 'the-arch-company',
    name: 'The Arch Company',
    role: 'Lead Developer',
    date_started: '2024-10-01',
    date_ended: '',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>Following the successful completion of the project at Transform, The Arch Company sought additional work and ongoing aftercare services. Recognising that these needs fell outside Transform’s operational scope, an agreement was reached for me to take on this work independently on a part-time basis.</p>
<p>My responsibilities have included implementing new features to enhance the website’s functionality, providing expert SEO support to boost their online presence, and addressing technical issues through proactive bug fixes.</p>`
  },
  {
    slug: 'transform',
    name: 'Transform',
    role: 'Lead Developer',
    date_started: '2024-05-01',
    date_ended: '2024-09-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>In my role as Lead Developer for this project, I took charge of the architecture and coding standards for a sophisticated property search platform. Managing a team of two developers, I led strategic planning discussions with clients and senior leadership to ensure alignment with business objectives.</p>
<p>My focus on creating a robust, accessible, and performant component library, thoroughly documented and tested within Storybook, facilitated a seamless user experience and maintained high development standards.</p>`
  },
  {
    slug: 'the-london-data-company',
    name: 'The London Data Company',
    role: 'Lead Full Stack Engineer',
    date_started: '2024-03-01',
    date_ended: '2024-04-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>I was brought into LDCo on a short-term basis to assist them with getting a product demo-ready. It was a tool, primarily built in Laravel, which allows users to automatically redact documents using AWS ‘Textract’ and ‘Comprehend’ services.</p>`
  },
  {
    slug: 'surevine',
    name: 'Surevine',
    role: 'Head of Frontend Coding standards',
    date_started: '2021-01-01',
    date_ended: '2023-08-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>My role here was as the founder and head of the ‘Standards team’ for a major Intelligence Services commission. It was a series of projects enabling remote work for intelligence personnel by allowing day-to-day operations without traveling to a secure site.</p>
<p>I developed a coding standard and a framework application, resulting in ‘The Wellspring’, a NextJS application that leverages Storybook and a ‘storybook-driven-development’ approach. This significantly increased development speed and quality, and I also mentored and supported other members of the commission.</p>`
  },
  {
    slug: 'cabinet-office',
    name: 'Cabinet Office',
    role: 'Senior Frontend Developer',
    date_started: '2020-06-01',
    date_ended: '2020-10-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>I worked for the UK Cabinet Office's 'COBR' team, developing a NodeJS and Nunjucks-based Covid-19 response dashboard to provide a secure data-brief for the Prime Minister and cabinet. As the project lead, I built the entire front-end using Node, Express, and Nunjucks with the back-end provided via a WordPress API.</p>`
  },
  {
    slug: 'deep-blue-c',
    name: 'Deep Blue C',
    role: 'Head of Engineering',
    date_started: '2019-09-01',
    date_ended: '2020-06-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>My time at Deep Blue C was spent building 'Serge', a wargame engine used by various arms of the Royal Navy. It is built in React and LeafletJS. I transformed it from a simple chat client into a map-based game, creating both a pure LeafletJS version and then a React component version with react-leaflet.</p>
<p>I also served as project architect for the Serge team, choosing and implementing the tech stack, project structure, testing strategy, and enforcing development standards.</p>`
  },
  {
    slug: 'vmd',
    name: 'Veterinary Medicines Directorate',
    role: 'Lead Front End Engineer',
    date_started: '2019-07-01',
    date_ended: '2019-12-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>I worked for DEFRA’s Veterinary Medicines Directorate to help modernize some older desktop-based apps into modern web-apps following the GDS standard. Initially, I assisted with their testing strategy, implementing a common suite of ‘Cucumber’ steps and ‘Tap’ unit tests. Then I helped build the front-end with Nunjucks and AngularJS (using Hapi and Ionic).</p>
<p>Later, I designed and built ‘The Greenhouse’, an app allowing product owners to generate BDD scripts from spreadsheets. Initially built in Ionic, I then rebuilt it using Express, EJS, and jQuery to better meet GDS guidelines. The hope is that future approval will allow React or Vue.</p>`
  },
  {
    slug: 'royal-navy',
    name: 'Royal Navy',
    role: 'Lead Frontend Engineer',
    date_started: '2018-07-01',
    date_ended: '2019-06-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: true,
    description: `<p>I worked for the Royal Navy on a project to standardize application building across various systems. This involved prototyping in VueJs and ReactJS, which led to building our 'standards toolkit' project — a suite of components (VueJS and ReactJS), CSS styles, helper functions, and guidelines (ultimately evolving into the MOD UK Design System).</p>
<p>I also built <a href="https://docs.royalnavy.io" target="_blank">docs.royalnavy.io</a> (now <a href="https://design-system.digital.mod.uk" target="_blank">design-system.digital.mod.uk</a>) using GatsbyJS and Firebase to serve as our documentation site.</p>`
  },
  {
    slug: 'dauntless',
    name: 'Dauntless',
    role: 'Consultant Lead UI Developer',
    date_started: '2018-06-01',
    date_ended: '2018-07-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>I joined Dauntless to help deliver a project for a top international electronic plant hire company. I focused on improving their coding processes, build systems, and built a few key UI components for the project.</p>`
  },
  {
    slug: 'department-for-international-trade',
    name: 'Department for International Trade (DIT)',
    role: 'Consultant Frontend Engineer',
    date_started: '2018-02-01',
    date_ended: '2018-04-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>I worked on an internal CRM application, building Nunjucks and Vue components for their project. My main responsibility was to ensure maintainable and scalable front-end architecture.</p>`
  },
  {
    slug: 'top10vpn',
    name: 'Top10VPN',
    role: 'Senior Consultant UI developer',
    date_started: '2017-12-01',
    date_ended: '2018-02-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>Short-term role at Top10VPN, focusing on enhancing UI components and improving the codebase’s efficiency while working within tight deadlines.</p>`
  },
  {
    slug: 'ministry-of-justice-uk',
    name: 'Ministry of Justice UK',
    role: 'Freelance Senior User Interface Developer',
    date_started: '2016-09-01',
    date_ended: '2017-11-01',
    logo: 'https://placeimg.com/100/100/tech',
    included: false,
    description: `<p>I had two projects at the Ministry of Justice: first, building a Node prototype for a new service called the Out of Court Pathway (OOCP) to support recently divorced parents with custody, access, and child-maintenance issues.</p><p>The second was modernizing the Ministry’s outdated intranet. Alongside being the senior front-end developer, I eventually took on senior UI design responsibilities. I established a component-based architecture so future developers could assemble pages with minimal hassle.</p>`
  }
];

export default clients;
