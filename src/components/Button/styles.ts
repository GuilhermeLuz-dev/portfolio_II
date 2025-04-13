import styled from 'styled-components'

type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'pinkGradient' | 'blueGradient' | 'greenGradient'
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${(props) =>
    props.size === 'small' ? '100px' : props.size === 'medium' ? '160px' : '200px'};
  background: ${(props) =>
    props.color === 'pinkGradient'
      ? 'linear-gradient(90deg, #7E13F8  0%,#DC6EBE 100%)'
      : props.color === 'blueGradient'
        ? 'linear-gradient(90deg,rgb(1, 64, 105) 0%, #264DE4 100%)'
        : 'linear-gradient(90deg,rgb(1, 184, 101) 34.5%, #6BD1FF 100%)'};
  padding: 8px;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
