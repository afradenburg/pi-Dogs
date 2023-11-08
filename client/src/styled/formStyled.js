import styled from "styled-components";
import fondo from "../assets/form.jpg"

export const FormLogin = styled.form`
 
  background-color: black;
  background-position: center;
  background-image: url(${fondo});
  background-size: cover;
  display: flex;
  margin: 10% 0;
  padding: 4% 4%;
  max-width: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-orientation: initial;
  line-height: 2;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 7px 5px 5px blueviolet;
  width: 500%;
  
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
