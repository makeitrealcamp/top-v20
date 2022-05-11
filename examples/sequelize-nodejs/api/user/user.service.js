const { User } = require('../../db/models');

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function createUser(user) {
  return await User.create(user);
}

async function updateUser(id, user) {
  return await User.update(user, { where: { id } });
}

async function deleteUser(id) {
  return await User.destroy({ where: { id } });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
