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
    padding: 8px;
    font-size: 18px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: color 0.3s ease;
    color: #fff;
  }
  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 70%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.lightGreenColor};
    transition: transform 0.3s ease;
  }
  &.active a {
    color: ${(props) => props.theme.colors.lightGreenColor};
    font-weight: bold;
  }
  &.active a::after {
    transform: translateX(-50%) scaleX(1);
  }
`
