import styled from 'styled-components'
import { keyframes } from 'styled-components'

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`

export const ImgContainer = styled.div`
  display: flex;
  order: 1;
  justify-content: end;

  img {
    width: 100%;
    max-width: 450px;
    animation: ${float} 4s ease-in-out infinite;
  }
  @media (max-width: 768px) {
    order: 0;
    max-width: 300px;
    margin: 24px;
  }
`
