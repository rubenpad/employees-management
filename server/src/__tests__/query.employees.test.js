'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const employeesMock = require('../__mocks__/employeesMock')
const { companyId } = require('../__mocks__/utils')

const { getEmployees } = mockContext.dataSources.employeeAPI
const employeesByCompany = employeesMock.filter(
  (employee) => employee.companyId === companyId
)

describe('[Query.employees]', () => {
  test('Should returns the employees list of logged user company', async () => {
    getEmployees.mockReturnValueOnce(employeesByCompany)

    const employees = await resolvers.Query.employees(null, {}, mockContext)
    expect(getEmployees).toHaveBeenCalledTimes(1)
    expect(employees).toEqual(employeesByCompany)
  })

  test('Should returns an error if there is not a company user logged', async () => {
    try {
      await resolvers.Query.employees(
        null,
        {},
        // mockContext by default has a company
        // so here pass that value to null for test case
        { ...mockContext, company: null }
      )
    } catch (error) {
      expect(error.message).toEqual('You must be logged to perform this action')
    }
  })
})
