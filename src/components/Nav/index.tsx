import { Ul, NavItem } from './styles'

const Nav = () => {
  return (
    <nav>
      <Ul>
        <NavItem>
          <a href="#home">Início</a>
        </NavItem>
        <NavItem>
          <a href="#sobre">Sobre</a>
        </NavItem>
        <NavItem>
          <a href="#servicos">Projetos</a>
        </NavItem>
        <NavItem>
          <a href="#contato">Contato</a>
        </NavItem>
      </Ul>
    </nav>
  )
}

export default Nav
