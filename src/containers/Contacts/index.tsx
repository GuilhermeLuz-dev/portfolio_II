import { forwardRef } from 'react'
import Title from '../../components/Title'
import FormContact from '../../components/FormContact'
import * as S from './styles'

const Contacts = forwardRef<HTMLElement>((props, ref) => (
  <S.ContactsStyled ref={ref} {...props}>
    <S.ContactContainer>
      <Title color="blueGradient" size="medium" center weight="bold">
        Contato
      </Title>
      <FormContact />
    </S.ContactContainer>
  </S.ContactsStyled>
))

Contacts.displayName = 'Contacts'

export default Contacts
