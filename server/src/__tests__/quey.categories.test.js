'use strict'

const resolvers = require('../graphql/resolvers')

const mockContext = require('../__mocks__/mockContext')
const categoriesAndCompaniesIdMock = require('../__mocks__/categoriesAndCompaniesId')
const categoriesMock = require('../__mocks__/categoriesMock')
const { companyId } = require('../__mocks__/utils')

const {
  getCategories,
  getCategoriesAndCompaniesId
} = mockContext.dataSources.categoryAPI

// Get from collection companies_categories items with match
// of companyId
const categoriesAndCompaniesId = categoriesAndCompaniesIdMock.filter((item) => {
  return item.companyId === companyId
})

const categories = categoriesMock.reduce((acc, current) => {
  categoriesAndCompaniesId.forEach((categoryAndCompany) => {
    if (current._id === categoryAndCompany.categoryId) {
      acc.push(current)
    }

    return acc
  })
}, [])

describe('[Query.categories]', () => {
  test('Should returns the project categories from logged company', async () => {
    getCategoriesAndCompaniesId.mockReturnValueOnce(categoriesAndCompaniesId)
    getCategories.mockReturnValueOnce(categoriesMock)

    const categoriesResponse = await resolvers.Query.categories(
      null,
      {},
      mockContext
    )
    
    expect(getCategoriesAndCompaniesId).toHaveBeenCalledTimes(1)
    expect(getCategoriesAndCompaniesId).toHaveReturnedWith(categoriesAndCompaniesId)
    expect(getCategories).toHaveBeenCalledTimes(1)
    expect(categoriesResponse).toEqual(categories)
  })
})
