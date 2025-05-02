import styled from 'styled-components'
type Props = {
  color?: string
}
export const TagStyled = styled.div<Props>`
  display: inline-block;
  padding: 4px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 10px;
  background: ${(props) => (props.color ? props.theme.colors[props.color] : '#00f')};
  color: #fff;
`
