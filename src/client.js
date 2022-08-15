import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_HOST,
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri: process.env.REACT_APP_SERVER_HOST,
        fetchOptions: {
          mode: 'no-cors'
        }
    }),
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