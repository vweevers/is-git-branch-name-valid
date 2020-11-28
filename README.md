# is-git-branch-name-valid

**Check that a git branch name is well formed.**

[![npm status](http://img.shields.io/npm/v/is-git-branch-name-valid.svg)](https://www.npmjs.org/package/is-git-branch-name-valid)
[![node](https://img.shields.io/node/v/is-git-branch-name-valid.svg)](https://www.npmjs.org/package/is-git-branch-name-valid)
![Test](https://github.com/vweevers/is-git-branch-name-valid/workflows/Test/badge.svg?branch=main)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const validBranch = require('is-git-branch-name-valid')

validBranch('foo.bar')     // true
validBranch('foo-bar/baz') // true
validBranch('foo^bar')     // false
validBranch('HEAD')        // false
validBranch('-foo')        // false
```

## API

### `validBranch(name)`

Takes a string `name`. Returns true if `name`:

1. Is a [valid reference name](https://github.com/vweevers/is-git-ref-name-valid)
2. Does not equal `HEAD` or start with `-`.

## Install

With [npm](https://npmjs.org) do:

```
npm install is-git-branch-name-valid
```

## License

[MIT](LICENSE) © Vincent Weevers
