import React, { useContext } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

import { Context } from "../store/Store";
import typeDefs from "graphql/types";
import { API_URI } from "../config";

const Client = ({ children }) => {
  const [globalState] = useContext(Context);

  const httpLink = createHttpLink({
    uri: API_URI,
    credentials: "include",
  });

  const authLink = setContext(async (operation, { headers }) => {
    const idToken = globalState && globalState.idToken;
    if (idToken) {
      return {
        headers: {
          ...headers,
          authorization: idToken ? `Bearer ${idToken}` : "",
        },
      };
    }
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache(),
    typeDefs: typeDefs,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
