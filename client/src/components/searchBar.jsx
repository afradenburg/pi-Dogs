import React from "react";
import {
  filterByTemperament,
  getDogsByName,
  orderByCreate,
  orderCards,
  orderByWeight,
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
  const [searchName, setSearchName] = useState("");
  const temperament = useSelector((state) => state.Temperaments);
  function handleChange(event) {
    event.preventDefault();
    setSearchName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogsByName(searchName));
  }

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

  return (
    <SearchStyled>
      <HeaderApp>
        <InputStyled
          placeholder="raza del perro"
          type="search"
          onChange={(event) => handleChange(event)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Buscar
        </Button>
      </HeaderApp>

      <FilterStyle>
        <h2>filtrar por temperamento</h2>
        <SelectStyled onChange={handleByTemperament}>
          {temperament.map((temperament) => (
            <OptionStyled key={temperament.name} value={temperament.name}>
              {temperament.name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order create">
        <h2>Filtar por creacion</h2>
        <SelectStyled onChange={handleOrderByCreate}>
          <OptionStyled value="D">No Creados</OptionStyled>
          <OptionStyled value="C">Creados</OptionStyled>
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order abc">
        <h2>Orden alfabetico</h2>
        <SelectStyled onChange={handleOrder}>
          <OptionStyled value="A">Ascendente</OptionStyled>
          <OptionStyled value="B">Descendente</OptionStyled>
        </SelectStyled>
      </FilterStyle>

      <FilterStyle className="order weight">
        <h2>ordenar por peso</h2>
        <SelectStyled onChange={handleOrderByWeight}>
          <OptionStyled value="A">mayor a menor</OptionStyled>
          <OptionStyled value="B">menor a mayor</OptionStyled>
        </SelectStyled>
      </FilterStyle>
    </SearchStyled>
  );
};
