import Title from '../Title'
import Icon from '../Icon'
import * as S from './styles'

type CardProjectProps = {
  title: string
  description: string
  image: string
  techs: string[]
}

const CardProject = ({ title, description, image, techs }: CardProjectProps) => (
  <S.CardStyled>
    <S.CardImage src={image} />
    <S.InfosContainer>
      <Title color="pinkPorpleGradient" size="small" weight="bold">
        {title}
      </Title>
      <S.Description>{description}</S.Description>
      <S.ButtonsContainer>
        <S.CardButton background="PinkGradient">
          <Icon name="githubIcon" size={16} />
          Repositório
        </S.CardButton>
        <S.CardButton background="BlueGradient">
          <Icon name="globeIcon" size={16} />
          Site
        </S.CardButton>
      </S.ButtonsContainer>
      <S.TechIconsContainer>
        {techs.map((tech) => (
          <Icon key={tech} name={tech} />
        ))}
      </S.TechIconsContainer>
    </S.InfosContainer>
  </S.CardStyled>
)

export default CardProject
