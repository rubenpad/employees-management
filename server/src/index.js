'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { bold } = require('kleur')

const { config } = require('./config')
const verifyToken = require('./utils/verifyToken')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')
const { createStore } = require('./utils/createStore')

const CompanyAPI = require('./datasources/company')
const EmployeeAPI = require('./datasources/employee')
const CategoryAPI = require('./datasources/category')

// creates a database connection with sequelize once
const store = createStore()

const dataSources = () => ({
  companyAPI: new CompanyAPI({ store }),
  employeeAPI: new EmployeeAPI({ store }),
  categoryAPI: new CategoryAPI({ store })
})

const context = async ({ req }) => {
  const bearerToken = req.headers.authorization || ''
  const token = bearerToken.split(' ')[1]
  const company = verifyToken(token)

  return { company }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: config.dev ? true : false
})
const app = express()
server.applyMiddleware({ app })

app.listen(config.port, () => {
  console.log(
    bold(
      `[server] ready on http://localhost:${config.port}${server.graphqlPath}`
    )
  )
})
