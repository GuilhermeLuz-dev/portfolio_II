import styled from 'styled-components'
import { ButtonStyled } from '../Button/styles'

type Props = {
  background?: string
}

export const CardStyled = styled.li`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 10px;
`

export const CardImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  color: #fff;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`

export const Description = styled.p`
  font-size: 16px;
  margin-top: 16px;
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 24px;
`

export const CardButton = styled(ButtonStyled)<Props>`
  width: 100%;
  font-size: 10px;
  padding: 6px;
  background: ${(props) => (props.background ? props.theme.colors[props.background] : '#1E1E1E')};
`
export const ButtonsTechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-top: auto;
`

export const TechIconsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: end;
  gap: 8px;
`
