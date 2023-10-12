

import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React from 'react';
import { Providers } from '@/lib/Providers';

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </Providers>
      </body>
    </html>
  );
}