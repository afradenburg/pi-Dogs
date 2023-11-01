const { Dog, Temperaments } = require("../db");

async function postDog({ name, life_span, image, weight, height, temperament }) {
  try {
    const nameWords = name.split(" ");
    const formattedName = nameWords
      .map((string) => {
        const firstLetter = string.charAt(0).toUpperCase();
        const restOfWord = string.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      }).join(" ");

    const existingDog = await Dog.findOne({
      where: {
        name: formattedName,
      },
    });

    if (existingDog) {
      throw new Error("Este perro ya existe en la base de datos.");
    }

    const newDog = await Dog.create({
      name: formattedName,
      life_span,
      image,
      weight,
      height,
    });

    if (temperament && temperament.length > 0) {
      for (const temp of temperament) {
        const associationTemperament = await Temperaments.findOne({
          where: {
            name: temp,
          },
        });

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
