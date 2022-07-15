import React, { useState } from 'react';
import TheContent from './TheContent.jsx';
import ImgApp from '../assets/ex-app.png';
import ImgBug from '../assets/ex-bug.png';
import { keyframes } from 'styled-components';
import { GlobalStyles } from '../styles/Global.js';
import styled from 'styled-components';

const GridBox = styled.div`
  display: grid;
  gap: 3.75rem;
`;

// animation of slide
const animeLeft = keyframes`
from {
opacity: 0;
transform: translate3d(-6.25rem,0,0);
}
to {
opacity: 1;
transform: translate3d(0,0,0);
}
`;

// pull animation
const BoxAnimation = styled.div`
  transition: 0.3s;
  animation: ${animeLeft} 1s forwards;
`;

const SlideButton = styled.button`
  cursor: pointer;
  color: var(--color-4);
  background: var(--color-1);
  border: 0.125rem solid var(--color-4);
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-family: var(--text);
`;

const BoxSlideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 2.5rem;
`;

const SlideBox = styled.div`
  margin-bottom: 7.5rem;
`;

function Slide() {
  const [slide, setSlide] = useState(false);

  return (
    <SlideBox>
      <GlobalStyles />
      <GridBox>
        {!slide && (
          <BoxAnimation>
            <TheContent
              Title={'Create Applications'}
              firstText={
                'How a Developer I have some obligations, but the main Is create reactive interfeces.'
              }
              secondText={
                'Because in the actual world, is very import that there are, some applications, that can help in us day bay day.'
              }
              description={
                'In this picture you can see a Important application that we always use.'
              }
              urlImg={ImgApp}
            />
          </BoxAnimation>
        )}
        {slide && (
          <BoxAnimation>
            <TheContent
              Title={'Take Care Applications'}
              firstText={
                'The second obligation is take care of the applications, because after the create the aplication is commun, there are many problems.'
              }
              secondText={
                'Is my obligation, find these problems and resolve and find the best solution.'
              }
              description={
                'In there picture you can see a problem,  is the code  “not found”'
              }
              urlImg={ImgBug}
            />
          </BoxAnimation>
        )}
      </GridBox>
      <BoxSlideButton>
        <SlideButton onClick={() => setSlide(false)}>prev</SlideButton>
        <SlideButton onClick={() => setSlide(true)}>next</SlideButton>
      </BoxSlideButton>
    </SlideBox>
  );
}

export default Slide;
