import Title from '../../components/Title'
import FormContact from '../../components/FormContact'
import * as S from './styles'

const Contacts = () => (
  <S.ContactsStyled>
    <S.ContactContainer>
      <Title color="blueGradient" size="medium" center weight="bold">
        Contato
      </Title>
      <FormContact />
    </S.ContactContainer>
  </S.ContactsStyled>
)

export default Contacts
