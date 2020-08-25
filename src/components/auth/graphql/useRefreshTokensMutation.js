import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation RefreshUserTokens {
      refreshUserTokens {
        idToken
        accessToken
      }
    }
  `);
