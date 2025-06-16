import { FilterStyled } from './styles'
type FilterProps = {
  value?: string
  onChange: (value: string) => void
}

const Filter = ({ value, onChange }: FilterProps) => (
  <FilterStyled value={value} onChange={(e) => onChange(e.target.value)}>
    <option value="Todos">Todos</option>
    <option value="LandingPage">LandinPage</option>
    <option value="ecommerce">ecommerce</option>
    <option value="jogos">jogos</option>
  </FilterStyled>
)

export default Filter
