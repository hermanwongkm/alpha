import { createClient, defaultExchanges } from 'urql'

//all operations are controlled by a central client. 
//This client is responsible for managing GraphQL operations and sending requests.
// This includes things like queries, mutations, and subscriptions.

const client = createClient({
    url: 'http://localhost:8080/graphql',
});

export default client