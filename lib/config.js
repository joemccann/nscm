'use strict'

const ConfigStore = require('configstore')
const pkg = require('../package')

// Valid configuration properties
const valid = [
  'registry',
  'token',
  'concurrency',
  'publicRegistry',
  'clientId',
  'authProxy',
  'redirectUri',
  'authDomain'
]

const defaults = {
  concurrency: 15,
  publicRegistry: 'https://registry.npmjs.org',
  clientId: 'Ib0SpoV1Cx3hRaYEVJU523ZjFxmZYzfT',
  authProxy: 'nodesource.registry.nodesource.io',
  redirectUri: 'https://platform.nodesource.io/pkce',
  authDomain: 'nodesource.auth0.com'
}

const store = new ConfigStore(pkg.name, defaults)

module.exports = {
  store: store,
  valid: valid,
  defaults: defaults
}
