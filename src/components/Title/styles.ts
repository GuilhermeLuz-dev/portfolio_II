import styled from 'styled-components'

type TitleStyledProps = {
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  color?: string
  center?: boolean
}

export const TitleStyled = styled.h1<TitleStyledProps>`
  font-size: ${(props) =>
    props.size === 'small' ? '24px' : props.size === 'medium' ? '32px' : '40px'};
  font-weight: ${(props) => (props.weight === 'bold' ? '700' : '400')};
  background: ${(props) => (props.color ? props.theme.colors[props.color] : '#0f0')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`
