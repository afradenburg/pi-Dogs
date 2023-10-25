const getTemperamentsBD = require("../controllers/getTemperamentsDBController");

async function getTemperamentsHandler(req, res){
    try {
        const temperaments = await getTemperamentsBD()
        res.status(200).json(temperaments)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = getTemperamentsHandler;