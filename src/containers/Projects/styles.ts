import styled from 'styled-components'
import { Container } from '../../styles'

export const SectionProjects = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #333;
`

export const ContainerProjects = styled(Container)`
  displat: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
`
