const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String!]
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username:String
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }
  # above code here we have all the users

  # the code below is about authorization of the users in the session with their ID and user

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
      userId: ID!
      authors: String!
      description: String!
      bookId: String!
      image: String!
      link: String!
      title: String!
      ): User
    removeBook (userId: ID!, bookId: String!): User
  }
  
`;

module.exports = typeDefs;
