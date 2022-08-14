import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
    uri: 'http://localhost:8080/api/graphql',
    credentials: true,
    withCredentials: true,
    //"Content-Type": `application/json`,
    //"Access-Control-Allow-Origin": `http://localhost:3000`,
});


const client = new ApolloClient({
    //uri: 'http://localhost:8080/api/graphql',
    cache: new InMemoryCache(),
    // ApolloLink: {
    //     mode: 'no-cors',
    // },
    link
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