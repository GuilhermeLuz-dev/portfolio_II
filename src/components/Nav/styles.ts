import styled from 'styled-components'

type NavProps = {
  $isOpen: boolean
}

export const Nav = styled.nav<NavProps>`
  display: flex;
  gap: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: ${(props) => (props.$isOpen ? '20px' : '0')};
    height: ${(props) => (props.$isOpen ? '186px' : '0')};
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
`

export const NavItem = styled.li`
  a {
    font-size: 20px;
    color: #fff;
  }
`
