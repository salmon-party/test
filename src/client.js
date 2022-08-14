import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: process.env.SERVER_HOST,
    cache: new InMemoryCache(),
    link: createHttpLink({
        uri: process.env.SERVER_HOST,
        fetchOptions: {
          mode: 'no-cors'
        }
    }),
});

client
    .query({
        query: gql`
        {
            stat {
                id
                color
            }
        }
    `,
    })
    .then((result) => console.log(result));

export default client;