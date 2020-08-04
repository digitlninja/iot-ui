import gql from "graphql-tag";

export const refreshTokensMutation = gql`
  mutation RefreshUserTokens {
    refreshUserTokens {
      idToken
      accessToken
    }
  }
`;
