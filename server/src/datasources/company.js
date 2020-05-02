'use strict'

const bcrypt = require('bcrypt')
const Mongo = require('../lib/mongo')

class CompanyAPI {
  constructor() {
    this.collection = 'companies'
    this.database = new Mongo()
  }

  async getCompany({ email }) {
    const [company] = await this.database.getAll(this.collection, { email })

    return company
  }

  async createCompany({ company }) {
    const { name, email, password } = company
    const hashedPassword = await bcrypt.hash(password, 10)
    const createdCompanyId = await this.database.create(this.collection, {
      name,
      email,
      password: hashedPassword
    })

    return createdCompanyId
  }
}

module.exports = CompanyAPI
