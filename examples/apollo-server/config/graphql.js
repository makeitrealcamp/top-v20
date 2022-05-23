const {  ApolloServer } = require('apollo-server-express');

const resolvers = require('../graphql/resolvers');
const typeDefs = require('../graphql/typeDefs');

async function configGraphQL(app) {
  try {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app });

    console.log('GraphQ Running');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = configGraphQL;
