import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../styles/Global.js';

const Title = styled.h1`
  font-family: var(--text);
  font-weight: 400;
  font-size: 4rem;
  font-weight: 500;
  color: var(--color-3);
  text-align: center;
  margin-bottom: 3.75rem;
`;

function TheTitle({ text }) {
  return (
    <>
      <GlobalStyles />
      <Title>{text}</Title>
    </>
  );
}

export default TheTitle;
