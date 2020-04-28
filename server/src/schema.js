'use strict'

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  enum ContractType {
    fullTime
    partTime
  }

  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: Int!
    salary: Int!
    birthDate: String!
    contractType(type: ContractType): String!
    categoryId: ID!
    city: String!
  }

  type Category {
    id: ID!
    name: String!
  }
`

module.exports = typeDefs
