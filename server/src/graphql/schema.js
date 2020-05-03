'use strict'

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Company {
    id: ID!
    name: String
    email: String
  }

  type Employee {
    id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    salary: Int
    birthDate: String
    createdAt: String
    updatedAt: String
    isActive: Boolean
    city: String
    projectCategoryId: ID
    companyId: ID!
  }

  type Category {
    id: ID!
    name: String
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
    phone: String!
    salary: Int!
    birthDate: String!
    city: String!
    category: String!
  }

  type Query {
    employees: [Employee]!
    employee(id: ID!): Employee!
    categories: [Category]
  }

  type Mutation {
    login(input: CompanyCredentials!): String
    signup(input: CompanyCredentials!): String
    createEmployee(input: EmployeeInput!): ID!
    updateEmployee(id: ID!, input: EmployeeInput): ID!
    deleteEmployee(id: ID!): String
    createCategory(input: CategoryInput!): ID!
    updateCategory(id: ID!, input: CategoryInput): ID
    deleteCategory(id: ID!): String
  }
`

module.exports = typeDefs
