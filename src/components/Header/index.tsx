import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import Nav from '../Nav'
import * as S from './styles'

type HeaderProps = {
  transparent?: boolean
  activeSection: string
}

const Header = ({ transparent = false, activeSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <S.HeaderStyled $transparent={transparent}>
      <S.ContainerHeader>
        <S.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </S.MenuToggle>
        <Nav $isOpen={menuOpen} activeSection={activeSection} />
      </S.ContainerHeader>
    </S.HeaderStyled>
  )
}

export default Header
