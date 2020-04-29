'use strict'

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
    login: () => {},
    signup: async (_, { input }, { dataSources }) => {
      const { email } = input

      // Check if the company already have been created, if true
      // throw a new error
      const company = await dataSources.companyAPI.getCompany({ email })
      if (company) throw new Error('Company already exists')

      const createdCompanyId = await dataSources.companyAPI.createCompany({
        company: input
      })

      const newCompany = { id: createdCompanyId, email }
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
