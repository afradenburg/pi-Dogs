const { Temperaments } = require("../db")

async function getTemperamentsBD() {
    try {return await Temperaments.findAll()
    } catch (error) {
        throw new Error(error.mesage)
    }
}

module.exports= getTemperamentsBD;