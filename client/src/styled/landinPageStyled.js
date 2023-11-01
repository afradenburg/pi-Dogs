import styled from 'styled-components';
import huellas from '../assets/huellas.jpg'


export const ContainerLanding = styled.div`
  background-image: url(${huellas});
  background-size: cover; // para que la imagen se ajuste al tamaño del contenedor
  background-position: center; // para centrar la imagen en el contenedor
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  & > * {
    flex: 1 1 200px;
  }
`;

  export const Title = styled.h1`
    color: black;
    font-size: 24px;
    text-align: center;
  `;

  export const Button = styled.button`
    background-color: #f2f2f2;
    color: #333;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  `;