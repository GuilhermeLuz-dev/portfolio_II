import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import Nav from '../Nav'
import * as S from './styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <S.HeaderStyled>
      <S.ContainerHeader>
        <S.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </S.MenuToggle>
        <Nav $isOpen={menuOpen} />
      </S.ContainerHeader>
    </S.HeaderStyled>
  )
}

export default Header
