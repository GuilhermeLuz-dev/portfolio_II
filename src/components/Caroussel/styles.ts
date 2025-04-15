import styled from 'styled-components'

export const CarrousselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  width: 100%;
  height: 300px;
  margin-top: 48px;
  background-color: #1e1e1e;
  border-radius: 10px;
`
export const ImageContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(30, 30, 30, 0) 0%, rgb(30, 30, 30) 100%);
    width: 100%;
    height: 100%;
    border-radius: 10px;
    z-index: 1;
  }
`

export const CarrousselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

export const CarrousselInfo = styled.div`
  padding: 32px 24px;
`
