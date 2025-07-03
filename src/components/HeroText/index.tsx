import Icon from '../Icon'
import * as S from './styles'

const HeroText = () => (
  <S.TextContainer>
    <S.Title>
      Olá, Sou <S.HighlightedText>Guilherme Luz</S.HighlightedText> Desenvolvedor Front End
    </S.Title>
    <S.Subtitle>Apaixonado por criar interfaces modernas, funcionais e responsivas.</S.Subtitle>
    <S.ButtonContainer>
      <S.ButtonHero
        as="a"
        href="../assets/cv/curriculo_2025.pdf"
        download
        background="greenGradient"
      >
        <Icon name="downloadingIcon" size={16} />
        Baixar CV
      </S.ButtonHero>
      <S.ButtonHero
        background="pinkGradient"
        href="https://github.com/GuilhermeLuz-dev"
        target="_blank"
      >
        <Icon name="githubIcon" size={16} />
        GitHub
      </S.ButtonHero>
      <S.ButtonHero
        background="blueGradient"
        href="https://www.linkedin.com/in/guilherme-luz-rocha-3a1511234/"
        target="_blank"
      >
        <Icon name="linkedinIcon" size={16} />
        Likedin
      </S.ButtonHero>
    </S.ButtonContainer>
  </S.TextContainer>
)

export default HeroText
