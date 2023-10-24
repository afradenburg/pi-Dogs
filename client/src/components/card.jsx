import React from 'react'
import { CardStyle, Image } from '../styled/cardStyled';

export const Card = ({dog}) => {
  const { name, id, image, weight, height, life, temperament } = dog 
  const key = id;
  console.log(dog)

  return (
    <CardStyle>
        <h2>{name}</h2>
        <Image src={image} alt={name} />
        <h2>temperamentos: {temperament}</h2>
        <h2>peso: {weight} Kg</h2>
    </CardStyle>
  )
}
