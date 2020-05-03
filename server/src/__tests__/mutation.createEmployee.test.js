'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { companyId, employeeId } = require('../__mocks__/utils')

const newEmployee = {
  firstName: 'Mark',
  lastName: 'Manson',
  email: 'manson@mail.com',
  phone: 33412943,
  salary: 4000,
  birthDate: '12/09/20',
  city: 'Bogotá',
  category: 'Software Engineering'
}

const { createEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.createEmployee]', () => {
  test('Should create an employee with company user logged', async () => {
    createEmployee.mockReturnValueOnce(employeeId)

    const createdEmployeeId = await resolvers.Mutation.createEmployee(
      null,
      { input: newEmployee },
      mockContext
    )

    expect(createEmployee).toHaveBeenCalledTimes(1)
    expect(createEmployee).toHaveBeenCalledWith({
      employee: { ...newEmployee, companyId }
    })
    expect(createdEmployeeId).toEqual(employeeId)
  })

  test('Should fails when try to create an employee and company user is no logged', async () => {
    try {
      await resolvers.Mutation.createEmployee(
        null,
        { input: newEmployee },
        { ...mockContext, company: null }
      )
    } catch (error) {
      expect(error.message).toEqual('You must be logged to perform this action')
    }
  })
})
