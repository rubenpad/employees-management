'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

module.exports = {
  Query: {
    employees: () => {},
    employee: () => {},
    projectCategories: () => {},
    projectCategory: () => {}
  },

  Mutation: {
    login: async (_, { input }, { dataSources }) => {
      const { email, password } = input

      const company = await dataSources.companyAPI.getCompany({ email })

      if (!company) {
        return new Error('Company no registered')
      }

      const passwordIsValid = await bcrypt.compare(password, company.password)

      if (!passwordIsValid) {
        return new Error('Company user or password are incorrect')
      }

      const token = jwt.sign(
        {
          id: company.id,
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

      const newCompany = { id: createdCompanyId, name: input.name, email }
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
