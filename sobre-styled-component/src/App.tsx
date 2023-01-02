import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import { ButtonPrimary, ButtonSecondary, Content } from './ButtonStyles';

const GlobalStyle = createGlobalStyle`
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
    <Content>
      <ButtonPrimary primary onClick={() => alert('Clicado!')}>
        Clique aqui!
      </ButtonPrimary>
      <ButtonPrimary  onClick={() => alert('Clicado!')}>
        Clique aqui!
      </ButtonPrimary>
      <ButtonSecondary>
        Segundo botão!
      </ButtonSecondary>
    </Content>
  </ThemeProvider>
  </>
  );
}

export default App;
