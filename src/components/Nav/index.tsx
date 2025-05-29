import * as S from './styles'

type NavProps = {
  $isOpen: boolean
  activeSection: string
}

const navItem = [
  { id: 'heroRef', label: 'Início' },
  { id: 'projectsRef', label: 'Projetos' },
  { id: 'aboutRef', label: 'Sobre' },
  { id: 'contactsRef', label: 'Contatos' },
]

const Nav = (props: NavProps) => {
  return (
    <S.Nav $isOpen={props.$isOpen}>
      {navItem.map((item) => (
        <S.NavItem key={item.id} className={props.activeSection == item.id ? 'active' : ''}>
          <a href={`#${item.id}`}>{item.label}</a>
        </S.NavItem>
      ))}
    </S.Nav>
  )
}

export default Nav
