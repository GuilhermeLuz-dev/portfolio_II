import { SectionHero } from './styles'
import HeroText from '../../components/HeroText'
import HeroImage from '../../components/HeroImage'
import { Container } from '../../styles'

const Hero = () => (
  <Container>
    <SectionHero>
      <HeroText />
      <HeroImage />
    </SectionHero>
  </Container>
)

export default Hero
