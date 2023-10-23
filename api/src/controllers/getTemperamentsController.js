const axios = require("axios");
const { Temperaments } = require("../db");

async function getTemperaments() {
  try {
    const URL = "https://api.thedogapi.com/v1/breeds";
    const response = await axios.get(URL);
    const breeds = response.data;

    const allTemperaments = breeds.reduce((temperaments, breed) => {
      if (breed.temperament) {
        const breedTemperaments = breed.temperament.split(", ");
        breedTemperaments.forEach((temperament) => {
          if (!temperaments.includes(temperament)) {
            temperaments.push(temperament);
          }
        });
      }
      return temperaments;
    }, []);

    const existingTemperaments = await Temperaments.findAll();

    if (existingTemperaments.length === 0) {
      await Temperaments.bulkCreate(
        allTemperaments.map((temperament) => ({ name: temperament }))
      );
      console.log("Temperaments in DB.");
    } else {
      console.log(
        "Temperaments already exist in the database. No action needed."
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getTemperaments;
