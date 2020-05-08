'use strict'

const resolvers = require('../graphql/resolvers')
const mockContext = require('../__mocks__/mockContext')

const { updateCategory } = mockContext.dataSources.categoryAPI

describe('[Mutation.updateCategory', () => {
  test('Should update a category with a logged user company', async () => {
    const response = await resolvers.Mutation.updateCategory(
      null,
      { id: 1, input: {} },
      mockContext
    )

    expect(updateCategory).toHaveBeenCalledTimes(1)
    expect(response).toEqual({
      success: true,
      error: false,
      message: 'Category updated successfully'
    })
  })

  test('Should returns an error when the update is not successful', async () => {
    updateCategory.mockResolvedValueOnce(null)

    const response = await resolvers.Mutation.updateCategory(
      null,
      { id: 1, input: {} },
      mockContext
    )

    expect(response).toEqual({
      success: false,
      error: true,
      message: `Couldn't do the update`
    })
  })
})
