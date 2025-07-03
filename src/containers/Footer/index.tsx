import Icon from '../../components/Icon'
import * as S from './styles'

const Footer = () => (
  <S.FooterStyled>
    <S.P>
      Product by <S.HighlightedText>Guilherme Luz</S.HighlightedText>
    </S.P>
    <S.IconsContainer>
      <a href="https://github.com/GuilhermeLuz-dev" target="_blank" rel="noopener noreferrer">
        <Icon name="githubIcon" size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/guilherme-luz-rocha-3a1511234/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="linkedinIcon" size={20} />
      </a>
      <a href="https://www.instagram.com/guilhermeluzr_/" target="_blank" rel="noopener noreferrer">
        <Icon name="instagramIcon" size={20} />
      </a>
    </S.IconsContainer>
    <S.IconsContainer>
      <Icon name="reactIcon" size={20} />
      <Icon name="typescriptIcon" size={20} />
      <Icon name="cssIcon" size={20} />
      <Icon name="htmlIcon" size={20} />
      <Icon name="supabaseIcon" size={20} />
    </S.IconsContainer>
  </S.FooterStyled>
)

export default Footer
