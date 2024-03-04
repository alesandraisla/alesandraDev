import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import { Text } from './components/Text/Text';
import { ButtonFontSize } from './components/ButtonFontSize/ButtonFontSize';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }

  * {
    margin: 0;
    box-sizing: border-box;
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
    <ButtonFontSize>
      <Text />
    </ButtonFontSize>
    <GlobalStyle />
  </ThemeProvider>
  </>
  );
}

export default App;
