const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { User, Post } = require('../../db/models');

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

async function findAllWithPosts(id) {
  const users = await User.findAll({
    include: [
      {
        model: Post,
        as: 'posts',
        attributes: ['userId', 'title', 'body', 'createdAt'],
        // where: {
        //   title: {
        //     [Op.like]: '%us%',
        //   },
        // },
      },
    ],
    attributes: ['id', 'name'],
  });

  return users;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  findAllWithPosts,
}
