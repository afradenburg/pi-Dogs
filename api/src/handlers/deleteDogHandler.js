const deleteDog = require("../controllers/deleteDogController");

async function deleteDogHandler(req, res) {
  const { name } = req.query;
  console.log(name)
  try {
    const byeDog = await deleteDog(name);
    res.status(200).json(byeDog);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = deleteDogHandler;
