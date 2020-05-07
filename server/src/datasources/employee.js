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

    console.log(employee.category)
    const category = await this.store.categories.findOne({
      where: { name: employee.category }
    })
    const [createdEmployee, created] = await this.store.employees.findOrCreate({
      where: { email: employee.email },
      defaults: { ...employee, categoryId: category.id }
    })

    return created ? createdEmployee : null
  }
}

module.exports = EmployeeAPI
