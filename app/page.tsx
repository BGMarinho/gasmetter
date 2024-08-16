'use client';
import styled from 'styled-components';
import TopBar from './sections/TopBar';
import Fueling from './sections/Fueling';
import History from './sections/History';
import Footer from './sections/Footer';
import { useState } from 'react';

const MainContainer = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 30px 1fr auto;
  grid-row-gap: 3rem;
`;

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('fueling');

  return (
    <MainContainer>
      <TopBar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      {selectedSection === 'fueling' ? <Fueling /> : <History />}
      <Footer />
    </MainContainer>
  );
}
