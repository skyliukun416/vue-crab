'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  prefix: '"http://localhost:3002"',
  SERVER_PREFIX: '"http://localhost:3009"',
  WS_PREFIX: '"http://localhost:3008"'
})
