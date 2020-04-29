'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { bold } = require('kleur')

const { config } = require('./config')
const Mongo = require('./lib/mongo')
const CompanyAPI = require('./datasources/companies')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schema')

// Mongo class expose a connection and CRUD methods. It is passed as
// argument to datasources so each resolver has access to these
const database = new Mongo()
const dataSources = () => ({
  companyAPI: new CompanyAPI({ database })
})

const context = async ({ req }) => {}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
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
