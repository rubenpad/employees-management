'use strict'

const Mongo = require('../lib/mongo')

class CategoryAPI {
  constructor() {
    this.collection = 'categories'
    this.database = new Mongo()
  }

  async getCategoriesAndCompaniesId({ companyId }) {
    const categoriesAndCompaniesId = await this.database.getAll(
      `${this.collection}_companies`,
      { companyId }
    )
    return categoriesAndCompaniesId
  }

  async getCategories() {
    const categories = await this.database.getAll(this.collection)
    return categories
  }
}

module.exports = CategoryAPI
