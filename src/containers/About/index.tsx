import SoftSkillTag from '../../components/SoftSkillTag'
import Title from '../../components/Title'

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
          <S.TagsContainer>
            <SoftSkillTag color="PinkColor">Liderança</SoftSkillTag>
            <SoftSkillTag>Curiosidade</SoftSkillTag>
            <SoftSkillTag color="GreenColor">Intraempreendedor</SoftSkillTag>
            <SoftSkillTag color="PurpleColor">Intraempreendedor</SoftSkillTag>
            <SoftSkillTag color="PinkColor">Autodidata</SoftSkillTag>
          </S.TagsContainer>
        </S.StackAndSkillsContainer>
        <S.StackAndSkillsContainer>
          <Title color="greenGradient" size="small">
            Tecnologias:
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo porro ratione quidem vero
            veniam adipisci, laudantium deserunt est voluptatum iure, laborum nostrum ipsam debitis
            cupiditate facilis, mollitia animi quia fuga.
          </p>
        </S.StackAndSkillsContainer>
      </S.SkillsContainer>
    </S.AboutContainer>
  </S.AboutStyled>
)
export default About
