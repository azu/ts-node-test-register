# ts-node-test-register [![Actions Status: test](https://github.com/azu/ts-node-test-register/workflows/test/badge.svg)](https://github.com/azu/ts-node-test-register/actions?query=workflow%3A"test")

Use `test/tsconfig.json` with [ts-node](https://github.com/TypeStrong/ts-node "ts-node") for testing.

## Features

### Load `test/tsconfig.json`

This register library load `tsconfig.json` file by following priority.

- `project/{test}/tsconfig.test.json`
- `project/{test}/tsconfig.json`
- `project/tsconfig.test.json`
- `project/tsconfig.json`

`{test}` is `test` directory by default.

You can specified the `{test}` by `directories` of `package.json`.

```
  "directories": {
    "test": "test"
  },
```

**Notes:** Why need to load different `tsconfig.json` between main and test?

In some times, we use different `tsconfig.json` between main code and test code.

For example, you can enable `allowJs` in test code.
It supports gradual migration that convert JavaScript to TypeScript. 

### Type Check by default

<del>`ts-node`(v4) disable `type-check` by default.</del><ins>This behavior is reverted in [v6.0.0](https://github.com/TypeStrong/ts-node/releases/tag/v6.0.0)</ins>

- [Release "Fast" By Default · TypeStrong/ts-node](https://github.com/TypeStrong/ts-node/releases/tag/v4.0.0 "Release &#34;Fast&#34; By Default · TypeStrong/ts-node")

The motivation is based on so not good experience.

- [Type error reporting · Issue #79 · kulshekhar/ts-jest](https://github.com/kulshekhar/ts-jest/issues/79 "Type error reporting · Issue #79 · kulshekhar/ts-jest")
- [test(textlint-formatter): `mocha` runs fine while `tsc` cannot compile the script · Issue #448 · textlint/textlint](https://github.com/textlint/textlint/issues/448 "test(textlint-formatter): `mocha` runs fine while `tsc` cannot compile the script · Issue #448 · textlint/textlint")

This register library supports [Mike Haas](https://github.com/mikehaas763 "Mike Haas")'s opinion.

> test code is still code, if there's type errors in such test code, shouldn't it fail?
> -- <https://github.com/kulshekhar/ts-jest/issues/79#issuecomment-355397865>


## Install

Install with [npm](https://www.npmjs.com/):

    npm install ts-node ts-node-test-register --save-dev

:warning: [ts-node](https://github.com/TypeStrong/ts-node "ts-node") is [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies "peerDependencies").  
You need to install `ts-node`.

## Usage

Using with [mocha](https://github.com/mochajs/mocha "mocha").

```
mocha --require ts-node-test-register "test/**/*.ts"
```

Or define `--require ts-node-test-register` to [`.mocharc.{js,json,yml}`](example/.mocharc.json).

```
├── package.json
├── .mocharc.json (--require ts-node-test-register)
├── src
│   └── index.ts
└── test
    ├── tsconfig.json // <= load this tsconfig.json
    └── index-test.ts
```

For more details, see [example](./example/).

## Changelog

See [Releases page](https://github.com/azu/ts-node-test-register/releases).

## Running tests

Install devDependencies and Run `yarn test`:

    yarn test
    yarn run test:example

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/ts-node-test-register/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
