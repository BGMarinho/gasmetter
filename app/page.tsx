'use client';
import TopBar from './components/TopBar';
import NewFueling from './components/NewFueling';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main style={{ width: '100vw' }}>
      <TopBar />
      <NewFueling />
      <Footer />
    </main>
  );
}
