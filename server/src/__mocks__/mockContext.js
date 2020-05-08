'use strict'

module.exports = {
  company: {
    // This is the fake company object created in the context
    // supposed to be logged
    sub: 1,
    name: 'mgc',
    email: 'mgc@mail.com',
    iat: '12345678'
  },
  dataSources: {
    companyAPI: {
      createCompany: jest.fn(),
      getCompany: jest.fn()
    },
    employeeAPI: {
      getEmployees: jest.fn(),
      createEmployee: jest.fn(),
      updateEmployee: jest.fn()
    },
    categoryAPI: {
      getCategories: jest.fn(),
      createCategory: jest.fn()
    }
  }
}
