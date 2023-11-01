import React from "react";
import { Link } from "react-router-dom";
import { Container } from '../styled/containerStyled';
import { Title, Button } from '../styled/landinPageStyled';



export const LandinPage = () => {
  return (

    <Container>
      <Title>All Dogs</Title>
      <Link to={"/home"}>
        <Button>Ingresar</Button>
      </Link>
    </Container>
  );
};
 