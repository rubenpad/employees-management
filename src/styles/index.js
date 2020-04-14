import { css, createGlobalStyle } from 'styled-components';
import theme from './theme';

export const above = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${theme.breakpoints[label]}px) {
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
    color: ${theme.colors.dark};
    font-size: ${theme.fontSize[2]};
  }

  button {
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.main};
  }

  body {
    background: ${theme.colors.light};
    font-family: ${theme.fonts.alter};
  }
`;
