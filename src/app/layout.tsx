
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import React, { useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'CodeFolio | Ari Ardiansyah',
//   description: 'Personal portfolio of Ari Ardiansyah, a Fullstack Developer and Backend Engineer.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || systemTheme;
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ari Ardiansyah</title>
        <meta name="description" content="Personal portfolio of Ari Ardiansyah, a Fullstack Developer and Backend Engineer." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
