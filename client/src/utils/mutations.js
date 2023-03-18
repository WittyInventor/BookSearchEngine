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


export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $authors: String!, $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String! ) {
    saveBook(userId: $userId, authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title  ) {
       username,
    email,
    bookCount
    }
  }
`;
// verify this is correct due to trouble finding example 
export const REMOVE_BOOK = gql`
  mutation removeBook ($userId: ID!,$bookId: String!) {
    removeBook(userId:$userId, bookId: $bookId) {
      _id
      username
    }
  }
`;
