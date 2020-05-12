'use strict'

const { Sequelize, DataTypes } = require('sequelize')
const { config } = require('../config')

function createStore() {
  const setup =
    process.env.NODE_ENV === 'production' ? config.db : config.dbDev
  const database = new Sequelize({ ...setup })

  const companies = database.define('company', {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  const categories = database.define('category', {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  const employees = database.define('employee', {
    id: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  const companiesCategories = database.define(
    'companies_categories',
    {
      id: {
        type: DataTypes.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      }
    },
    { timestamps: false }
  )

  // Companies - employees relation
  companies.hasMany(employees)
  employees.belongsTo(companies)

  // Categories - employees relation
  categories.hasMany(employees)
  employees.belongsTo(categories)

  // Many to Many relation between companies and categories
  companies.belongsToMany(categories, { through: companiesCategories })
  categories.belongsToMany(companies, { through: companiesCategories })
  companies.hasMany(companiesCategories)
  companiesCategories.belongsTo(companies)
  categories.hasMany(companiesCategories)
  companiesCategories.belongsTo(categories)

  // Create tables
  if (process.env.SETUP === 'true') {
    database.sync({ force: true })
  }

  return { database, companies, categories, employees, companiesCategories }
}

module.exports = { createStore }
