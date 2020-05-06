'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { fakeCompany, fakeToken } = require('../__mocks__/utils')

const { createCompany } = mockContext.dataSources.companyAPI

describe('[Mutation.signup]', () => {
  test('Should creates a new company and returns a valid token', async () => {
    createCompany.mockResolvedValueOnce(fakeCompany)

    const response = await resolvers.Mutation.signup(
      null,
      { input: fakeCompany },
      mockContext
    )

    expect(createCompany).toBeCalledWith({ company: fakeCompany })
    expect(response).toEqual(fakeToken)
  })

  test('Should raise an error when user company already exists', async () => {
    createCompany.mockResolvedValueOnce(null)

    try {
      await resolvers.Mutation.signup(null, { input: fakeCompany }, mockContext)
    } catch (error) {
      expect(error.message).toBe('Company email is already in use')
    }
  })
})
