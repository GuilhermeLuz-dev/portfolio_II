import Title from '../../components/Title'
import Caroussel from '../../components/Caroussel'
import * as S from './styles'

const Projects = () => (
  <S.SectionProjects>
    <S.ContainerProjects>
      <Title color="pinkGradient" size="medium" weight="bold" center>
        Projetos
      </Title>
      <Caroussel />
    </S.ContainerProjects>
  </S.SectionProjects>
)

export default Projects
