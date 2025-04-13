import styled from 'styled-components'

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
  margin-top: 64px;
`
