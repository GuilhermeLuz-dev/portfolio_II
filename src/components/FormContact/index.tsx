import Icon from '../Icon'

import * as S from './styles'

const FormContact = () => (
  <S.FormStyled>
    <S.TitleForm size="small" center color="blueGradient">
      Vamos Conversar?
    </S.TitleForm>
    <S.Label htmlFor="">
      <Icon name="userIcon" size={20} /> Nome:
    </S.Label>
    <S.Input type="text" name="" id="" placeholder="Digite seu nome..." />
    <S.Label htmlFor="">
      <Icon name="emailIcon" size={20} /> Email:
    </S.Label>
    <S.Input type="email" name="" id="" placeholder="Digite seu email..." />
    <S.Label htmlFor="">
      <Icon name="chatIcon" size={20} /> Mensagem:
    </S.Label>
    <S.TextArea name="" id="" placeholder="Digite a mensagem..."></S.TextArea>
    <S.BtnSubmit>
      <Icon name="sendIcon" size={18} /> Enviar
    </S.BtnSubmit>
  </S.FormStyled>
)

export default FormContact
