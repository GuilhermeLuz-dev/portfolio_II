import { styled } from 'styled-components'

type Props = {
  size?: number
}

export const IconStyled = styled.img<Props>`
  width: ${(props) => (props.size ? props.size : '16')}px;
  &:hover {
    transform: scale(1.2);
`
