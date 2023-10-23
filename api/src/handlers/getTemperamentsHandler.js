const getTemperaments = require("../controllers/getTemperamentsController");

async function getTemperamentsHandler(req, res){
    try {
        const temperaments = await getTemperaments()
        res.status(200).json(temperaments)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = getTemperamentsHandler;