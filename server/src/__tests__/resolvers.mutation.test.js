'use strict'

const resolvers = require('../graphql/resolvers')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

const hashedPassword =
  '$2b$10$v6KrB3BkAIgsei7.o2t9.eItzfK2Zf7sloAGW12d5O.co4.OVdPX2'
const id = 'ABCD1234'
const fakeCompany = {
  id,
  name: 'MGC',
  email: 'mgc@mail.com',
  password: 'secret'
}
const fakeToken = jwt.sign(
  {
    id,
    name: fakeCompany.name,
    email: fakeCompany.email
  },
  config.secret
)

const mockContext = {
  dataSources: {
    companyAPI: {
      createCompany: jest.fn(),
      getCompany: jest.fn()
    }
  }
}

// Just for easy access to this functions
const { createCompany, getCompany } = mockContext.dataSources.companyAPI

describe('[Mutation.signup]', () => {
  beforeEach(() => {
    getCompany.mockClear()
  })

  test('Signup should works to register a new company an returns a token', async () => {
    createCompany.mockResolvedValueOnce(id)

    const response = await resolvers.Mutation.signup(
      null,
      { input: fakeCompany },
      mockContext
    )
    expect(getCompany).toBeCalledWith({ email: fakeCompany.email })
    expect(createCompany).toBeCalledWith({ company: fakeCompany })
    expect(response).toEqual(fakeToken)
  })

  test('Signup should returns a error message when the company email is already in use', async () => {
    getCompany.mockResolvedValueOnce(fakeCompany)

    try {
      // Simulate call to API. This should returns an error
      // that's because expect is used in catch.
      // I try  to made it with expect(() => {}).toThrow() as Jest
      // show it in the docs but that doesn't work for this case
      const response = await resolvers.Mutation.signup(
        null,
        { input: fakeCompany },
        mockContext
      )
    } catch (error) {
      expect(error).toEqual(new Error('Company email is already in use'))
    }
  })
})

describe('Mutation.login', () => {
  beforeEach(() => {
    getCompany.mockClear()
  })

  test('Should allow logging with a registered user', async () => {
    const storedCompany = { ...fakeCompany, password: hashedPassword }
    getCompany.mockResolvedValueOnce(storedCompany)

    const response = await resolvers.Mutation.login(
      null,
      { input: fakeCompany },
      mockContext
    )

    expect(getCompany).toHaveBeenCalledTimes(1)
    expect(getCompany).toHaveBeenCalledWith({ email: fakeCompany.email })

    expect(response).toEqual(fakeToken)
  })

  test('Should returns an error when try to login with a no registered user', async () => {
    const response = await resolvers.Mutation.login(
      null,
      {
        input: { ...fakeCompany, email: 'unregistered@mail.com' }
      },
      mockContext
    )

    expect(getCompany).toHaveBeenCalledTimes(1)
    expect(getCompany).toHaveBeenCalledWith({ email: 'unregistered@mail.com' })
    expect(getCompany).toHaveReturnedWith(undefined)
    expect(response).toEqual(new Error('Company no registered'))
  })

  test('Should returns an error when password is wrong', async () => {
    getCompany.mockResolvedValueOnce(fakeCompany)
    const response = await resolvers.Mutation.login(
      null,
      { input: { ...fakeCompany, password: 'wrong' } },
      mockContext
    )

    expect(getCompany).toHaveBeenCalledTimes(1)
    expect(getCompany).toHaveBeenCalledWith({ email: fakeCompany.email })
    expect(response).toEqual(
      new Error('Company user or password are incorrect')
    )
  })
})
