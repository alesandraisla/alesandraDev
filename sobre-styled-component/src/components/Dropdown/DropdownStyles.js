import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 200px;
  margin: 20px;
`

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ bgColor }) => bgColor || "#3498db"};
  color: ${({ fontColor }) => fontColor || "#fff"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: left;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#2980b9"};
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  z-index: 1;
`

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  color: ${({ textColor }) => textColor || "#333"};

  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#f1f1f1"};
    color: ${({ hoverTextColor }) => hoverTextColor || "#000"};
  }
`;