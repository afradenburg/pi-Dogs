const getDogsId = require("../controllers/getDogIdController")


async function getDogsIdHandler (req, res){
    const { id } = req.params;
    try { 
        const dogId = await getDogsId(id)
        res.status(200).json(dogId)     
    } catch (error) {
       res.status(404).json(error.message) 
    }
}

module.exports= getDogsIdHandler