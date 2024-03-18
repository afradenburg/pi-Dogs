import React from "react";
import { Link } from "react-router-dom";
import { Container } from '../styled/containerStyled';
import { Title, Button } from '../styled/landinPageStyled';

export const LandinPage = () => {
  return (
    <Container style={{marginTop: "40px"}}>
      <Title>INFO-DOGS</Title>
      <p>Bienvenido a nuestra página dedicada a los perros. Aquí encontrarás información interesante, imágenes adorables y podras crear a tus mascotas peludas.</p>
      <Link to={"/home"}>
        <Button>Ingresar</Button>
      </Link>
      <img style={{width: "100%", marginTop: "20px", borderRadius: "50px"}} src="https://www.telemundo.com/sites/nbcutelemundo/files/images/gallery/2017/07/05/perro-de-raza-samoyedo-sobre-el-cesped-3.jpg"/>
    </Container>
  );
};