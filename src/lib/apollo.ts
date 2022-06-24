import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r15myx0gg201z18sb8en3c/master',
    cache: new InMemoryCache(),
})