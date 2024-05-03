import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Supabase | The Open Source Firebase Alternative',
  description:
    'Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.',
  openGraph: {
    url: 'https://supabase.com/images/og/og-image-v2.jpg',
    title: 'Supabase | The Open Source Firebase Alternative',
    siteName: 'Supabase',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
      <Script
        defer
        src="https://us.umami.is/script.js"
        data-website-id="626750fe-b1b7-40ba-a7a6-d2257b3fa47c"
      />
    </html>
  );
}
