'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')
const { categoryUuid } = require('../__mocks__/utils')

const { createCategory } = mockContext.dataSources.categoryAPI

const newCategory = { uuid: categoryUuid, name: 'Civil Engineering' }

describe('[Mutation.createCategory]', () => {
  test('Should creates a new category with company user logged', async () => {
    createCategory.mockResolvedValueOnce({ id: 1, ...newCategory })

    const createdCategory = await resolvers.Mutation.createCategory(
      null,
      { input: newCategory },
      mockContext
    )

    expect(createCategory).toHaveBeenCalledTimes(1)
    expect(createCategory).toHaveBeenCalledWith({ category: newCategory })
    expect(createdCategory).toEqual({ id: 1, ...newCategory })
  })

  test('Should fails when try to create a new category and no company user is logged', async () => {
    try {
      await resolvers.Mutation.createCategory(
        null,
        { input: newCategory },
        { ...mockContext, company: null }
      )
    } catch (error) {
      expect(error.message).toEqual('You must be logged to perform this action')
    }
  })
})
