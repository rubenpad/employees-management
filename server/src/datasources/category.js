'use strict'

const { DataSource } = require('apollo-datasource')

class CategoryAPI extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async getCategories({ companyId }) {
    const categories = await this.store.categories.findAll({
      where: { companyId }
    })

    return categories || []
  }

  async createCategory({ category }) {
    const [createdCategory, created] = await this.store.categories.findOrCreate(
      {
        where: { name: category.name },
        defaults: { ...category }
      }
    )

    return created ? createdCategory : null
  }
}

module.exports = CategoryAPI
