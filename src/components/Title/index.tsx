import { TitleStyled } from './styles'

type TitleProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  color?: string
  center?: boolean
}

const Title = (props: TitleProps) => (
  <TitleStyled size={props.size} weight={props.weight} color={props.color} center={props.center}>
    {props.children}
  </TitleStyled>
)

export default Title
