import { Title } from '../../styles'
import Caroussel from '../../components/Caroussel'
import * as S from './styles'

const Projects = () => (
  <S.SectionProjects>
    <S.ContainerProjects>
      <Title color="pinkGradient">Projetos</Title>
      <Caroussel></Caroussel>
    </S.ContainerProjects>
  </S.SectionProjects>
)

export default Projects
