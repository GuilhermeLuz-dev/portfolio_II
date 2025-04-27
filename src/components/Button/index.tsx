import { ButtonStyled } from './styles'

type Props = {
  children: React.ReactNode
}

const Button = (props: Props) => <ButtonStyled>{props.children}</ButtonStyled>

export default Button
