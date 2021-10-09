import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `http://localhost:9000/graphql` as any,
  cache: new InMemoryCache(),
});
