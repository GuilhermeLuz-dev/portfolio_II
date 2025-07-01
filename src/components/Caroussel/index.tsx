import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import Icon from '../Icon'

import * as S from './styles'

const Caroussel = () => (
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    slidesPerView={1}
  >
    <SwiperSlide>
      <S.CarrousselContainer>
        <S.ImageContainer>
          <S.CarrousselImage src="/assets/images/imageForHero.jpg" alt="Imagem do projeto" />
        </S.ImageContainer>
        <S.CarrousselInfo>
          <S.TitleCarrousel size="small" weight="bold" color="pinkPurpleGradient" center={false}>
            Titulo do projeto
          </S.TitleCarrousel>
          <S.P>Descrição do projeto</S.P>
          <S.ButtonContainer>
            <S.ButtonProject background="pinkColor">
              <Icon name="githubIcon" size={16} />
              Build
            </S.ButtonProject>
            <S.ButtonProject background="purpleColor">
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
    </SwiperSlide>
    <SwiperSlide>
      <S.CarrousselContainer>
        <S.ImageContainer>
          <S.CarrousselImage src="/assets/images/456498.jpg" alt="Imagem do projeto" />
        </S.ImageContainer>
        <S.CarrousselInfo>
          <S.TitleCarrousel size="small" weight="bold" color="pinkPurpleGradient" center={false}>
            Titulo do projeto
          </S.TitleCarrousel>
          <S.P>Descrição do projeto</S.P>
          <S.ButtonContainer>
            <S.ButtonProject background="pinkColor">
              <Icon name="githubIcon" size={16} />
              Build
            </S.ButtonProject>
            <S.ButtonProject background="purpleColor">
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
    </SwiperSlide>
    <SwiperSlide>
      <S.CarrousselContainer>
        <S.ImageContainer>
          <S.CarrousselImage src="/assets/images/imageForHero.jpg" alt="Imagem do projeto" />
        </S.ImageContainer>
        <S.CarrousselInfo>
          <S.TitleCarrousel size="small" weight="bold" color="pinkPurpleGradient" center={false}>
            Titulo do projeto
          </S.TitleCarrousel>
          <S.P>Descrição do projeto</S.P>
          <S.ButtonContainer>
            <S.ButtonProject background="pinkColor">
              <Icon name="githubIcon" size={16} />
              Build
            </S.ButtonProject>
            <S.ButtonProject background="purpleColor">
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
    </SwiperSlide>
  </Swiper>
)

export default Caroussel
