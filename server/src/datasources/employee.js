'use strict'

const { DataSource } = require('apollo-datasource')

class EmployeeAPI extends DataSource {
  constructor({ store }) {
    super()
    this.store = store
  }

  async getEmployees({ companyId }) {
    const employees = await this.store.employees.findAll({
      where: { companyId }
    })

    return employees || []
  }

  async createEmployee({ employee }) {
    const [createdEmployee, created] = await this.store.employees.findOrCreate({
      where: { email: employee.email },
      defaults: { ...employee }
    })

    return created ? createdEmployee : null
  }
}

module.exports = EmployeeAPI
