import { forwardRef } from 'react'
import SoftSkillTag from '../../components/SoftSkillTag'
import Title from '../../components/Title'
import Icon from '../../components/Icon'

import * as S from './styles'

const About = forwardRef<HTMLElement>((props, ref) => (
  <S.AboutStyled ref={ref} {...props}>
    <Title color="greenGradient" size="medium" weight="bold" center>
      Sobre
    </Title>
    <S.AboutContainer>
      <S.StackAndSkillsContainer>
        <Title color="greenGradient" size="small">
          Quem Sou:
        </Title>
        <S.P>
          Olá! Me chamo Guilherme Luz, sou estudante de tecnologia com mais de dois anos de
          dedicação na área, com foco em desenvolvimento front-end e interesse também em back-end.
          Sou graduado em Análise e Desenvolvimento de Sistemas, atualmente curso Sistemas de
          Informação e estou realizando um curso profissionalizante de Engenheiro Front-End,
          buscando aprofundar ainda mais meus conhecimentos técnicos. Estou em constante evolução,
          sempre aprendendo novas ferramentas, aprimorando minhas habilidades e me preparando para
          os desafios do mercado. No momento, estou em busca de uma oportunidade de estágio para
          aplicar meus conhecimentos, ganhar experiência prática e seguir crescendo como
          desenvolvedor.
        </S.P>
      </S.StackAndSkillsContainer>
      <S.SkillsContainer>
        <S.StackAndSkillsContainer>
          <Title color="greenGradient" size="small">
            Minhas Soft Skills:
          </Title>
          <S.SkillsContent>
            <SoftSkillTag color="orangeColor">Autodidata</SoftSkillTag>
            <SoftSkillTag color="pinkColor">Relacionamento Interpessoal</SoftSkillTag>
            <SoftSkillTag>Proatividade</SoftSkillTag>
            <SoftSkillTag color="greenColor">Aprendizado contínuo</SoftSkillTag>
            <SoftSkillTag color="lightGreenColor">Resiliência</SoftSkillTag>
            <SoftSkillTag color="orangeColor">Trabalho em equipe</SoftSkillTag>
            <SoftSkillTag color="pinkColor">Adaptabilidade</SoftSkillTag>
            <SoftSkillTag color="greenColor">Pensamento Crítico</SoftSkillTag>
            <SoftSkillTag color="orangeColor">Empatia</SoftSkillTag>
            <SoftSkillTag color="lightGreenColor">Autodisciplina</SoftSkillTag>
          </S.SkillsContent>
        </S.StackAndSkillsContainer>
        <S.StackAndSkillsContainer>
          <Title color="greenGradient" size="small">
            Minhas Hard Skills:
          </Title>
          <S.SkillsContent gap={16}>
            <Icon name="jsIcon" size={32} />
            <Icon name="htmlIcon" size={32} />
            <Icon name="cssIcon" size={32} />
            <Icon name="reactIcon" size={32} />
            <Icon name="typescriptIcon" size={32} />
            <Icon name="bootstrapIcon" size={32} />
            <Icon name="gitIcon" size={32} />
            <Icon name="githubIcon" size={32} />
            <Icon name="sassIcon" size={32} />
            <Icon name="sqlIcon" size={32} />
            <Icon name="firebaseIcon" size={32} />
            <Icon name="supabaseIcon" size={32} />
            <Icon name="nodejsIcon" size={32} />
          </S.SkillsContent>
        </S.StackAndSkillsContainer>
      </S.SkillsContainer>
    </S.AboutContainer>
  </S.AboutStyled>
))

About.displayName = 'About'
export default About
