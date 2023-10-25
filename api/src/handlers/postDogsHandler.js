const postDog = require("../controllers/postDogController");

async function postDogsHandler(req, res) {
  try {
    const newDog = await postDog(req.body);
    res.status(200).json(newDog);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = postDogsHandler;
