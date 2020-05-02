'use strict'

const jwt = require('jsonwebtoken')
const { config } = require('../config')

function verifyToken(token) {
  try {
    return token ? jwt.verify(token, config.secret) : null
  } catch (error) {
    return null
  }
}

module.exports = verifyToken
