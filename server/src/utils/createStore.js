'use strict'

const Sequelize = require('sequelize')
const { config } = require('../config')

function createStore() {
  const database = new Sequelize({
    ...config.db
  })

  const companies = database.define('company', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  })

  const categories = database.define('category', {
    name: Sequelize.STRING
  })

  const employees = database.define('employee', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    salary: Sequelize.INTEGER,
    birthDate: Sequelize.DATE,
    status: Sequelize.STRING,
    city: Sequelize.STRING,
    contractType: Sequelize.STRING
  })

  companies.hasMany(categories)
  companies.hasMany(employees)
  categories.hasOne(employees)

  return { database, companies, categories, employees }
}

module.exports = { createStore }
