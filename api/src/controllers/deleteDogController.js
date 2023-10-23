const { Dog } = require("../db");

async function deleteDog(name) {
  try {
    const byeDog = await Dog.findOne({
      where: {
        name: name,
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