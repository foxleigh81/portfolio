import 'styles/index.scss';
import { Work_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

// Configure the font
const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans', // Define CSS variable name
  weight: ['400', '700'], // Specify desired weights
});

export const metadata: Metadata = {
  title: 'Alexander Foxleigh - Lead Software Engineer',
  description: 'The personal website of Alexander Foxleigh, Lead Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
