import styled from 'styled-components'

import { TitleStyled } from '../Title/styles'
import { ButtonStyled } from '../Button/styles'

type Props = {
  background?: string
}
export const CarrousselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  width: 100%;
  height: 300px;
  margin-top: 48px;
  background-color: #1e1e1e;
  border-radius: 10px;
`
export const ImageContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(30, 30, 30, 0) 0%, rgb(30, 30, 30) 100%);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
  }
`

export const CarrousselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const CarrousselInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`
export const TitleCarrousel = styled(TitleStyled)`
  margin-bottom: 16px;
`

export const P = styled.p`
  margin-bottom: 16px;
`
export const TechIconsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: auto;
  gap: 16px;
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 10px;
`

export const ButtonProject = styled(ButtonStyled)<Props>`
  width: 100%;
  background: ${(props) => props.theme.colors[props.background || 'blue']};
`
