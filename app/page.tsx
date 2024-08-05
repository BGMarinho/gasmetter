'use client';
import TopBar from './components/TopBar';
import Fueling from './components/Fueling';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <TopBar />
      <Fueling />
      <Footer />
    </main>
  );
}
