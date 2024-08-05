'use client';
import TopBar from './components/TopBar';
import Fueling from './components/Fueling';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main style={{ width: '100vw' }}>
      <TopBar />
      <Fueling />
      <Footer />
    </main>
  );
}
