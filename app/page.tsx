'use client';
import GlobalContextProvider, { GlobalContext } from './context/context';
import styled from 'styled-components';
import TopBar from './sections/TopBar';
import Fueling from './sections/Fueling';
import History from './sections/History';
import Footer from './sections/Footer';
import { useContext, useEffect } from 'react';

const MainContent = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 3rem;
`;

export default function Home() {
  return (
    <GlobalContextProvider>
      <MainContent>
        <TopBar />
        {useContext(GlobalContext)?.selectedSection === 'fueling' ? (
          <Fueling />
        ) : (
          <History />
        )}
        <Footer />
      </MainContent>
    </GlobalContextProvider>
  );
}
