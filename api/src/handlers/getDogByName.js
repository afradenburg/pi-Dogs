const getByName = require("../controllers/getDogByName.Controller");

async function getDogByNameHandler(req, res) {
  try {
    const { name } = req.query;
    const nameWords = name.split(" ");
    const formattedName = nameWords
      .map((string) => {
        const firstLetter = string.charAt(0).toUpperCase();
        const restOfWord = string.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      }).join(" ");

    const dogName = await getByName(formattedName);
    res.status(200).json(dogName);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = getDogByNameHandler;
