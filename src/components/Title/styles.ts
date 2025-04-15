import styled from 'styled-components'

type TitleStyledProps = {
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  color?: 'pinkGradient' | 'blueGradient' | 'greenGradient'
  center?: boolean
}

export const TitleStyled = styled.h1<TitleStyledProps>`
  font-size: ${(props) =>
    props.size === 'small' ? '24px' : props.size === 'medium' ? '32px' : '40px'};
  font-weight: ${(props) => (props.weight === 'bold' ? '700' : '400')};
  background: ${(props) =>
    props.color === 'pinkGradient'
      ? 'linear-gradient(90deg, #DC6EBE 0%, #F109B2 100%)'
      : props.color === 'blueGradient'
        ? 'linear-gradient(90deg,rgb(1, 64, 105) 0%, #264DE4 100%)'
        : 'linear-gradient(90deg,rgb(1, 184, 101) 34.5%, #6BD1FF 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`
