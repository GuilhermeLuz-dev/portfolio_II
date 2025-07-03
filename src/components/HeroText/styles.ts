import styled from 'styled-components'

import { ButtonStyled } from '../Button/styles'

type Props = {
  background?: string
}
export const TextContainer = styled.div`
  order: 0;
  @media (max-width: 768px) {
    order: 1;
  }
`

export const Title = styled.p`
  color: #fff;
  font-size: 40px;
  margin-bottom: 24px;
`

export const HighlightedText = styled.span`
  font-weight: bold;
  background: none;
  background-image: linear-gradient(90deg, #00c86f, #00ffcc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.p`
  color: #fff;
  font-size: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1%;
  margin-top: 64px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`
export const ButtonHero = styled(ButtonStyled)<Props>`
  width: 32.66%;
  background: ${(props) => props.theme.colors[props.background || 'blue']};
  transition:
    background 0.3s,
    box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 8px 3px #fff5;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
