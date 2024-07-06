const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    input createUserInput {
        name: String!
        email: String!
        password: String!
    }

    type Query {
        getUsers: [User]
        getUser(email:String!,password:String!):[User]
    }

    type Mutation {
        createUser(input: createUserInput!): User
        changePass(id: ID!, password: String!): User
    }
`;

module.exports = typeDefs;
