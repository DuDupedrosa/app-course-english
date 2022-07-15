import React from 'react';
import { GlobalStyles } from '../styles/Global.js';
import styled from 'styled-components';

const BoxBackground = styled.div`
  background: var(--color-1);
  border: 0.125rem solid var(--color-4);
  border-radius: 0.5rem;
`;

const BoxContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 75rem;
  align-items: start;
  padding: 3.75rem;
`;

const ImgContent = styled.div``;

const TextContent = styled.div`
  display: grid;
  gap: 2.5rem;
`;

const TitleSection = styled.h2`
  font-family: var(--text);
  font-weight: 500;
  font-size: 3rem;
  line-height: 3.625rem;
  color: var(--color-3);
  position: relative;
  z-index: 2;
  ::before {
    content: '';
    display: inline-block;
    width: 2.25rem;
    height: 2.25rem;
    background: var(--color-4);
    border-radius: 0.5rem;
    position: absolute;
    left: -0.625rem;
    top: 1.5625rem;
    z-index: -1;
  }
`;

const ParagraphContent = styled.p`
  font-family: var(--text);
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--color-3);
`;

function TheContent({ Title, firstText, secondText, description, urlImg }) {
  return (
    <BoxBackground>
      <GlobalStyles />
      <BoxContent>
        <ImgContent>
          <img src={urlImg} alt="" />
        </ImgContent>
        <TextContent>
          <TitleSection>{Title}</TitleSection>
          <ParagraphContent>{firstText}</ParagraphContent>
          <ParagraphContent>{secondText}</ParagraphContent>
          <ParagraphContent>{description}</ParagraphContent>
        </TextContent>
      </BoxContent>
    </BoxBackground>
  );
}

export default TheContent;
