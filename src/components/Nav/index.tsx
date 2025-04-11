import * as S from './styles'

type NavProps = {
  $isOpen: boolean
}

const Nav = (props: NavProps) => {
  return (
    <S.Nav $isOpen={props.$isOpen}>
      <S.NavItem>
        <a href="#home">Início</a>
      </S.NavItem>
      <S.NavItem>
        <a href="#sobre">Sobre</a>
      </S.NavItem>
      <S.NavItem>
        <a href="#servicos">Projetos</a>
      </S.NavItem>
      <S.NavItem>
        <a href="#contato">Contato</a>
      </S.NavItem>
    </S.Nav>
  )
}

export default Nav
