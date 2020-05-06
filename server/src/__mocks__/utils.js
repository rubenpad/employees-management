'use strict'

const jwt = require('jsonwebtoken')
const { config } = require('../config')
// Fake data to test purposes

const hashedPassword =
  '$2b$10$v6KrB3BkAIgsei7.o2t9.eItzfK2Zf7sloAGW12d5O.co4.OVdPX2'

const companyUuid = '74dbaaae-6ec6-46b0-993d-94e630f33750'
const categoryUuid = '74dbaaae-6ec6-46b0-993d-94e630f33752'
const employeeUuid = '74dbaaae-6ec6-46b0-993d-94e630f33753'

const fakeCompany = {
  uuid: '74dbaaae-6ec6-46b0-993d-94e630f33750',
  name: 'MGC',
  email: 'mgc@mail.com',
  password: 'secret'
}

// Sign token to make tests
const fakeToken = jwt.sign(
  {
    sub: fakeCompany.uuid,
    name: fakeCompany.name,
    email: fakeCompany.email
  },
  config.secret
)

module.exports = {
  companyUuid,
  categoryUuid,
  employeeUuid,
  hashedPassword,
  fakeCompany,
  fakeToken
}
