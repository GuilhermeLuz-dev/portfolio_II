import styled from 'styled-components'
import { Container } from '../../styles'

export const SectionHero = styled.section`
  border-bottom: 3px solid #333;
  margin-bottom: 48px;
`
export const ContainerHero = styled(Container)`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
