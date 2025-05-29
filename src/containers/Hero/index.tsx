import * as S from './styles'
import { forwardRef } from 'react'
import HeroText from '../../components/HeroText'
import HeroImage from '../../components/HeroImage'

const Hero = forwardRef<HTMLElement>((props, ref) => (
  <S.SectionHero ref={ref} {...props}>
    <S.ContainerHero>
      <HeroText />
      <HeroImage />
    </S.ContainerHero>
  </S.SectionHero>
))

Hero.displayName = 'Hero'
export default Hero
