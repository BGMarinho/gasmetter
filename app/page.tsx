'use client';
import styled from 'styled-components';
import TopBar from './sections/TopBar';
import Fueling from './sections/Fueling';
import Footer from './sections/Footer';

const MainContent = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 3rem;
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
