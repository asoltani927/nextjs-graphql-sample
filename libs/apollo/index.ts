import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const createApolloClient = () => {

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // TODO: adding Sentry for capturing errors
    // TODO: or adding Toast message for showing errors to client and sth
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  // FIXME: adding to env file
  const httpLink = new HttpLink({ uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index' })

  return new ApolloClient({
    // uri: "",
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
  });
};

export default createApolloClient;