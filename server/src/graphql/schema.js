'use strict'

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Company {
    id: ID!
    name: String!
    email: String!
  }

  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    salary: Int!
    city: String!
    status: String!
    categoryId: ID!
    companyId: ID!
  }

  type Category {
    id: ID!
    name: String!
    companyId: Int!
  }

  input CompanyCredentials {
    name: String
    email: String!
    password: String!
  }

  input CategoryInput {
    name: String!
  }

  input EmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
    salary: Int!
    city: String!
    status: String!
    categoryId: Int!
  }

  type Query {
    employees: [Employee]!
    categories: [Category]!
  }

  type Response {
    success: Boolean!
    error: Boolean!
    message: String
  }

  type loginResponse {
    token: String!
    email: String!
  }

  type Mutation {
    login(input: CompanyCredentials!): loginResponse!
    signup(input: CompanyCredentials!): Response!
    createEmployee(input: EmployeeInput!): Response!
    updateEmployee(id: ID!, input: EmployeeInput): Response!
    deleteEmployee(id: ID!): Response!
    createCategory(input: CategoryInput!): Response!
    updateCategory(id: ID!, input: CategoryInput): Response!
    deleteCategory(id: ID!): Response!
  }
`

module.exports = typeDefs
