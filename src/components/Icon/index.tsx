import { useTheme } from 'styled-components'
import { IconStyled } from './styles'

type IconProps = {
  name: string
  size?: number
}

const Icon = (props: IconProps) => {
  const theme = useTheme()
  const iconSrc = theme.icons[props.name]
  return <IconStyled src={iconSrc} size={props.size} />
}

export default Icon
