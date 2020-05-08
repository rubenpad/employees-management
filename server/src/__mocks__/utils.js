'use strict'

const jwt = require('jsonwebtoken')
const { config } = require('../config')
// Fake data to test purposes

const hashedPassword =
  '$2b$10$v6KrB3BkAIgsei7.o2t9.eItzfK2Zf7sloAGW12d5O.co4.OVdPX2'

const companyId = 1
const categoryId = 2
const employeeId = 3

const fakeCompany = {
  name: 'MGC',
  email: 'mgc@mail.com',
  password: 'secret'
}

// Sign token to make tests
const fakeToken = jwt.sign(
  {
    sub: companyId,
    name: fakeCompany.name,
    email: fakeCompany.email
  },
  config.secret,
  { expiresIn: '1h' }
)

module.exports = {
  companyId,
  categoryId,
  employeeId,
  hashedPassword,
  fakeCompany,
  fakeToken
}
