const getDogs = require("../controllers/getDogsController")

async function getDogsHandler (req, res){
    try {
        const dogs = await getDogs()
        res.status(200).json(dogs)     
    } catch (error) {
        console.log(error.message)
       res.status(404).send(error.message) 
    }
}

module.exports= getDogsHandler
