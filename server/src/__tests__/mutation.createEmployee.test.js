'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { companyUuid, employeeUuid } = require('../__mocks__/utils')

const newEmployee = {
  uuid: employeeUuid,
  firstName: 'Mark',
  lastName: 'Manson',
  email: 'manson@mail.com',
  salary: 4000,
  birthDate: '12/09/2000',
  city: 'Bogotá',
  isActive: true,
  category: 'software engineering',
  contractType: 'full time'
}

const { createEmployee } = mockContext.dataSources.employeeAPI

describe('[Mutation.createEmployee]', () => {
  test('Should creates an employee with company user logged', async () => {
    createEmployee.mockResolvedValueOnce({ id: 1, ...newEmployee })

    const createdEmployee = await resolvers.Mutation.createEmployee(
      null,
      { input: newEmployee },
      mockContext
    )

    expect(createEmployee).toHaveBeenCalledTimes(1)
    expect(createEmployee).toHaveBeenCalledWith({
      employee: { ...newEmployee, companyId: companyUuid }
    })
    expect(createdEmployee).toEqual({ id: 1, ...newEmployee })
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
