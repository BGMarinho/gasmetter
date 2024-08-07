import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gasosa | Gasmetter',
  description: 'Se liga na gasosa! | Mind your gas!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, height: '100vh', width: '100vw' }}
      >
        {children}
      </body>
    </html>
  );
}
