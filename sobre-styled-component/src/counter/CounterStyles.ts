import styled from 'styled-components';

export const Content = styled.div`
background-color: #2c2e4d;
height: 100vh;
margin: 0px auto;
box-sizing: border-box;
h1 {
  text-align: center;
  color: white;
  padding-top: 80px;
}
`

export const BoxCounter = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #676399;
  background: #676399;
  width: 500px;
  height: 200px;
  margin-top: 20px;
  border-radius:10px;
  span {
    padding: 40px;
    font-size: 40px;
  }
`

export const DataCounter = styled.div`
  display: flex;
  gap: 20px;
  button {
    font-size: 30px;
    background-color: #b59de9 ;
    border-color: #b59de9;
    border: none;
    border-radius: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    :hover {
      background: #f8d1ed;
    }
  }
`

