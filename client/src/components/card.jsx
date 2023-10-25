import React from 'react'
import { CardStyle, Image } from '../styled/cardStyled';
import { Link } from "react-router-dom";

export const Card = ({dog}) => {
  const { name, id, image, weight, height, life, temperament } = dog 
  const key = id;
  console.log(dog)

  return (
    <CardStyle>
        <h2>{name}</h2>
        <Link to={`/detail/${id}`}>
        <Image src={image} alt={name} />
        </Link>
        <h2>temperamentos: {temperament}</h2>
        <h2>peso: {weight} Kg</h2>
    </CardStyle>
  )
}
