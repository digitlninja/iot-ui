import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useMutation(gql`
    mutation ConfirmPasswordMutation(
      $username: String!
      $verificationCode: String!
      $newPassword: String!
    ) {
      confirmPassword(
        confirmPasswordInput: {
          username: $username
          verificationCode: $verificationCode
          newPassword: $newPassword
        }
      ) {
        ... on ConfirmPasswordSuccess {
          username
        }
        ... on LimitExceeded {
          id
          message
        }
        ... on ExpiredCode {
          id
          message
        }
        ... on ErrorResult {
          id
          message
        }
        ... on ValidationFailed {
          id
          messages
          path
        }
      }
    }
  `);
