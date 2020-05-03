'use strict'

module.exports = {
  company: {
    // This is the company object created in the context
    sub: '5eada8d4fc13ae01fc000000',
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
      getEmployees: jest.fn()
    },
    categoryAPI: {
      getCategories: jest.fn(),
      getCategoriesAndCompaniesId: jest.fn(),
      createCategory: jest.fn()
    }
  }
}
