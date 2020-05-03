'use strict'

const Mongo = require('../lib/mongo')
const { ObjectID } = require('mongodb')
const { DataSource } = require('apollo-datasource')

class CategoryAPI extends DataSource {
  constructor() {
    super()
    this.collection = 'categories'
    this.database = new Mongo()
  }

  // DataSource method to has access to the context
  initialize(config) {
    this.context = config.context
  }

  async getCategoriesAndCompaniesId({ companyId }) {
    const query = companyId && { companyId: { $eq: companyId } }
    const categoriesAndCompaniesId = await this.database.getAll(
      `${this.collection}_companies`,
      query
    )
    return categoriesAndCompaniesId || []
  }

  async getCategories({ name }) {
    const query = name && { name: { $eq: name } }
    const categories = await this.database.getAll(this.collection, query)
    return categories || []
  }

  async createCategory({ category }) {
    const [categoryExists] = await this.getCategories({ name: category.name })
    const { company } = this.context

    // If category already exists just add it to `categories_companies collection`
    // and return the id of the category that exists
    if (categoryExists) {
      const [categoryAndCompanyId] = await this.getCategoriesAndCompaniesId({
        companyId: company.sub
      })

      // Check if the company is already registered with the companyId
      if (!categoryAndCompanyId) {
        await this.database.create(`${this.collection}_companies`, {
          categoryId: categoryExists._id.toString(),
          companyId: company.sub
        })
      }
      return categoryExists._id
    }

    const createdCategoryId = await this.database.create(
      this.collection,
      category
    )
    // Register the companyId and categoryId in collection `categories_companies`
    await this.database.create(`${this.collection}_companies`, {
      categoryId: createdCategoryId,
      companyId: company.sub
    })

    return createdCategoryId
  }
}

module.exports = CategoryAPI
