import styled from 'styled-components'

export const ImgContainer = styled.div`
  display: flex;
  order: 1;
  justify-content: end;

  img {
    width: 100%;
    max-width: 450px;
  }
  @media (max-width: 768px) {
    order: 0;
    max-width: 300px;
    margin: 24px;
  }
`
