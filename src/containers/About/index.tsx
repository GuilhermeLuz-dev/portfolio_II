import SoftSkillTag from '../../components/SoftSkillTag'
import Title from '../../components/Title'
import Icon from '../../components/Icon'

import * as S from './styles'

const About = () => (
  <S.AboutStyled>
    <Title color="greenGradient" size="medium" weight="bold" center>
      Sobre
    </Title>
    <S.AboutContainer>
      <S.StackAndSkillsContainer>
        <Title color="greenGradient" size="small">
          Quem Sou:
        </Title>
        <S.P>
          Olá! Me chamo Guilherme e sou apaixonado por tecnologia. Atualmente, estou focado no
          desenvolvimento front-end, mas também tenho interesse em back-end. Sou graduado em Análise
          e Desenvolvimento de Sistemas e, atualmente, curso Sistemas de Informação, sempre buscando
          aprender e evoluir na área de tecnologia.
        </S.P>
      </S.StackAndSkillsContainer>
      <S.SkillsContainer>
        <S.StackAndSkillsContainer>
          <Title color="greenGradient" size="small">
            Soft Skills:
          </Title>
          <S.SkillsContent>
            <SoftSkillTag color="pinkColor">Liderança</SoftSkillTag>
            <SoftSkillTag>Curiosidade</SoftSkillTag>
            <SoftSkillTag color="greenColor">Intraempreendedor</SoftSkillTag>
            <SoftSkillTag color="lightGreenColor">Intraempreendedor</SoftSkillTag>
            <SoftSkillTag color="orangeColor">Autodidata</SoftSkillTag>
          </S.SkillsContent>
        </S.StackAndSkillsContainer>
        <S.StackAndSkillsContainer>
          <Title color="greenGradient" size="small">
            Tecnologias:
          </Title>
          <S.SkillsContent gap={16}>
            <Icon name="jsIcon" size={32} />
            <Icon name="htmlIcon" size={32} />
            <Icon name="css3Icon" size={32} />
            <Icon name="reactIcon" size={32} />
            <Icon name="typescriptIcon" size={32} />
          </S.SkillsContent>
        </S.StackAndSkillsContainer>
      </S.SkillsContainer>
    </S.AboutContainer>
  </S.AboutStyled>
)
export default About
