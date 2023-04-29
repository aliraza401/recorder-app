import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  #root {
    max-width: 450px;
    margin: 0 auto;
    height: 100vh;
  }
  .cursor-pointer {
    cursor: pointer;
  }

  .pointer-disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  .canvas-container {
    /* background: linear-gradient(to bottom right, purple, orange); */
    position: relative;
    width: 100%;
    height: 100%;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default GlobalStyle;
