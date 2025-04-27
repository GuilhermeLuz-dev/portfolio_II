import Icon from '../Icon'

import * as S from './styles'

const Caroussel = () => (
  <S.CarrousselContainer>
    <S.ImageContainer>
      <S.CarrousselImage src="/assets/images/456498.jpg" alt="Imagem do projeto" />
    </S.ImageContainer>
    <S.CarrousselInfo>
      <S.TitleCarrousel size="small" weight="bold" color="pinkPorpleGradient" center={false}>
        Titulo do projeto
      </S.TitleCarrousel>
      <S.P>Descrição do projeto</S.P>
      <S.ButtonContainer>
        <S.ButtonProject background="PinkColor">
          <Icon name="githubIcon" size={16} />
          Build
        </S.ButtonProject>
        <S.ButtonProject background="PurpleColor">
          <Icon name="globeIcon" size={16} />
          Repositorio
        </S.ButtonProject>
      </S.ButtonContainer>

      <S.TechIconsContainer>
        <Icon name="css3Icon" size={24} />
        <Icon name="htmlIcon" size={24} />
        <Icon name="jsIcon" size={24} />
      </S.TechIconsContainer>
    </S.CarrousselInfo>
  </S.CarrousselContainer>
)

export default Caroussel
