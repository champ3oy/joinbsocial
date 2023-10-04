import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://prod.joinb.social/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "7LGcjXeFAan5R9g0cRFI6OomnkXPzD3y";
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

// Bearer 7LGcjXeFAan5R9g0cRFI6OomnkXPzD3y
