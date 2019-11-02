const typeDefs = `
  scalar DateTime

  type Mutation {
    sendMessage(fullname: String!, phone: String, email: String!, subject: String!, message: String!, humanKey: String!): Contact!
  }

  type Query {
    contacts: [Contact]!
  }

  type Contact {
    id: ID!
    fullname: String!
    phone: String
    email: String!
    subject: String!
    message: String!
    updatedAt: String!
    createdAt: String!
  }
`

export default typeDefs
