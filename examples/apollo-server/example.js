const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    "The name of the book."
    title: String!
    "The author of the book."
    author: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    "A simple example to show message"
    hello: String!

    "A list of all books in the data source."
    books: [Book]

    book(title: String!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;

function getAllBooks() {
  return books;
}

function helloWorld() {
  return 'Hello World!';
}

const resolvers = {
  Query: {
    hello: helloWorld,
    books: getAllBooks,
    book: (parent, args) => {
      return books.find(book => book.title === args.title);
    }
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = {
        title: args.title,
        author: args.author,
      };
      books.push(newBook);
      return newBook;
      // return books.concat(newBook);
    }
  }
};

async function start() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(8080, () => {
    console.log('Server running on port 8080');
  })
}

setImmediate(start);
