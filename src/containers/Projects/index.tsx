import { forwardRef } from 'react'
import Title from '../../components/Title'
import Caroussel from '../../components/Caroussel'
import Filter from '../../components/Filter'
import CardProject from '../../components/CardProject'
import * as S from './styles'

const Projects = forwardRef<HTMLElement>((props, ref) => (
  <S.SectionProjects ref={ref} {...props}>
    <S.ContainerProjects>
      <Title color="pinkPurpleGradient" size="medium" weight="bold" center={true}>
        Projetos
      </Title>
      <Caroussel />
      <Filter />
      <S.CardsContainer>
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
        <CardProject
          title="Titulo"
          description="Descrição do projeto"
          image="./assets/images/456498.jpg"
          techs={['css3Icon', 'htmlIcon', 'jsIcon']}
        />
      </S.CardsContainer>
    </S.ContainerProjects>
  </S.SectionProjects>
))

Projects.displayName = 'Projects'

export default Projects
