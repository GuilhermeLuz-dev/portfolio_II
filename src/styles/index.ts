import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body{
    font-family: "Montserrat", sans-serif;
    background-color: #0c0c0c;
  }

  a{
    text-decoration:none;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
