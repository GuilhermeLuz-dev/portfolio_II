import styled from 'styled-components'
import { TitleStyled } from '../Title/styles'
import { ButtonStyled } from '../Button/styles'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  color: #fff;
  margin-top: 24px;
`

export const TitleForm = styled(TitleStyled)`
  margin-bottom: 24px;
`

export const Input = styled.input`
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  padding: 10px;
`

export const Label = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`
export const TextArea = styled.textarea`
  padding: 10px;
  resize: none;
  border-radius: 10px;
  height: 100px;
  margin-bottom: 24px;
`

export const BtnSubmit = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  width: 100%;
  background: ${({ theme }) => theme.colors.blueGradient};
`
