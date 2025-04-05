import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }



  body{
    font-family: "Montserrat", sans-serif;
    background-color: #0c0c0c;
  }

  .container{
    width: 100%;
    max-width:1024px;
    margin: 0 auto;
  }

  a{
    text-decoration:none;
  }
`
