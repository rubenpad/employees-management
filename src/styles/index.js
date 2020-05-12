import { css, createGlobalStyle } from 'styled-components';

export const fonts = {
  main: 'Roboto',
  alter: 'system-ui',
};

export const colors = {
  primary: '#5551ff',
  secondary: '#e83d98',
  light: '#f6f7f9',
  white: '#ffffff',
  dark: '#15171a',
  black: '#000',
  error: '#d12f2e',
};

export const breakpoints = {
  small: 480,
  medium: 767,
  mediumL: 960,
  large: 1140,
};

export const fontSize = {
  0: 0,
  1: '12px',
  2: '14px',
  3: '16px',
  4: '20px',
  5: '24px',
};

export const responsive = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Global styles to reset some browser default styles
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};
    font-size: ${fontSize[2]};
  }

  input, select {
    outline: 0;
    border: 0;
    border-radius: 2px
  }

  button {
    border: 0;
    outline: 0;
    padding: 12px 20px;
    border-radius: 4px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.main};
  }

  body {
    background: ${colors.light};
    font-family: ${fonts.alter};
    height: 100%;
  }
`;
