'use strict'

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema.js')
const resolvers = require('./resolvers.js')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
