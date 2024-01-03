const deleteDog = require("../controllers/deleteDogController");

async function deleteDogHandler(req, res) {
  const { id } = req.params;
  console.log(id)
  try {
    const byeDog = await deleteDog(id);
    res.status(200).json(byeDog);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = deleteDogHandler;
