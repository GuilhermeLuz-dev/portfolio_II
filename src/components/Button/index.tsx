import { ButtonContainer } from './styles'

type Props = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  color?: 'pinkGradient' | 'blueGradient' | 'greenGradient'
}

const Button = (props: Props) => (
  <ButtonContainer size={props.size} color={props.color}>
    {props.children}
  </ButtonContainer>
)

export default Button
