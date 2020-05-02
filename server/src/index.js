'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const isEmail = require('isemail')
const { bold } = require('kleur')

const { config } = require('./config')
const verifyToken = require('./utils/verifyToken')
const CompanyAPI = require('./datasources/company')
const EmployeeAPI = require('./datasources/employee')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schema')

const dataSources = () => ({
  companyAPI: new CompanyAPI(),
  employeeAPI: new EmployeeAPI()
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
  context
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
