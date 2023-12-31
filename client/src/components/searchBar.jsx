import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterByTemperament,
  getDogsByName,
  orderByCreate,
  orderCards,
  orderByWeight,
  resetState,
} from "../redux/actions";
import { InputStyled } from "../styled/inputStyled";
import { SearchStyled } from "../styled/searchStyled";
import { HeaderApp } from "../styled/headerStyle";
import { Button } from "../styled/cardStyled";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  FilterStyle,
  OptionStyled,
  SelectStyled,
} from "../styled/selectFavorites";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const temperament = useSelector((state) => state.Temperaments);

  function handleChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogsByName(searchInput));
    setSearchInput("");
  }

  useEffect(() => {
    setSearchInput("");
  }, [dispatch]);

  const handleByTemperament = (event) => {
    console.log(event.target.value);
    dispatch(filterByTemperament(event.target.value));
  };

  const handleOrderByCreate = (event) => {
    dispatch(orderByCreate(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleOrderByWeight = (event) => {
    dispatch(orderByWeight(event.target.value));
  };

  const reset = ()=>{
    dispatch(resetState())
  }

  return (
    <SearchStyled typeof="search">
      <HeaderApp>
        <InputStyled
          placeholder="raza del perro"
          type="search"
          value={searchInput}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Buscar
        </Button>
        <Button onClick={reset}>
          Todos los dogs
        </Button>
      </HeaderApp>
      <Link to={"/createDog"}>
        <Button>Nuevo dog</Button>
      </Link>

      <FilterStyle>
        <h2>Temperament</h2>
        
        <SelectStyled onChange={handleByTemperament} placeholder="temperament">
          {temperament.map((temperament) => (
            <OptionStyled key={temperament.name} value={temperament.name} placeholder="temperament">
              {temperament.name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order create" placeholder="hola">
        <h2>Create</h2>
        <SelectStyled onChange={handleOrderByCreate}>
          <OptionStyled value="D">No Creados</OptionStyled>
          <OptionStyled value="C">Creados</OptionStyled>
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order abc">
        <h2>A/Z</h2>
        <SelectStyled onChange={handleOrder}>
          <OptionStyled value="A">Ascendente</OptionStyled>
          <OptionStyled value="B">Descendente</OptionStyled>
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order weight">
        <h2>weight</h2>
        <SelectStyled onChange={handleOrderByWeight}>
          <OptionStyled value="A">mayor a menor</OptionStyled>
          <OptionStyled value="B">menor a mayor</OptionStyled>
        </SelectStyled>
      </FilterStyle>
      <Link to={'/deletedog'}>
      <Button>delete dog</Button>
      </Link>
      
    </SearchStyled>
  );
};
