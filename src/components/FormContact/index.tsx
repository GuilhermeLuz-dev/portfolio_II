import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import Icon from '../Icon'

import * as S from './styles'

const FormContact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [msgResult, setMsgResult] = useState('Enviando mensagem...')
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    setMsgResult('Enviando mensagem...')
    setIsLoading(true)
    if (!formRef.current) return
    emailjs
      .sendForm('service_v53y8j9', 'template_1uiierd', formRef.current, 'CGzMrr3LxJVfFAocM')
      .then(
        () => {
          setMsgResult('Mensagem enviada com sucesso!')
          setTimeout(() => {
            setIsLoading(false)
          }, 3000)
        },
        (error) => {
          setMsgResult(`Erro ao enviar mensagem: ${error.text}`)
          setTimeout(() => {
            setIsLoading(false)
            setIsLoading(false)
          }, 3000)
        }
      )
  }
  return (
    <S.FormStyled ref={formRef} onSubmit={sendEmail}>
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
      <S.TextArea name="message" id="" placeholder="Digite a mensagem..."></S.TextArea>
      <S.BtnSubmit onClick={sendEmail} type="submit">
        <Icon name="sendIcon" size={18} /> Enviar
      </S.BtnSubmit>
      {isLoading ? <S.Feedback>{msgResult}</S.Feedback> : ''}
    </S.FormStyled>
  )
}

export default FormContact
