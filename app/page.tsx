'use client';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Fueling from './components/Fueling';
import Footer from './components/Footer';

const MainContent = styled.main`
  display: grid;
`;

export default function Home() {
  return (
    <MainContent>
      <TopBar />
      <Fueling />
      <Footer />
    </MainContent>
  );
}
