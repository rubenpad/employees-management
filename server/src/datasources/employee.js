'use strict'

const Mongo = require('../lib/mongo')

class EmployeeAPI {
  constructor() {
    this.collection = 'employees'
    this.database = new Mongo()
  }

  async getEmployees({ companyId }) {
    const employees = await this.database.getAll(this.collection, { companyId })
    return employees || []
  }
}

module.exports = EmployeeAPI
