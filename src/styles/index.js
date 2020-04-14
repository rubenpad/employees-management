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
  }

  button {
    border: 0;
    outline: 0;
  }
`;
