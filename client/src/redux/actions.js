import {
  GET_DOGS,
  GET_DOG_BY_NAME,
  FILTER_BY_TEMPERAMENTS,
  GET_TEMPERAMENTS,
  ORDER_BY_CREATE,
  ORDER,
  ORDER_BY_WEIGHT
} from "./actionsTypes";
import axios from "axios";

export const getDogs = () => {
  const endPoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    try {
      const data = await axios.get(endPoint);
      console.log(data);
      if (!data) throw Error("no se encontraron perritos");
      return dispatch({
        type: GET_DOGS,
        payload: data.data,
      });
    } catch (error) {
      alert("error al traer perritos");
    }
  };
};

export const getDogsByName = (name) => {
  const endPoint = `http://localhost:3001/dogsname/?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endPoint);
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("ningun perro tiene esta raza");
    }
  };
};

export const filterByTemperament = (temperament) => {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload: temperament,
  };
};

export const getTemperaments = () => {
  const endPoint = "http://localhost:3001/temperaments";
  return async (dispatch) => {
    try {
      const temperaments = await axios.get(endPoint);
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: temperaments.data,
      });
    } catch (error) {
      alert("temperamentos perdidos");
    }
  };
};

export const orderByCreate = (orderCreate) => {
  return {
    type: ORDER_BY_CREATE,
    payload: orderCreate,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const orderByWeight = (weight) =>{
  return {
    type: ORDER_BY_WEIGHT,
    payload: weight,
  }
}