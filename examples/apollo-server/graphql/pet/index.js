const {
  getFindPets,
  createPet,
  getTotalPets,
  getPetById,
} = require('./pet.service')

async function allPetsHandler(parent, args) {
  const query = {
    ...args,
  }
  const pets = await getFindPets(query)
  return pets;
}

async function createPetHandler(parent, args) {
  const { input } = args
  const pet = await createPet(input)
  return pet;
}

async function totalPetsHandler(parent, args) {
  const query = {
    ...args,
  }
  const pets = await getTotalPets(query)
  return pets;
}

async function petByIdHandler(parent, args) {
  const { id } = args
  const pet = await getPetById(id)
  return pet;
}

module.exports = {
  query: {
    allPets: allPetsHandler,
    totalPets: totalPetsHandler,
    petById: petByIdHandler,
  },

  mutation: {
    createPet: createPetHandler,
  }
}
