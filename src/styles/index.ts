import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  color?: 'pinkGradient' | 'blueGradient' | 'greenGradient'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    box-sizing:border-box;
    font-family: "Montserrat", sans-serif;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: #0c0c0c;
  }

  section{
    scroll-margin-top: 61px;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Title = styled.h1<Props>`
  font-size: 32px;
  background: ${(props) =>
    props.color === 'pinkGradient'
      ? 'linear-gradient(90deg, #DC6EBE 0%, #F109B2 100%)'
      : props.color === 'blueGradient'
        ? 'linear-gradient(90deg,rgb(1, 64, 105) 0%, #264DE4 100%)'
        : 'linear-gradient(90deg,rgb(1, 184, 101) 34.5%, #6BD1FF 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`
