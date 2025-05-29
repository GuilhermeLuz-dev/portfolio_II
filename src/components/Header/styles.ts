import styled from 'styled-components'

import { Container } from '../../styles'

export const HeaderStyled = styled.header<{ $transparent?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: ${({ $transparent }) => ($transparent ? 'transparent' : '#1e1e1e')};
  border-bottom: 3px solid ${({ $transparent }) => ($transparent ? 'transparent' : '#333')};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition:
    background-color 0.3s ease,
    border-bottom-color 0.3s ease;
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
