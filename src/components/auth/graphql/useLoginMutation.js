import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation LoginMutation($username: String!, $password: String!) {
      logIn(user: { username: $username, password: $password }) {
        ... on CognitoTokens {
          idToken
          accessToken
          refreshToken
          __typename
        }
        ... on IncorrectCredentials {
          message
          __typename
        }
        ... on TooManyPasswordAttempts {
          message
          __typename
        }
        ... on UserNotConfirmed {
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
