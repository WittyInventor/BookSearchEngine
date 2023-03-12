import { gql } from '@apollo/client';

// LOGIN_USER is the variable that holds the mutation in graphQL. the actual mutation is the login function in here below
// when we export the LOGIN_USER to make it available for other files in the graphQL 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// TODO: This needs to be fixed below later, not sure..its hard to see if this is working because its not running.
export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $commentText: String!) {
    saveBook(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
// verify this is correct due to trouble finding example 
export const REMOVE_BOOK = gql`
  mutation removeBook ($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
    }
  }
`;
