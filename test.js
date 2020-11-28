'use strict'

const test = require('tape')
const execFileSync = require('child_process').execFileSync
const tmp = require('os').tmpdir()
const validBranch = require('.')

// Optionally compare results against git
const compare = process.argv.slice(2).includes('--compare')

test('valid branch', function (t) {
  // Only test special cases for branch names,
  // the rest is tested in is-git-ref-name-valid.
  for (const name of ['foo', 'foo/-bar', 'head', 'HEADx']) {
    check(t, name, true)
  }

  t.end()
})

test('invalid branch', function (t) {
  for (const name of ['', '-foo', 'HEAD']) {
    check(t, name, false)
  }

  t.end()
})

function check (t, name, expected) {
  t.is(validBranch(name), expected, name)

  if (compare && name !== '' && !name.startsWith('-')) {
    t.is(checkGit(name), expected, 'git: ' + name)
  }
}

function checkGit (name) {
  const args = ['check-ref-format', '--branch', name]
  const opts = { stdio: 'ignore', cwd: tmp }

  try {
    execFileSync('git', args, opts)
    return true
  } catch {
    return false
  }
}
