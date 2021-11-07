//Queries:
// export const GET_ALL_USERS = gql`
//   query {
//     getAllUsers { //This is the schema
//       id //These are all the things you want to be returned
//       name
//       email
//       role
//       createdAt
//       updatedAt
//     }
//   }


const testQuery = `
query { 
  stockTransaction {
symbol
openPrice
openDate
closeDate
closePrice
} }
`
export default testQuery