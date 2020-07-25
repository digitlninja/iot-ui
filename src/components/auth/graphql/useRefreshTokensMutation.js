import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export const mutation = gql`
  mutation RefreshUserTokens($username: String!) {
    refreshUserTokens(username: $username, password: $password) {
      idToken
      accessToken
      refreshToken
    }
  }
`;

export default () =>
  useMutation(gql`
    mutation RefreshUserTokens($username: String!) {
      refreshUserTokens(username: $username, password: $password) {
        idToken
        accessToken
        refreshToken
      }
    }
  `);
