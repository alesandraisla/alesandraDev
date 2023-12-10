import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import { MenuHamburguer } from './MenuHamburguer/MenuHamburguer';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }

  * {
    margin: 0;
  }
`
export const theme = {
  borderColor: "blue",
  color: "gray"
}

function App() {
  return (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MenuHamburguer />
  </ThemeProvider>
  </>
  );
}

export default App;
