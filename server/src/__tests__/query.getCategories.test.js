'use strict'

const resolvers = require('../graphql/resolvers')

const mockContext = require('../__mocks__/mockContext')
const categoriesMock = require('../__mocks__/categoriesMock')
const { companyUuid } = require('../__mocks__/utils')

const { getCategories } = mockContext.dataSources.categoryAPI

const categories = categoriesMock.filter((category) => {
  return category.companyId === companyUuid
})

describe('[Query.categories]', () => {
  test('Should returns the project categories from logged company', async () => {
    getCategories.mockReturnValueOnce(categories)

    const categoriesResponse = await resolvers.Query.getCategories(
      null,
      {},
      mockContext
    )

    expect(getCategories).toHaveBeenCalledTimes(1)
    expect(categoriesResponse).toEqual(categories)
  })

  test('Should raise an error if there is not a user company logged', async () => {
    try {
      await resolvers.Query.getCategories(
        null,
        {},
        { ...mockContext, company: null }
      )
    } catch (error) {
      expect(error.message).toBe('You must be logged to perform this action')
    }
  })
})
