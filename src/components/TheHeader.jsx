import React from 'react';
import { GlobalStyles } from '../styles/Global.js';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const HeaderBg = styled.header`
  height: 6.25rem;
  background: var(--color-1);
  display: grid;
  place-items: center;
  margin-bottom: 7.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeaderLogoText = styled.p`
  font-family: var(--text);
  font-weight: 500;
  font-size: 1.625rem;
  color: var(--color-3);
  letter-spacing: 0.015rem;
`;

const HeaderLogoImg = styled.div``;

function TheHeader() {
  return (
    <HeaderBg>
      <GlobalStyles />
      <HeaderContent>
        <HeaderLogoImg>
          <img src={logo} alt="Logo" />
        </HeaderLogoImg>
        <HeaderLogoText>Development</HeaderLogoText>
      </HeaderContent>
    </HeaderBg>
  );
}

export default TheHeader;
