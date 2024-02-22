import React from 'react'
import { CardStyle, Image } from '../styled/cardStyled';
import { Link } from "react-router-dom";

export const Card = ({dog}) => {
  const { name, id, image, weight, height, life, temperament } = dog 
  const key = id;
  console.log(dog)

  return (
    <CardStyle>
        <h2 style={{fontSize: "30px"}}>{name}</h2>
        <Link to={`/detail/${id}`}>
        <Image src={image} alt={name} />
        </Link>
        <p>temperamentos: {temperament}</p>
        <p>peso: {weight} Kg</p>
    </CardStyle>
  )
}
