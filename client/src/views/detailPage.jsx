import React from 'react'
import { useEffect }  from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetail } from '../redux/actions';
import { Button } from "../styled/button";
import {
  CardStyle,
  Content,
  ID,
  Image,
  Subtitle,
  Title,
} from "../styled/cardStyled";

export const DetailPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const dogDetail = useSelector((state)=>state.DogsCopy);
  const { name, image,  height, weight, temperament, life } = dogDetail;
  
  console.log(id)
  useEffect(()=>{
    dispatch(getDogDetail(id));
  },[dispatch, id])
  
  // console.log(dogDetail)
  return (
    <div style={{display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "150px",
      backgroundColor: "aliceblue",
      borderRadius: "20px",
      border: "5px",
      width: "100%",
      height: "100%",
      padding: "10px",}}>    
        <Link to={"/home"}>
          <Button>volver</Button>
        </Link>
        <h1>Hola soy {name}</h1>
        <Subtitle>Tengo una altura entre los {height} centimetros</Subtitle>
        <Subtitle>Mi peso puede ser entre {weight} Kg</Subtitle>
        <Subtitle>Mi esperanza de vida es de : {life} años</Subtitle>
        <Subtitle>Me caracterizo por ser: {temperament}</Subtitle>
        <Image style={{borderRadius: "15px"}}src={image} alt={name} />
    </div>
  );
}
