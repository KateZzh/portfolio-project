import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  margin: 0;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.font};
  line-height: 1.2;
}

a {
  text-decoration: none;

}

ul {
  list-style: none;
}

button {
  cursor: pointer;
  background-color: unset;
  border: none;
  color: ${theme.colors.font};
}

section {
  margin-bottom: 70px;
}

h2 {
  font-weight: 700;
    font-size: 32px;
    color: ${theme.colors.font};
}

h3 {
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.font};
}

p {
  font-weight: 400;
    font-size: 15px;
    color: ${theme.colors.fontSecondary};
}
`;
