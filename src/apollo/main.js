import React, { useContext } from 'react';
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink,
    Observable,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useHistory } from 'react-router-dom';

import { Context } from '../store/Store';
import { REMOVE_USER_AUTH_DATA } from '../store/auth/types';
import typeDefs from 'graphql/types';
import { API_URI } from '../config';
import { refreshTokensMutation } from '../components/auth/graphql/RefreshTokens';
import { setIdToken, getIdToken } from '../store/auth/auth-manager';
import { errorMessageTypes } from '../constants';

const Client = ({children}) => {
    // eslint-disable-next-line
    const [globalState, dispatch] = useContext(Context);
    let history = useHistory();
    console.log({env: process.env, API_URI});
    const httpLink = createHttpLink({
        uri: API_URI,
        credentials: 'include',
    });

    const authLink = setContext(async (operation, {headers}) => {
        const idToken = getIdToken();
        if (idToken) {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${idToken}` || null,
                },
            };
        }
    });

    const errorLink = onError(
        ({graphQLErrors, networkError, operation, forward}) => {
            if (graphQLErrors) {
                const {message, locations, path} = graphQLErrors[0];

                // 1. If jwt expired error
                if (message === errorMessageTypes.jwtExpired) {
                    // 2. Try refresh tokens
                    return new Observable((observer) => {
                        client
                            .mutate({mutation: refreshTokensMutation})
                            // 2. if successful, set the token in global state
                            .then((mutationResult) => {
                                setIdToken(mutationResult.data.refreshUserTokens.idToken);
                            })
                            // 3. if successfully set, add it as an auth header to the gql context
                            .then(() => {
                                const oldHeaders = operation.getContext().headers;
                                const idToken = getIdToken();
                                operation.setContext(({headers = {}}) => ({
                                    headers: {
                                        ...oldHeaders,
                                        authorization: `Bearer ${idToken}` || null,
                                    },
                                }));
                            })
                            // 4. if successfully added..
                            .then(() => {
                                const subscriber = {
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                };
                                // ..retry the last failed request
                                forward(operation).subscribe(subscriber);
                            })
                            .catch((error) => {
                                // No refresh or client token available, send user to login
                                history.push('/login');
                                observer.error(error);
                            });
                    });
                }
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                );
                if (message === errorMessageTypes.invalidSignature) {
                    dispatch({type: REMOVE_USER_AUTH_DATA});
                    history.push('/login');
                }
                if (networkError) {
                    console.log(`[Network error]: ${networkError}`);
                }
            }
        }
    );

    const client = new ApolloClient({
        link: errorLink.concat(authLink).concat(httpLink),
        cache: new InMemoryCache(),
        typeDefs: typeDefs,
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Client;
