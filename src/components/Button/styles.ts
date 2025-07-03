import styled from 'styled-components'

export const ButtonStyled = styled.a`
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
  transition:
    all 0.3s,
    box-shadow 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`
