const { Dog, Temperaments } = require("../db");

async function postDog({name,life_span,image,weight, height,temperament,}) {

 
  try {
    const existingDog = await Dog.findOne({
      where: {
        name: name,
      },
    });

    if (existingDog) {
      throw new Error("Este perro ya existe en la base de datos.");
    }

    const newDog = await Dog.create({
      name,
      life_span,
      image,
      weight,
      height,
    });
    if (temperament && temperament.length > 0) {
      // const temperamentArray = temperament.split(",");
      for (const temp of temperament) {
        const associationTemperament = await Temperaments.findOne({
          where: {
            name: temp,
          },
        });
        console.log("temperatii", associationTemperament)
        if (associationTemperament) {
          await newDog.addTemperament(associationTemperament);
        }
      }
    }

    return newDog;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = postDog;
