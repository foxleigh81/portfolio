import 'styles/index.scss';
import '@fontsource/work-sans';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
export const metadata: Metadata = {
  title: 'Alexander Foxleigh - Lead Software Engineer',
  description: 'The personal website of Alexander Foxleigh, Lead Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
