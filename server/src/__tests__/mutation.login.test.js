'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { fakeCompany, hashedPassword, fakeToken } = require('../__mocks__/utils')

const { getCompany } = mockContext.dataSources.companyAPI

describe('[Mutation.login]', () => {
  const storedCompany = { ...fakeCompany, password: hashedPassword, id: 1 }

  test('Should allow logging with a registered user company', async () => {
    getCompany.mockResolvedValueOnce(storedCompany)

    const response = await resolvers.Mutation.login(
      null,
      {
        input: fakeCompany
      },
      mockContext
    )

    expect(getCompany).toHaveBeenCalledTimes(1)
    expect(getCompany).toHaveBeenCalledWith({ email: fakeCompany.email })
    expect(response).toEqual({ token: fakeToken, email: fakeCompany.email })
  })

  test('Should raise an error when try to logging with a no registered user company', async () => {
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
    getCompany.mockResolvedValueOnce(storedCompany)

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
