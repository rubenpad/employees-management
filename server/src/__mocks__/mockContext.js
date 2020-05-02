'use strict'

module.exports = {
  company: {
    // This is the company object created in the context
    sub: '5eac1de0fc13ae56ea000011',
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
    }
  }
}
