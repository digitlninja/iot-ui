import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation LoginMutation($username: String!, $password: String!) {
      logIn(user: { username: $username, password: $password }) {
        ... on CognitoTokens {
          idToken
          accessToken
          __typename
        }
        ... on IncorrectCredentials {
          id
          message
          __typename
        }
        ... on TooManyPasswordAttempts {
          id
          message
          __typename
        }
        ... on UserNotConfirmed {
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
