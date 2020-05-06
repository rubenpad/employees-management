'use strict'

const { DataSource } = require('apollo-datasource')

class CompanyAPI extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async getCompany({ email }) {
    const company = await this.store.companies.findOne({ where: { email } })

    return company || {}
  }

  async createCompany({ company }) {
    /**
     * Sequelize.findOrCreate search for a resource and if it is not founded
     * create a new one with defaults arguments. This function returns two
     * values the resource created and a boolean indicating if the resource
     * was created or not.
     */
    const [company, created] = await this.store.companies.findOrCreate({
      where: { email: company.email },
      defaults: { ...company }
    })

    return created ? company : null
  }
}

module.exports = CompanyAPI
