import Title from '../Title'
import * as S from './styles'
const Caroussel = () => (
  <S.CarrousselContainer>
    <S.ImageContainer>
      <S.CarrousselImage src="/assets/images/456498.jpg" alt="Imagem do projeto" />
    </S.ImageContainer>
    <S.CarrousselInfo>
      <Title size="small" weight="bold" color="pinkGradient">
        Titulo do projeto
      </Title>
      <p>Descrição do projeto</p>
      <div>
        <button>Build</button>
        <button>Repositorio</button>
      </div>
      <div>
        <ul>
          <li>react</li>
          <li>typescript</li>
          <li>Firebase</li>
        </ul>
      </div>
    </S.CarrousselInfo>
  </S.CarrousselContainer>
)

export default Caroussel
