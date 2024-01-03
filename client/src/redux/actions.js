import {
  GET_DOGS,
  GET_DOG_BY_NAME,
  FILTER_BY_TEMPERAMENTS,
  GET_TEMPERAMENTS,
  ORDER_BY_CREATE,
  ORDER,
  ORDER_BY_WEIGHT,
  GET_DOG_DETAIL,
  POST_DOG,
  DELETE,
  RESET
} from "./actionsTypes";
import axios from "axios";

export const getDogs = () => {
  const endPoint = "/dogs";
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
  const endPoint = `/dogsname/?name=${name}`;
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
  const endPoint = "/temperaments";
  return async (dispatch) => {
    try {
      const temperaments = await axios.get(endPoint);
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: temperaments.data,
      });
    } catch (error) {
      console.log(error.message);
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

export const orderByWeight = (weight) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload: weight,
  };
};

export const getDogDetail = (id) => {
  console.log(id)
  const endPoint = `/dogs/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endPoint);
      return dispatch({
        type: GET_DOG_DETAIL,
        payload: data,
      });
    } catch (error) {
      alert("error al mostrar detalles");
    }
  };
};

export const postDog= (props)=>{
  const endPoint = "/dogs"
  return async (dispatch)=>{
    try {
      const newDog = await axios.post(endPoint, props)
      alert(`creado correctamente`);
      console.log(newDog)
      if(newDog.length > 0){
        return dispatch({
          type: POST_DOG,
          payload: newDog.data
        })
      }
    } catch (error) {
      console.log("Error al crear nuevo dog :(", error);
    }
  }
}

export const resetState= ()=>{
  return async (dispatch)=>{
    try {
      return dispatch({
        type: RESET,
      })
    } catch (error) {
      alert('error al traer todos los dog', console.log(error.message))
    }
  }
}

export const deleteDog = (name) => {
  const endPoint = `/dogs/delete/?name=${name}`; 
  return async (dispatch) => {
    try {
      const response = await axios.delete(endPoint);
      alert(`${response.data.message}`);
    } catch (error) {
      alert('No se pudo eliminar el perro', console.log(error.message));
    }
  };
};