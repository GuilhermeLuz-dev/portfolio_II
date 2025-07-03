import Title from '../Title'
import Icon from '../Icon'
import * as S from './styles'

type CardProjectProps = {
  title: string
  description: string
  image: string
  techs: string[]
  linkRepository?: string
  linkSite?: string
}

const CardProject = ({
  title,
  description,
  image,
  techs,
  linkRepository,
  linkSite,
}: CardProjectProps) => (
  <S.CardStyled>
    <S.ImageContainer>
      <S.CardImage src={image} />
    </S.ImageContainer>
    <S.InfosContainer>
      <Title color="pinkPurpleGradient" size="small" weight="bold">
        {title}
      </Title>
      <S.Description>{description}</S.Description>
    </S.InfosContainer>
    <S.ButtonsTechsContainer>
      <S.ButtonsContainer>
        <S.CardButton background="pinkGradient" href={linkRepository} target="_blank">
          <Icon name="githubIcon" size={16} />
          Repositório
        </S.CardButton>
        <S.CardButton background="blueGradient" href={linkSite} target="_blank">
          <Icon name="globeIcon" size={16} />
          Site
        </S.CardButton>
      </S.ButtonsContainer>
      <S.TechIconsContainer>
        {techs.length > 0
          ? techs.map((tech) => <Icon key={tech} name={tech} />)
          : 'Sem tecnologias'}
      </S.TechIconsContainer>
    </S.ButtonsTechsContainer>
  </S.CardStyled>
)

export default CardProject
