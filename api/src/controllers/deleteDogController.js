const { Dog } = require("../db");

async function deleteDog(id) {
  // console.log(id)
  try {
    const byeDog = await Dog.findOne({
      where: {
        id: id,
      },
    });

    if (byeDog) {
      await byeDog.destroy();
      return { message: "Dog deleted successfully" };
    } else {
      return { message: "Dog not found" };
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = deleteDog;