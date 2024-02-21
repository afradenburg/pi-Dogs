import styled from "styled-components";

export const Pagin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Cambiar a dirección de columna para dispositivos móviles */
  align-items: center; /* Centrar verticalmente los elementos */
  width: 100%;
  max-width: 100%; /* Cambiado a 100% para adaptarse a dispositivos móviles */
  margin-left: 10px; /* Ajustado el margen izquierdo para dispositivos móviles */
  
  & > * {
    width: 100%; /* Ajustar el ancho de los elementos al 100% */
    margin-bottom: 10px; /* Agregar margen inferior para separar los elementos */
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(10, 1fr);
    
  }

  @media (min-width: 933px) {
    flex-direction: row; /* Cambiar de nuevo a dirección de fila para pantallas más grandes */
    flex-wrap: wrap; /* Permitir que los elementos se envuelvan en filas */
    justify-content: space-between; /* Distribuir los elementos a los extremos */
  }

  button {
    background-color: gray; /* Color de fondo del botón */
    color: white; /* Color del texto del botón */
    padding: 5px 10px; /* Espaciado interno del botón */
    border: none; /* Quitar borde del botón */
    cursor: pointer; /* Cambiar cursor al pasar sobre el botón */
    max-width: 30px;
  }
`;