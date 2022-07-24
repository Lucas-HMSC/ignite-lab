import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5zgure732qe01t72wi29i7l/master',
  cache: new InMemoryCache()
});