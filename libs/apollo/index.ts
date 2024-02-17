import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index", // FIXME: adding to env file
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;