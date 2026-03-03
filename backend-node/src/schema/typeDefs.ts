export const typeDefs = `#graphql
  type Option {
    id: String!
    text: String!
    feedback: String!
  }

  type Question {
    id: String!
    text: String!
    hint: String!
    options: [Option!]!
    correctOptionId: String!
  }

  type Role {
    id: String!
    name: String!
    questions: [Question!]!
  }

  type Query {
    role(id: String!): Role
  }
`;
