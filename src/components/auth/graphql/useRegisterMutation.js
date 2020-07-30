import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
      signUp(
        user: { email: $email, username: $username, password: $password }
      ) {
        ... on User {
          username
          email
          __typename
        }
        ... on UsernameExists {
          message
          path
          __typename
        }
        ... on ValidationFailed {
          messages
          path
          __typename
        }
        ... on ErrorResult {
          message
          path
          __typename
        }
      }
    }
  `);
