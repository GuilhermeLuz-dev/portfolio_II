import * as S from './styles'

const Nav = () => {
  return (
    <nav>
      <S.Ul>
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
      </S.Ul>
    </nav>
  )
}

export default Nav
