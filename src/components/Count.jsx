import React from 'react';
import styled, { keyframes } from 'styled-components';
import { GlobalStyles } from '../styles/Global.js';
import TitleSection from './TheTitle.jsx';
import HtmlImg from '../assets/html.png';
import CssImg from '../assets/css.png';
import JsImg from '../assets/js.png';

const CountBox = styled.div`
  background: var(--color-1);
  border: 0.125rem solid var(--color-4);
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  padding: 1.25rem;
`;

const CountContent = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const TitleCount = styled.h2`
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

const ShowCount = styled.div`
  border: 0.125rem solid var(--color-4);
  border-radius: 0.5rem;
  font-size: 3rem;
  color: var(--color-3);
  font-family: var(--text);
  font-weight: bold;
  padding: 1rem;
  text-align: center;
  margin: 4rem 0 0 0;
`;

const ButtonCountGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 2.5rem auto 0 auto;
  max-width: max-content;
`;

const ButtonCount = styled.button`
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-3);
  font-family: var(--text);
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: 0 0 1.5rem ${(props) => props.color};
  }
`;

const showPhotosAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,-3.75rem,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const GridImg = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.25rem;
  margin-top: 2.5rem;
  animation: ${showPhotosAnimation} 1s forwards;
`;

const LinkCode = styled.p`
  cursor: pointer;
  color: var(--color-4);
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--text);
  text-align: center;
  text-transform: capitalize;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.125rem;
    background: var(--color-4);
    transition: 0.3s;
  }
  :hover::after {
    background-color: var(--color-3);
  }
`;

function Count() {
  const [count, setCount] = React.useState(0);
  const [showPhotos, setShowPhotos] = React.useState(false);

  function reduceCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function addCount() {
    setCount(count + 1);
  }

  return (
    <>
      <TitleSection text={'The magic behind of the application'} />
      <GlobalStyles />
      <CountBox>
        <CountContent>
          <TitleCount>The count</TitleCount>
          <ShowCount>{count}</ShowCount>
          <ButtonCountGrid>
            <ButtonCount color="#D90429" onClick={reduceCount}>
              -
            </ButtonCount>
            <ButtonCount color="#00B37E" onClick={addCount}>
              +
            </ButtonCount>
          </ButtonCountGrid>
          <LinkCode onClick={() => setShowPhotos(!showPhotos)}>
            {showPhotos ? 'close the code' : 'show the code'}
          </LinkCode>
        </CountContent>
        {showPhotos && (
          <GridImg>
            <li>
              <img src={HtmlImg} alt="" />
            </li>
            <li>
              <img src={CssImg} alt="" />
            </li>
            <li>
              <img src={JsImg} alt="" />
            </li>
          </GridImg>
        )}
      </CountBox>
    </>
  );
}

export default Count;
