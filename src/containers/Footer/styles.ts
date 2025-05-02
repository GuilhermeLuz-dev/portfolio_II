import styled from 'styled-components'

export const FooterStyled = styled.div`
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`
export const P = styled.p`
  margin-bottom: 16px;
`

export const HighlightedText = styled.span`
  background: ${(props) => props.theme.colors.greenGradient};
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`
