import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-500']};
  }
  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3 {
     font-family: 'Baloo 2', cursive;
  }

  h1 {
    font-size: clamp(1.25rem, -0.875rem + 8.333vw, 3rem);
  }

  h2 {
    font-size: clamp(1.10rem, -0.875rem + 8.333vw, 2rem);
  }

  3 {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
  }

  a{
    text-decoration: none;
  }
`;
