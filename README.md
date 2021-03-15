# Next.js Engineering Configuration

A boilerplate for Next.js application

## Getting Started

<a class="btn btn-sm btn-primary ml-2" href="https://github.com/EPCor/RN-Config/generate">Use this template</a> or clone this repository

```sh
$ npm i # Install

$ npm run dev # development
$ npm run debug

$ npm start # start
```

## Features

* use `prettier` as __Formatter__
* use `eslint` as JS __Linter__
* use `stylelint` as CSS __Linter__
* use `babel` as __Transpiler__
* use `PostCSS` as tool for __transforming styles__
* use `pm2` as __process manager__

### Dependencies

```json
{
  "next": "^10.0.8",
  "react": "^17.0.1",
  "react-dom": "^17.0.1"
}
```

### Path Aliases

```json
{
  "/*": ["./*"],
  "~/*": ["./src/*"]
}
```

## License

See the [LICENSE](/LICENSE) file for licensing information.
