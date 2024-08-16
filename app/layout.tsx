import type { Metadata } from 'next';
import Font from './font.module.css';

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
        className={Font.globals}
        style={{ margin: 0, height: '100vh', width: '100vw' }}
      >
        {children}
      </body>
    </html>
  );
}
