const pet = require('./pet')
const customer = require('./customer')

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    ...pet.query,
    ...customer.query,
  },

  Mutation: {
    ...pet.mutation,
    ...customer.mutation,
  }
}

module.exports = resolvers;
