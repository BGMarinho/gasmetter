import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Gasmetter',
//   description: 'Gasmetter | Mind your gas!',
// };

export const metadata: Metadata = {
  title: 'Gasosa',
  description: 'Gasosa | Se liga na gasosa!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
