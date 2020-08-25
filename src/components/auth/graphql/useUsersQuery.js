import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export default () =>
  useQuery(gql`
    query users {
      users {
        email
      }
    }
  `);
