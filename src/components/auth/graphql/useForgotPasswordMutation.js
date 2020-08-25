import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation ForgotPasswordMutation($username: String!) {
      forgotPassword(username: $username) {
        ... on ForgotPasswordSuccess {
          email
        }
        ... on ValidationFailed {
          id
          messages
          path
          __typename
        }
        ... on LimitExceeded {
          id
          message
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
