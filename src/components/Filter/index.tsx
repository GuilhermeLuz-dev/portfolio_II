import { FilterStyled } from './styles'
type FilterProps = {
  value?: string
  onChange: (value: string) => void
}

const Filter = ({ value, onChange }: FilterProps) => (
  <FilterStyled value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="todos">Todos</option>
    <option value="landingpage">LandinPage</option>
    <option value="website">Website</option>
    <option value="jogos">jogos</option>
  </FilterStyled>
)

export default Filter
