import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --white: #FCFCFC;
    --grey: #F2F0F0;
    --black: #000000;
  }

  body {
    margin: 1rem;
    background-color: var(--white);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
    line-height: 1;

  }
  
  input {
    // Avoid mobil zoom when input is focused
    font-size: inherit;
  }

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
 }
`;
