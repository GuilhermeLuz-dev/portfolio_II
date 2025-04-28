import { TagStyled } from './styles'

type TagProps = {
  children?: React.ReactNode
  color?: string
}

const SoftSkillTag = (props: TagProps) => (
  <TagStyled color={props.color}>{props.children}</TagStyled>
)
export default SoftSkillTag
