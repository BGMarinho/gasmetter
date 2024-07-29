'use client';
import TopBar from './components/TopBar';
import NewFueling from './components/NewFueling';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <NewFueling />
      <Footer />
    </main>
  );
}
