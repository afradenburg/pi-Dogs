const axios = require("axios");
const { Dog, Temperaments } = require('../db');

async function getDogs() {
  const URL = "https://api.thedogapi.com/v1/breeds";
  const API_KEY = process.env;

  try {
    const response = await axios.get(`${URL}?api_key=${API_KEY}`);
    const dogsFromApi = response.data.map((result) => ({
      name: result.name,
      id: result.id,
      life: result.life_span,
      image: `https://cdn2.thedogapi.com/images/${result?.reference_image_id}.jpg`,
      weight: result.weight.metric,
      height: result.height.metric,
      temperament: result.temperament,
    }));

    async function searchDogsTemperament(){
      try {
        const dogsFromDB = await Dog.findAll({
          include: {
            model: Temperaments,
          },
        });
        return dogsFromDB
      } catch (error) {
        throw new Error(error.message);
      }
    }

    const dogsDbList = await searchDogsTemperament();
    const mappedDogs = dogsDbList.map((dog) => {
      const temperament = dog.temperaments.map((temp) => temp.name).join(", ");
      console.log(temperament)
      return {
        name: dog.name,
        id: dog.id,
        life: dog.life,
        image: dog.image,
        weight: dog.weight,
        height: dog.height,
        temperament: temperament,
      };
    });
    
    const dogs = [...mappedDogs, ...dogsFromApi];
    return dogs;
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message);
  }
}

module.exports = getDogs;
