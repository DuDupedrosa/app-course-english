import React from 'react';
import styled from 'styled-components';
import { GlobalStyles, ContainerMain } from '../styles/Global.js';
import TheTitle from './TheTitle.jsx';
import Slide from './Slide.jsx';
import TheHeader from './TheHeader.jsx';
import Count from './Count.jsx';

const HomeBg = styled.div`
  background: var(--color-2);
  padding-bottom: 7.5rem;
`;

function Home() {
  return (
    <HomeBg>
      <TheHeader />
      <ContainerMain>
        <GlobalStyles />
        <TheTitle text={'My obligations how a Developer'} />
        <Slide />
        <Count />
      </ContainerMain>
    </HomeBg>
  );
}

export default Home;
