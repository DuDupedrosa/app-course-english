import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --text: 'Roboto', sans-serif;
    --color-1: #202024;
    --color-2: #121214;
    --color-3: #ffffff;
    --color-4: #00B37E;
    --color-5: #D90429:
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
`;

export const ContainerMain = styled.div`
  max-width: 85rem;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 1.25rem;
`;
