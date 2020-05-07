'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { companyId, categoryId } = require('../__mocks__/utils')

const newEmployee = {
  firstName: 'Mark',
  lastName: 'Manson',
  email: 'manson@mail.com',
  salary: 4000,
  birthDate: '2000/05/12',
  city: 'Bogotá',
  isActive: true,
  category: 'software engineering',
  contractType: 'full time'
}

const { createEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.createEmployee]', () => {
  test('Should creates an employee with company user logged', async () => {
    createEmployee.mockResolvedValueOnce({
      id: 1,
      companyId,
      categoryId,
      ...newEmployee
    })

    const response = await resolvers.Mutation.createEmployee(
      null,
      { input: newEmployee },
      mockContext
    )

    expect(createEmployee).toHaveBeenCalledTimes(1)
    expect(createEmployee).toHaveBeenCalledWith({
      employee: { ...newEmployee, companyId }
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
      { input: newEmployee },
      { ...mockContext, company: null }
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'You must be logged to perform this action'
    })
  })
})
