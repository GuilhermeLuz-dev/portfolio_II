import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    box-sizing:border-box;
    font-family: "Montserrat", sans-serif;
  }

  body{
    background-color: #0c0c0c;
  }

`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`
