import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import { CustomDropdown } from './components/Dropdown/Dropdown';

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
  const options = ['Pizza', 'Hamburguer', 'Coxinha', 'Brigadeiro']
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <h1>Dropdown customizado</h1>
          <CustomDropdown
            listOptions={options}
            bgColor="#3f1b7d"
            hoverColor="#643ca2"
            fontColor="#e7ccff"
            textColor="#e7ccff"
            hoverBgColor="#7b5ea5"
            hoverTextColor="#3f1b7d"
          />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
