const getDogsId = require("../controllers/getDogIdController")


async function getDogsIdHandler (req, res){
    try { 
        const { id } = req.params;
        const dogId = await getDogsId(id)
        res.status(200).json(dogId)     
    } catch (error) {
       res.status(404).send(error.message) 
    }
}

module.exports= getDogsIdHandler