import styled from 'styled-components'
import { Container } from '../../styles'

type Props = {
  gap?: number
}

export const AboutStyled = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #333;
`

export const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 48px;
  margin-bottom: 48px;
`
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const P = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 16px;
  line-height: 24px;
`

export const StackAndSkillsContainer = styled.div`
  padding: 24px;
  border: 2px solid #333;
  border-radius: 5px;
`

export const SkillsContent = styled.div<Props>`
  display: flex;
  gap: ${(props) => (props.gap ? props.gap : 8)}px;
  flex-wrap: wrap;
  margin-top: 16px;
`
