const {Dog, Temperaments} = require("../db")
async function postDog({ name, life_span, image, weight, height, temperament }){
try {
    const newDog = await Dog.create({
        name,
        life_span,
        image,
        weight,
        height
    })
    if(temperament || temperament.length > 0){
        const associationTemperament = await Temperaments.findAll({
            where: {
                name: temperament
            }
        })
        await newDog.addTemperaments(associationTemperament)
    }
    return newDog
} catch (error) {
    throw new Error(error.message)
}
}

module.exports = postDog;