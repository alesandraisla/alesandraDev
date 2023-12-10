import styled from 'styled-components';

interface MenuProps {
  isOpen: boolean
}

export const Container = styled.nav<MenuProps>`
  background-color: #5e3484;
  border-radius: 1.25rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Cherry Swash', serif;
  font-family: 'Roboto', sans-serif;
  padding: 0px;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: ${(props) => (props.isOpen ? "column" : "row") };
    gap: 2rem;
    padding-left: 0px;
  }

  li {
    list-style-type: none;
  }
  a {
    color: #ffeeff;
    font-weight: 700;
  }

  a:hover {
    color: #c3b0ca;
  }

  @media(max-width: 425px) {
    justify-content: flex-end;
    margin-top: 0;
    border-radius: 0;

    ul {
      flex-direction: column;
      position: absolute;
      top: 2.5rem;
      left: 0px;
      padding-left: 0px;
      width: 100%;
      background-color: #5e3484;
    }

    li {
      padding: 0.5rem;
    }
  }

`

export const ContentMobile = styled.div`
  display: none;

  @media(max-width: 425px) {
    display: flex;
    padding-right: 20px;
  }
`