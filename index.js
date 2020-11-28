'use strict'

const validRef = require('is-git-ref-name-valid')
const bad = /^(-|HEAD$)/

// Last updated for git 2.29.0
module.exports = function validBranch (name) {
  return validRef(name, true) && !bad.test(name)
}
