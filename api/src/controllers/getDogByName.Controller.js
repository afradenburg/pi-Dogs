const axios = require("axios");
const { Op } = require("sequelize");
const { Dog } = require('../db');
async function getByName(name) {
  const URL = "https://api.thedogapi.com/v1/breeds";
  console.log(name);

  try {
    if (name) {
      const response = await axios.get(URL);
      const dogsList = response.data;
      const foundDogs = dogsList.filter((dog) => dog.name.includes(name));

      if (foundDogs.length > 0) {
        const dogs = foundDogs.map((dog) => ({
          name: dog.name,
          id: dog.id,
          life: dog.life_span,
          image: dog.reference_image_id,
          weight: dog.weight.metric,
          height: dog.height.metric,
        }));
        return dogs;
      } else {
       const result = await Dog.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      if (!result || result.length === 0) {
        throw new Error("No se encontró ningún perro con ese nombre");
      }
      return result;
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getByName;
