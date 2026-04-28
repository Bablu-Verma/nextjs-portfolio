import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';

import './globals.css';
import Provider from '@/components/Provider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bablu.dev | Full Stack Developer in Noida',
  description:
    'Professional portfolio showcasing my work as a full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'React', 'Next.js', 'TypeScript', 'full-stack'],
  authors: [{ name: 'Bablu Verma' }],

  openGraph: {
    title: 'Bablu.dev | Full Stack Developer in Noida',
    description: 'Professional portfolio showcasing my work as a full-stack developer',
    type: 'website',
    url: 'https://bablu-verma.vercel.app',
    images: [
      {
        url: 'https://bablu-verma.vercel.app/bablu.jpg',
        width: 1200,
        height: 630,
        alt: 'Bablu.dev Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bablu.dev | Full Stack Developer in Noida',
    description: 'Professional portfolio showcasing my work as a full-stack developer',
    images: ['https://bablu-verma.vercel.app/bablu.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}>

        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}