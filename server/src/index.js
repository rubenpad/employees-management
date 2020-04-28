'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { bold } = require('kleur')

const { config } = require('./config')
const typeDefs = require('./schema')
const server = new ApolloServer({ typeDefs })
const app = express()
server.applyMiddleware({ app })

app.listen(config.port, () => {
  console.log(
    bold(
      `[server] ready on http://localhost:${config.port}${server.graphqlPath}`
    )
  )
})
