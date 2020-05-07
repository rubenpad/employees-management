'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { fakeCompany } = require('../__mocks__/utils')

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
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Created successfully'
    })
  })

  test('Should raise an error when user company already exists', async () => {
    createCompany.mockResolvedValueOnce(null)

    const response = await resolvers.Mutation.signup(
      null,
      { input: fakeCompany },
      mockContext
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'Company email is already in use'
    })
  })
})
