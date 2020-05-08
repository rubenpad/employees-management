'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')

const { deleteEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.deleteEmployee]', () => {
  test('Should delete successfully an employee from employees list of company user logged', async () => {
    const response = await resolvers.Mutation.deleteEmployee(
      null,
      { id: 1 },
      mockContext
    )

    expect(deleteEmployee).toHaveBeenCalledTimes(1)
    expect(deleteEmployee).toHaveBeenCalledWith({ id: 1 })
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Employee deleted successfully'
    })
  })

  test('Should fails when try to delete an employee and there is not a company user logged', async () => {
    const response = await resolvers.Mutation.deleteEmployee(
      null,
      { id: 1 },
      { ...mockContext, company: null }
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'You must be logged to perform this action'
    })
  })
})
