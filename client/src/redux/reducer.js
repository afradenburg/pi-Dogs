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
  RESET,
  DELETE,
} from "./actionsTypes";

let initialState = { Dogs: [], DogsCopy: [], DogFilter: [], Temperaments: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        Dogs: action.payload,
        DogsCopy: action.payload,
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        Dogs: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        Temperaments: action.payload,
      };

    case FILTER_BY_TEMPERAMENTS:
      const filterDogs = [...state.DogsCopy];
      const filterTemperament = filterDogs.filter((dog) => {
        return dog.temperament && dog.temperament.includes(action.payload);
      });
      return {
        ...state,
        Dogs: filterTemperament,
        DogFilter: filterTemperament,
      };

    case ORDER_BY_CREATE:
      const dogTemperament = [...state.DogFilter]
      if(dogTemperament.length === 0){
        const CopyDogsId = [...state.DogsCopy];
      const filteredDog =
        action.payload === "C"
          ? CopyDogsId.filter((dog) => typeof dog.id === "string")
          : CopyDogsId.filter((dog) => typeof dog.id === "number");
      return {
        ...state,
        Dogs: filteredDog,
      };
      } else {
        const filteredDog =
      action.payload === "C"
        ? dogTemperament.filter((dog) => typeof dog.id === "string")
        : dogTemperament.filter((dog) => typeof dog.id === "number");
    return {
      ...state,
      Dogs: filteredDog,
    };
      }


    case ORDER:
      const CopyDogsAll = [...state.Dogs];
      return {
        ...state,
        Dogs:
          action.payload === "A"
            ? CopyDogsAll.sort((a, b) => a.name.localeCompare(b.name))
            : CopyDogsAll.sort((a, b) => b.name.localeCompare(a.name)),
      };

    case ORDER_BY_WEIGHT:
      const copyWeight = [...state.Dogs];
      const sortOrder = action.payload === "B" ? 1 : -1;
      return {
        ...state,
        Dogs: copyWeight.sort((a, b) => {
          const aWeights = a.weight
            ? a.weight.split(" - ").map(Number)
            : [0, 0];
          const bWeights = b.weight
            ? b.weight.split(" - ").map(Number)
            : [0, 0];
          return (
            (aWeights[0] - bWeights[0]) * sortOrder ||
            (aWeights[1] - bWeights[1]) * sortOrder
          );
        }),
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        DogsCopy: action.payload,
      };

    case POST_DOG:
      return {
        ...state,
        Dogs: [...state.Dogs, action.payload],
      };

    case RESET:
      return {
        ...state,
        Dogs: state.DogsCopy,
        DogFilter: []
      };
    
    case DELETE:{
      return{
        ...state,
        Dogs: state.Dogs
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
