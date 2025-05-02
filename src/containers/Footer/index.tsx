import Icon from '../../components/Icon'
import * as S from './styles'

const Footer = () => (
  <S.FooterStyled>
    <S.P>
      Product by <S.HighlightedText>Guilherme Luz</S.HighlightedText>
    </S.P>
    <S.IconsContainer>
      <Icon name="githubIcon" size={20} />
      <Icon name="linkedinIcon" size={20} />
      <Icon name="instagramIcon" size={20} />
    </S.IconsContainer>
    <S.IconsContainer>
      <Icon name="reactIcon" size={20} />
      <Icon name="typescriptIcon" size={20} />
      <Icon name="css3Icon" size={20} />
      <Icon name="htmlIcon" size={20} />
    </S.IconsContainer>
  </S.FooterStyled>
)

export default Footer
