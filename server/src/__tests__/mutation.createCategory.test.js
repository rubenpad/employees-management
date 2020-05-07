'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { companyId } = require('../__mocks__/utils')

const { createCategory } = mockContext.dataSources.categoryAPI

const newCategory = { name: 'Civil Engineering' }

describe('[Mutation.createCategory]', () => {
  test('Should creates a new category with company user logged', async () => {
    createCategory.mockResolvedValueOnce({
      ...newCategory,
      companyId,
      id: 1
    })

    const response = await resolvers.Mutation.createCategory(
      null,
      { input: newCategory },
      mockContext
    )

    expect(createCategory).toHaveBeenCalledTimes(1)
    expect(createCategory).toHaveBeenCalledWith({
      category: { ...newCategory, companyId }
    })
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Category created successfully'
    })
  })

  test('Should fails when try to create a new category and no company user is logged', async () => {
    const response = await resolvers.Mutation.createCategory(
      null,
      { input: newCategory },
      { ...mockContext, company: null }
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: 'You must be logged to perform this action'
    })
  })
})
