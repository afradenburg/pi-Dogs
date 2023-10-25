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
  
  console.log(dogDetail)
  return (
    <Content>
      <CardStyle>
        <Link to={"/home"}>
          <Button>volver</Button>
        </Link>
        <Title>{name}</Title>
        <Subtitle>altura: {height} cm</Subtitle>
        <Subtitle>peso: {weight} Kg</Subtitle>
        <Subtitle>vida: {life}</Subtitle>
        <Subtitle>temperamentos: {temperament}</Subtitle>
        <Image src={image} alt={name} />
        <ID>id: {id}</ID>
      </CardStyle>
    </Content>
  );
}
