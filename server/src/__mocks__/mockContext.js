'use strict'

module.exports = {
  company: {
    // This is the fake company object created in the context
    // supposed to be logged
    sub: '74dbaaae-6ec6-46b0-993d-94e630f33750',
    name: 'MGC',
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
      createEmployee: jest.fn()
    },
    categoryAPI: {
      getCategories: jest.fn(),
      createCategory: jest.fn()
    }
  }
}
