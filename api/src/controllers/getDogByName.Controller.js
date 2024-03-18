const axios = require("axios");
const { Op } = require("sequelize");
const { Dog, Temperaments } = require('../db');
async function getByName(name) {
  const URL = "https://api.thedogapi.com/v1/breeds";
  // console.log(name);

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
          image: `https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`,
          weight: dog.weight.metric,
          height: dog.height.metric,
          temperament: dog.temperament,
        }));
        return dogs;
      } else {
       const result = await Dog.findOne({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
        include: Temperaments
      });
      if (!result || result.length === 0) {
        throw new Error("No se encontró ningún perro con ese nombre");
      }
      const { id, image, weight, height,} = result
      // console.log(result)
      return dogDetil = {
        name: name,
        id: id,
        image: image,
        weight: weight,
        height: height,
        temperament: result.temperaments.map((temp)=> temp.name).join(", ")
    }
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getByName;
