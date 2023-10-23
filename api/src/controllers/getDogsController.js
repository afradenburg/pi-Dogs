const axios = require("axios");
const { Dog } = require('../db')
async function getDogs() {
  const URL = "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await axios.get(URL);
    const dogsFromApi = response.data.map((result) => ({
      name: result.name,
      id: result.id,
      life: result.life_span,
      image: result.reference_image_id,
      weight: result.weight.metric,
      height: result.height.metric,
    }));

    const dogsFromDB = await Dog.findAll();
    const dogs = [...dogsFromDB, ...dogsFromApi]
    
    return dogs;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getDogs;
