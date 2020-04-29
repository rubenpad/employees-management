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

  type ProjectCategory {
    id: ID!
    name: String
  }

  input CompanyCredentials {
    name: String
    email: String!
    password: String!
  }

  input ProjectCategoryInput {
    name: String!
  }

  input EmployeeInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    salary: Int!
    birthDate: String!
    city: String
    projectCategoryId: ID!
  }

  type Query {
    employees: [Employee]!
    employee(id: ID!): Employee!
    projectCategories: [ProjectCategory]!
    projectCategory(id: ID!): ProjectCategory!
  }

  type Mutation {
    login(input: CompanyCredentials!): String
    signup(input: CompanyCredentials!): String
    createEmployee(input: EmployeeInput!): ID!
    updateEmployee(id: ID! input: EmployeeInput): ID!
    deleteEmployee(id: ID!): String
    createProjectCategory(input: ProjectCategoryInput!): ID!
    updateProjectCategory(id: ID! input: ProjectCategoryInput): ID
    deleteProjectCategory(id: ID!): String
  }
`

module.exports = typeDefs
