'use strict'

const Sequelize = require('sequelize')

function createStore() {
  const database = new Sequelize({
    dialect: 'sqlite',
    storage: './store.sqlite'
  })

  const company = database.define('company', {
    uuid: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  })

  const category = database.define('category', {
    uuid: Sequelize.STRING,
    name: Sequelize.STRING
  })

  const employee = database.define('employee', {
    uuid: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    salary: Sequelize.INTEGER,
    birthDate: Sequelize.DATE,
    status: Sequelize.STRING,
    city: Sequelize.STRING,
    contractType: Sequelize.STRING
  })

  company.hasMany(category)
  company.hasMany(employee)
  employee.hasOne(category)

  return { company, category, employee }
}

module.exports = createStore
