const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum PetCategory {
    CAT
    DOG
    RABBIT
    STINGRAY
  }

  enum PetStatus {
    AVAILABLE
    CHECKEDOUT
  }

  type Photo {
    full: String
    thumb: String
  }

  type Customer {
    _id: ID!
    name: String!
    username: ID!
    password: String!
  }

  input PetInput {
    name: String!
    weight: Float
    category: PetCategory!
    status: PetStatus
  }

  input CustomerInput {
    name: String!
    username: String!
    password: String!
  }

  type Pet {
    _id: ID!
    name: String!
    weight: Float
    category: PetCategory!
    status: PetStatus
    photo: Photo
    inCareOf: Customer
  }

  type Query {
    hello: String!
    totalPets(status: PetStatus): Int!
    allPets(
      category: PetCategory
      status: PetStatus
    ): [Pet!]!
    petById(id: ID!): Pet!
    totalCustomers: Int!
    allCustomers: [Customer!]!
  }

  type Mutation {
    createPet(input: PetInput!): Pet!
    createAccount(input: CustomerInput!): Customer!
  }
`

module.exports = typeDefs;
