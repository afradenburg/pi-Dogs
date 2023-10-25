import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDog } from '../redux/actions'
import { useState } from "react";
import { Link } from "react-router-dom";
import { SelectStyled, OptionStyled } from "../styled/selectFavorites";

export const CreatePage = () => {
  const dispatch = useDispatch()
  const temperaments = useSelector((state)=> state.Temperaments)

  const [dog, setDog ] = useState({
    name: "",
    id: "",
    life_span: "",
    image: "", 
    weight: "",
    height: "", 
    temperament: []
  })

  const handleChange= (event) => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value
    })
  }

  const handleTemperament=(event) => {
    if(!dog.temperament.includes(event.target.value)){
      setDog({
        ...dog,
        temperament: [...dog.temperament, event.target.value]
      })
    }
  }

  const returnDog= () => {
    
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(postDog(dog))
    console.log(dog)
    setDog({
      name: "",
      id: "",
      life_span: "",
      image: "", 
      weight: "",
      height: "", 
      temperament: []
    })
  }

  return (
   <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input
      type="text"
      name='name'
      value={dog.name}
      onChange={handleChange}
      />
    </label>

    <label>
      tiempo de vida:
      <input
      type="text"
      name='life_span'
      value={dog.life_span}
      onChange={handleChange}
      />
    </label>

    <label>
      Image:
      <input
      type="text"
      name='image'
      value={dog.image}
      onChange={handleChange}
      />
    </label>

    <label>
      peso:
      <input
      type="text"
      name='weight'
      value={dog.weight}
      onChange={handleChange}
      />
    </label>

    <label>
      altura:
      <input
      type="text"
      name='height'
      value={dog.height}
      onChange={handleChange}
      />
    </label>

    <label>
        Type:
        <SelectStyled
          onChange={handleTemperament}
          type="text"
          name="type"
          multiple
          value={dog.temperament}
        >
          {temperaments.map((temperament) => (
            <OptionStyled key={temperament.name} value={temperament.name}>
              {temperament.name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </label>

    <button type="submit">
        Crear Dog
      </button>
      <div>
        <Link to={"/home"}>
          <button>volver</button>
        </Link>
      </div>
   </form>
  )
}
