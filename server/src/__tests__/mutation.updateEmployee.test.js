'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')

const { updateEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.updateEmployee', () => {
  test('Should update an employee with a logged user company', async () => {
    const response = await resolvers.Mutation.updateEmployee(
      null,
      { input: {} },
      mockContext
    )

    expect(updateEmployee).toHaveBeenCalledTimes(1)
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Employee updated successfully'
    })
  })

  test('Should fails when there is not a company user logged', async () => {
    const response = await resolvers.Mutation.updateEmployee(
      null,
      { input: {} },
      { ...mockContext, company: null }
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'You must be logged to perform this action'
    })
  })

  test('Should returns an error when the update is not successful', async () => {
    updateEmployee.mockResolvedValueOnce(null)

    const response = await resolvers.Mutation.updateEmployee(
      null,
      { input: {} },
      mockContext
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: `Couldn't make the update`
    })
  })
})
