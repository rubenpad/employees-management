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
    signup: async (_, { data }, { dataSources }) => {
      const { email } = data

      // Check if the company already have been created, if true
      // throw a new error
      const company = await dataSources.companyAPI.getCompany({ email })
      if (company) throw new Error('Company email is already in use')

      const createdCompanyId = await dataSources.companyAPI.createCompany({
        company: data
      })

      const newCompany = { id: createdCompanyId, name: data.name, email }
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
