import styled from 'styled-components'

import { Container } from '../../styles'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-itens: center;
  padding: 22px 0;
  background-color: #1e1e1e;
  border-bottom: 3px solid #333;
`
export const MenuToggle = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
