import styled from 'styled-components'
import { ButtonFontSizeProps } from './ButtonFontSize.type'

export const GlobalFontContainer = styled.div<ButtonFontSizeProps>`
  font-size: ${(props)=> props.fontSize}px;
`
export const FontSizeController = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;

  > button {
    cursor: pointer;
    color: #333;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    background: linear-gradient(to bottom, #fff 52%, #e5e5e5 89%);
    border: 2px solid #e5e5e5;

    :hover {
      color: #266dc5;
    }
  }

`