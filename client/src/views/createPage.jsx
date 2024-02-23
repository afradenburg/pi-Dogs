import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDog } from '../redux/actions';
import { useState } from "react";
import { Link } from 'react-router-dom'
import { SelectStyled, OptionStyled } from "../styled/selectFavorites";
import { validation } from '../helpers/validate';
import { FormLogin } from '../styled/formStyled';

// import {Cloudinary} from "@cloudinary/url-gen";
// import {v2 as cloudinary} from 'cloudinary';

// import {Cloudinary} from "@cloudinary/url-gen";




          

export const CreatePage = () => {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'djif4cgg0',
  //   },
  // });
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.Temperaments);

  const [dog, setDog] = useState({
    name: "",
    life_span: "",
    image: "",
    weight: "",
    maxWeight: "",
    height: "",
    masHeight: "",
    temperament: []
  });

  const [errors, setErrors] = useState({
    name: "campo requerido",
    life_span: "campo requerido",
    image: "campo requerido",
    weight: "campo requerido",
    maxWeight: "campo requerido",
    height: "campo requerido",
    masHeight: "campo requerido",
  })

  const handleUploadImage = async (event) => {
    const files = event.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "images")
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/djif4cgg0/image/upload",
        {
          method: "POST",
          body: data,
          // mode: "no-cors"
        }
      );
      console.log(res)


      const url = await res.json()
      console.log("soy file", url.secure_url)
      setDog({ ...dog, image: url.secure_url})
    } catch (error) {
      throw new Error(error.message)
    }
  };
  
  const handleChange = (event) => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value
    });
    setErrors(
      validation({
      ...dog,
      [event.target.name]: event.target.value
    }))
  };


  const handleTemperament = (event) => {
    if (!dog.temperament.includes(event.target.value)) {
      setDog({
        ...dog,
        temperament: [...dog.temperament, event.target.value]
      });
    }
  };

  const newDog = {
    name: dog.name,
    life_span: dog.life_span,
    image: dog.image,
    weight: `${dog.weight} - ${dog.maxWeight}`,
    height: `${dog.height} - ${dog.masHeight}`,
    temperament: dog.temperament
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDog(newDog));
    
    setDog({
      name: "",
      id: "",
      life_span: "",
      image: "",
      weight: "",
      height: "",
      temperament: []
    });
  };

  function disableHandler() {
    for (let error in errors) {
      if (errors[error] !== "") {
        return true;
      }
    }
    for (let input in dog) {
      if (dog[input] === "") {
        return true;
      }
    }
    return false;
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name='name'
          value={dog.name}
          onChange={handleChange}
        />
      </label>
      {errors.name  && <span style={{color: "red"}}>{errors.name}</span>}
      <label>
        Tiempo de vida:
        <input
          type="text"
          name='life_span'
          value={dog.life_span}
          onChange={handleChange}
        />
      </label>
      {errors.life_span  && <span style={{color: "red"}}>{errors.life_span}</span>}
      <label>
        Imagen:
        <input
          type="file"
          name='file'
          placeholder='sube tu imagen'
          onChange={handleUploadImage}
        />
      </label>
      <label>
        Peso minimo:
        <input
          type="text"
          name='weight'
          value={dog.weight}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso maximo:
        <input
          type="text"
          name='maxWeight'
          value={dog.maxWeight}
          onChange={handleChange}
        />
      </label>

      {errors.weight  && <span style={{color: "red"}}>{errors.weight}</span>}
      <label>
        Altura minima:
        <input
          type="text"
          name='height'
          value={dog.height}
          onChange={handleChange}
        />
      </label>
      {errors.height  && <span style={{color: "red"}}>{errors.height}</span>}
      
      <label>
        Altura maxima:
        <input
          type="text"
          name='masHeight'
          value={dog.masHeight}
          onChange={handleChange}
        />
      </label>

      <label>
        Temperamento:
        <SelectStyled
          onChange={handleTemperament}
          type="text"
          name="temperament"
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
      <button type="submit" disabled={disableHandler()}>
        Crear Perro
      </button>
      <div>
        <Link to={"/home"}>
          <button>Volver</button>
        </Link>
      </div>
    </FormLogin>
  );
};