import styled from 'styled-components';

export const ButtonPrimary = styled.button.attrs(props => ({
  type: 'primary'
}
))`
  background-color: 
    ${(props) => (props.primary ? "navy" : "pink")};
  border-radius: 5px;
  width: 118px;
  height: 43px;
`
export const ButtonSecondary = styled(ButtonPrimary)`
  width: 300px;
  height: 100px;
  color: red;
`

export const Content = styled.div`
  background-color: ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  height: 100vh;
`