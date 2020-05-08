'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { companyId, categoryId, fakeEmployee } = require('../__mocks__/utils')

const { createEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.createEmployee]', () => {
  test('Should creates an employee with company user logged', async () => {
    createEmployee.mockResolvedValueOnce({
      id: 1,
      companyId,
      ...fakeEmployee
    })

    const response = await resolvers.Mutation.createEmployee(
      null,
      { input: fakeEmployee },
      mockContext
    )

    expect(createEmployee).toHaveBeenCalledTimes(1)
    expect(createEmployee).toHaveBeenCalledWith({
      employee: { ...fakeEmployee, companyId }
    })
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Employee created successfully'
    })
  })

  test('Should fails when try to create an employee and company user is no logged', async () => {
    const response = await resolvers.Mutation.createEmployee(
      null,
      { input: fakeEmployee },
      { ...mockContext, company: null }
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'You must be logged to perform this action'
    })
  })
})
