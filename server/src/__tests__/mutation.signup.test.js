'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const {
  hashedPassword,
  fakeCompany,
  fakeToken,
  companyId
} = require('../__mocks__/utils')

const { createCompany, getCompany } = mockContext.dataSources.companyAPI

describe('[Mutation.signup]', () => {
  beforeEach(() => {
    getCompany.mockClear()
  })

  test('Signup should works to register a new company an returns a token', async () => {
    createCompany.mockResolvedValueOnce(companyId)

    const response = await resolvers.Mutation.signup(
      null,
      { input: fakeCompany },
      mockContext
    )
    expect(getCompany).toBeCalledWith({ email: fakeCompany.email })
    expect(createCompany).toBeCalledWith({ company: fakeCompany })
    expect(response).toEqual(fakeToken)
  })

  test('Signup should returns an error message when the company email is already in use', async () => {
    getCompany.mockResolvedValueOnce(fakeCompany)

    try {
      await resolvers.Mutation.signup(null, { input: fakeCompany }, mockContext)
    } catch (error) {
      expect(error.message).toEqual('Company email is already in use')
    }
  })
})

describe('Mutation.login', () => {
  beforeEach(() => {
    getCompany.mockClear()
  })

  test('Should allow logging with a registered user', async () => {
    const storedCompany = {
      ...fakeCompany,
      password: hashedPassword,
      _id: companyId
    }
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
    try {
      await resolvers.Mutation.login(
        null,
        {
          input: { ...fakeCompany, email: 'unregistered@mail.com' }
        },
        mockContext
      )
      expect(getCompany).toHaveBeenCalledTimes(1)
      expect(getCompany).toHaveBeenCalledWith({
        email: 'unregistered@mail.com'
      })
      expect(getCompany).toHaveReturnedWith(undefined)
    } catch (error) {
      expect(error.message).toEqual('Company no registered')
    }
  })

  test('Should returns an error when password is wrong', async () => {
    getCompany.mockResolvedValueOnce(fakeCompany)

    try {
      await resolvers.Mutation.login(
        null,
        { input: { ...fakeCompany, password: 'wrong' } },
        mockContext
      )

      expect(getCompany).toHaveBeenCalledTimes(1)
      expect(getCompany).toHaveBeenCalledWith({ email: fakeCompany.email })
    } catch (error) {
      expect(error.message).toEqual('Company user or password are incorrect')
    }
  })
})
