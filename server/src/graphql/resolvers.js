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

      const employees = await dataSources.employeeAPI.getEmployees({
        companyId: company.sub
      })

      return employees
    },
    categories: async (_, __, { dataSources, company }) => {
      // Check if company user exists in the context. If not returns error
      if (!company) {
        throw new Error('You must be logged to perform this action')
      }

      const categories = await dataSources.categoryAPI.getCategories({
        companyId: company.sub
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
          sub: company.id,
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
        return {
          success: false,
          error: true,
          message: 'Company email is already in use'
        }
      }

      return {
        success: true,
        error: false,
        message: 'Created successfully'
      }
    },
    createEmployee: async (_, { input }, { dataSources, company }) => {
      if (!company) {
        return {
          success: false,
          error: true,
          message: 'You must be logged to perform this action'
        }
      }

      const createdEmployee = await dataSources.employeeAPI.createEmployee({
        employee: { ...input, companyId: company.sub }
      })

      if (createdEmployee === null) {
        return {
          success: false,
          error: true,
          message: 'Employee email is already in use'
        }
      }

      return {
        success: true,
        error: false,
        message: 'Employee created successfully'
      }
    },
    updateEmployee: () => {},
    deleteEmployee: () => {},
    createCategory: async (_, { input }, { dataSources, company }) => {
      if (!company) {
        return {
          success: false,
          error: true,
          message: 'You must be logged to perform this action'
        }
      }

      const createdCategory = await dataSources.categoryAPI.createCategory({
        category: { ...input, companyId: company.sub }
      })

      if (createdCategory === null) {
        return {
          success: false,
          error: true,
          message: 'Try again'
        }
      }

      return {
        success: true,
        error: false,
        message: 'Category created successfully'
      }
    },
    updateCategory: () => {},
    deleteCategory: () => {}
  }
}
