import styled, { keyframes } from 'styled-components';

const neonAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px yellow;
  }
  50% {
    box-shadow: 0 0 20px blue, 0 0 30px #00ff00;
  }
  100% {
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const InputStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  color: black;
  background-color: white;
  box-shadow: 0 0 10px #00ff00;
  animation: ${neonAnimation} 2s linear infinite;
  transition: box-shadow 0.3s ease;
  width: 100%;

  &:hover {
    box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
  }

  &:focus {
    box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
  }

  @media screen and (max-width: 768px) {
  /* Estilos para pantallas más pequeñas */
  padding: 2% 1%;
  width: 100%;
  max-width: 300px;
}

@media screen and (max-width: 480px) {
  /* Estilos para pantallas aún más pequeñas */
  padding: 1% 0;
}
`;

