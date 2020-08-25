import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation SignUp(
      $email: String!
      $username: String!
      $firstName: String!
      $lastName: String!
      $password: String!
    ) {
      signUp(
        user: {
          email: $email
          username: $username
          firstName: $firstName
          lastName: $lastName
          password: $password
        }
      ) {
        ... on User {
          id
          username
          email
          __typename
        }
        ... on UsernameExists {
          id
          message
          path
          __typename
        }
        ... on ValidationFailed {
          id
          messages
          path
          __typename
        }
        ... on ErrorResult {
          id
          message
          path
          __typename
        }
      }
    }
  `);
