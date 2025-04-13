'use client';

import dynamic from 'next/dynamic';
import type { Props as ContactProps } from 'partials/contact';

// Dynamically import Contact component with ssr: false
const Contact = dynamic(() => import('partials/contact'), {
  ssr: false, // Allowed inside a Client Component
  loading: () => <p>Loading contact form...</p> // Optional: show a loading indicator
});

// This component just renders the dynamically loaded Contact component
// It accepts the same props as Contact and passes them through.
export const DynamicContactLoader: React.FC<ContactProps> = (props) => {
  return <Contact {...props} />;
};

export default DynamicContactLoader;
