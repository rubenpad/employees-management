'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

module.exports = {
  Query: {
    employees: async (_, __, { dataSources, company }) => {
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
    projectCategories: () => {},
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
          sub: company._id,
          name: company.name,
          email: company.email
        },
        config.secret
      )

      return token
    },

    signup: async (_, { input }, { dataSources }) => {
      const { email } = input

      // Check if the company already have been created, if true
      // throw a new error
      const company = await dataSources.companyAPI.getCompany({ email })
      if (company) throw new Error('Company email is already in use')

      const createdCompanyId = await dataSources.companyAPI.createCompany({
        company: input
      })

      const newCompany = {
        sub: createdCompanyId,
        name: input.name,
        email: input.email
      }
      const token = jwt.sign(newCompany, config.secret)

      return token
    },
    createEmployee: () => {},
    updateEmployee: () => {},
    deleteEmployee: () => {},
    createProjectCategory: () => {},
    updateProjectCategory: () => {},
    deleteProjectCategory: () => {}
  }
}
