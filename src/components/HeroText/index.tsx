import { Github, Linkedin, Download } from 'lucide-react'

import Button from '../Button'
import * as S from './styles'

const HeroText = () => (
  <S.TextContainer>
    <S.Title>
      Olá, Sou <S.HighlightedText>Guilherme Luz</S.HighlightedText> Desenvolvedor Front End
    </S.Title>
    <S.Subtitle>Transformando ideias em interfaces incríveis.</S.Subtitle>
    <S.ButtonContainer>
      <Button size="medium" color="greenGradient">
        <Download size={20} />
        Baixar CV
      </Button>
      <Button size="medium" color="pinkGradient">
        <Github size={20} />
        GitHub
      </Button>
      <Button size="medium" color="blueGradient">
        <Linkedin size={20} />
        Likedin
      </Button>
    </S.ButtonContainer>
  </S.TextContainer>
)

export default HeroText
