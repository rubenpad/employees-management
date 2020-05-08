'use strict'

const { DataSource } = require('apollo-datasource')

class CategoryAPI extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  initialize({ context }) {
    this.context = context
  }

  async getCategories({ companyId }) {
    const categories = await this.store.categories.findAll({
      attributes: ['id', 'name'],
      include: {
        model: this.store.companiesCategories,
        where: { companyId }
      }
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

    const relation = await this.store.companiesCategories.create({
      categoryId: createdCategory.id,
      companyId: this.context.company.sub
    })

    return created && relation ? createdCategory : null
  }

  async updateCategory({ id, category }) {
    const updatedCategory = await this.store.categories.update(category, {
      where: { id }
    })

    return updatedCategory ? updatedCategory : null
  }

  async deleteCategory({ id }) {
    const deletedCategory = await this.store.categories.destroy({
      where: { id }
    })

    return deletedCategory ? deletedCategory : null
  }
}

module.exports = CategoryAPI
