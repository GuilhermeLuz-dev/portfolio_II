import Icon from '../Icon'
import * as S from './styles'

const HeroText = () => (
  <S.TextContainer>
    <S.Title>
      Olá, Sou <S.HighlightedText>Guilherme Luz</S.HighlightedText> Desenvolvedor Front End
    </S.Title>
    <S.Subtitle>Transformando ideias em interfaces incríveis.</S.Subtitle>
    <S.ButtonContainer>
      <S.ButtonHero background="greenGradient">
        <Icon name="downloadingIcon" size={16} />
        Baixar CV
      </S.ButtonHero>
      <S.ButtonHero background="pinkGradient">
        <Icon name="githubIcon" size={16} />
        GitHub
      </S.ButtonHero>
      <S.ButtonHero background="blueGradient">
        <Icon name="linkedinIcon" size={16} />
        Likedin
      </S.ButtonHero>
    </S.ButtonContainer>
  </S.TextContainer>
)

export default HeroText
