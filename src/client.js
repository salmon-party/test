import { ApolloClient, HttpLink, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            {
                hello
            }
        `
    })
    .then((result) => console.log("result", result));

export default client;