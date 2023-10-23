const axios = require("axios");
const { Dog } = require('../db');

async function getDogsId(id) {
    const URL = "https://api.thedogapi.com/v1/breeds";
    console.log(typeof(id));
    try {
        if (id.length <= 3) {
            const response = await axios.get(URL);
            const dogsList = response.data;
            const foundDog = dogsList.find(dog => dog.id == Number(id));
            if (foundDog) {
                const dog = {
                    name: foundDog.name,
                    id: foundDog.id,
                    life: foundDog.life_span,
                    image: foundDog.reference_image_id,
                    weight: foundDog.weight.metric,
                    height: foundDog.height.metric,
                    temperament: foundDog.temperament,
                };
                return dog;
            } else {
                throw new Error("No se encontró ningún perro con el ID proporcionado.");
            }
        } else if (id.length > 3) {
            const dogFound = await Dog.findOne({
                where: { id: id },
            });
            if (dogFound) {
                return dogFound;
            }
            throw new Error(`No se encontró un registro de perro con la ID ${id}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getDogsId;

