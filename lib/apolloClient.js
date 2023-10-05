import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://prod.joinb.social/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "4kpxOjwJuS1OXT6sNMfeGTeYw6sWHZhX";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Bearer 4kpxOjwJuS1OXT6sNMfeGTeYw6sWHZhX
