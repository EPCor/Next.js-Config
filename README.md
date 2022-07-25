# Next.js Engineering Configuration

A boilerplate for Next.js application

## Getting Started

<a class="btn btn-sm btn-primary ml-2" href="https://github.com/EPCor/RN-Config/generate">Use this template</a> or clone this repository

```sh
$ npm i # Install

$ npm run dev # development
$ npm run debug

$ npm start # start
$ pm2 start ecosystem.config.js # pm2
```

## Features

* use __`prettier`__ as _Formatter_
* use __`eslint`__ as JS _Linter_
* use __`stylelint`__ as CSS _Linter_
* use __`PostCSS`__ as tool for _transforming styles_
* use __`tailwindcss`__ as _CSS framework_
* use __`pm2`__ as _process manager_

### Prodeuction Dependencies

```json
{
  "next": "^12.2.3",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
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
