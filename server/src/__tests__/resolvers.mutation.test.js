'use strict'

const resolvers = require('../graphql/resolvers')
const jwt = require('jsonwebtoken')
const { config } = require('../config')

const id = 'ABCD1234'
const fakeCompany = { name: 'MGC', email: 'mgc@mail.com', password: 'secret' }
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

describe('[Mutation.signup]', () => {
  const { createCompany, getCompany } = mockContext.dataSources.companyAPI

  test('Signup should works to register a new company an returns a token', async () => {
    createCompany.mockResolvedValueOnce(id)

    const response = await resolvers.Mutation.signup(
      null,
      { data: fakeCompany },
      mockContext
    )
    expect(getCompany).toBeCalledWith({ email: fakeCompany.email })
    expect(createCompany).toBeCalledWith({ company: fakeCompany })
    expect(response).toEqual(fakeToken)
  })

  test('Signup should returns a error message when the company email is already in use', async () => {
    getCompany.mockResolvedValueOnce(fakeCompany)

    try {
      const response = await resolvers.Mutation.signup(
        null,
        { data: fakeCompany },
        mockContext
      )
    } catch (error) {
      expect(error).toEqual(new Error('Company email is already in use'))
    }
  })
})
