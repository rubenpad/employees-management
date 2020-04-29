'use strict'

const { DataSource } = require('apollo-datasource')
const isEmail = require('isemail')
const bcrypt = require('bcrypt')

class CompanyAPI extends DataSource {
  constructor({ database }) {
    super()
    this.collection = 'companies'
    this.database = database
  }

  initialize({ context }) {
    this.context = context
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
