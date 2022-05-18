const Pet = require('./pet.model');

async function getAllPets() {
  return await Pet.find();
}

async function getFindPets(query) {
  return await Pet.find(query);
}

async function getPetById(id) {
  return await Pet.findById(id);
}

async function createPet(pet) {
  return await Pet.create(pet);
}

async function updatePet(id, pet) {
  return await Pet.findByIdAndUpdate(id, pet, { new: true });
}

async function deletePet(id) {
  return await Pet.findByIdAndDelete(id);
}

async function getTotalPets(query) {
  return await Pet.find(query).countDocuments();
}

module.exports = {
  getAllPets,
  getFindPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
  getTotalPets,
}
