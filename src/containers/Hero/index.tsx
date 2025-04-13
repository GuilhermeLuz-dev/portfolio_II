import * as S from './styles'
import HeroText from '../../components/HeroText'
import HeroImage from '../../components/HeroImage'

const Hero = () => (
  <S.SectionHero>
    <S.ContainerHero>
      <HeroText />
      <HeroImage />
    </S.ContainerHero>
  </S.SectionHero>
)

export default Hero
