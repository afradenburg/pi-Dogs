import styled from "styled-components";


export const HeaderApp = styled.header`
  
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 1%;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
  /* Estilos para pantallas más pequeñas */
  padding: 2% 1%;
  width: 100%;
}

@media screen and (max-width: 480px) {
  /* Estilos para pantallas aún más pequeñas */
  padding: 1% 0;
}
`;
