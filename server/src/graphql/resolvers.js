'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

module.exports = {
  Query: {
    getEmployees: async (_, __, { dataSources, company }) => {
      // Check if company user exists in the context. If not returns error
      if (!company) {
        throw new Error('You must be logged to perform this action')
      }

      // When token is signed _id company property becomes sub
      // see login resolver
      const companyId = company.sub

      const employees = await dataSources.employeeAPI.getEmployees({
        companyId
      })

      return employees
    },
    getCategories: async (_, __, { dataSources, company }) => {
      // Check if company user exists in the context. If not returns error
      if (!company) {
        throw new Error('You must be logged to perform this action')
      }

      // When token is signed _id company property becomes sub
      // see login resolver
      const companyId = company.sub

      const categories = await dataSources.categoryAPI.getCategories({
        companyId
      })

      return categories
    }
  },

  Mutation: {
    login: async (_, { input }, { dataSources }) => {
      const { email, password } = input

      const company = await dataSources.companyAPI.getCompany({ email })

      if (!company) {
        throw new Error('Company no registered')
      }

      const passwordIsValid = await bcrypt.compare(password, company.password)

      if (!passwordIsValid) {
        throw new Error('Company user or password are incorrect')
      }

      const token = jwt.sign(
        {
          sub: company.uuid,
          name: company.name,
          email: company.email
        },
        config.secret
      )

      return token
    },

    signup: async (_, { input }, { dataSources }) => {
      const createdCompany = await dataSources.companyAPI.createCompany({
        company: input
      })

      if (createdCompany === null) {
        throw new Error('Company email is already in use')
      }

      const newCompany = {
        sub: createdCompany.uuid,
        name: input.name,
        email: input.email
      }
      const token = jwt.sign(newCompany, config.secret)

      return token
    },
    createEmployee: async (_, { input }, { dataSources, company }) => {
      if (!company) {
        throw new Error('You must be logged to perform this action')
      }

      const createdEmployee = await dataSources.employeeAPI.createEmployee({
        employee: { ...input, companyId: company.sub }
      })

      return createdEmployee
    },
    updateEmployee: () => {},
    deleteEmployee: () => {},
    createCategory: async (_, { input }, { dataSources, company }) => {
      if (!company) {
        throw new Error('You must be logged to perform this action')
      }

      const createdCategoryId = await dataSources.categoryAPI.createCategory({
        category: input
      })

      return createdCategoryId
    },
    updateCategory: () => {},
    deleteCategory: () => {}
  }
}
