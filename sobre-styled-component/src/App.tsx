import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import { ButtonPrimary, ButtonSecondary, Content } from './ButtonStyles';
import { Counter } from './counter/counter';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
  }
  a {
    text-decoration: none;
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
    <Counter />
  </ThemeProvider>
  </>
  );
}

export default App;
