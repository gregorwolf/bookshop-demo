# UI5 custom control `ui5-cc-custom.control`

(brief description)

## Install

```bash
$> yarn add ui5-cc-custom.control
# or
$> npm install ui5-cc-custom.control
```

## Included controls

- `(control)`: (description)
  - properties: -
  - aggregations: -

## Usage

1. define the dependeny in `$yourapp/package.json`

   ```json
   // it is already in "dependencies" after installation
   "ui5": {
     "dependencies": [
       // ...
       "ui5-cc-custom.control",
       // ...
     ]
   }
   ```

2. declare the namespace in your XML view and use the custom control from that namespace

   ```xml
   <mvc:View ... 
           xmlns:custom.control="cc.custom.control"
           ...>
      <custom.control:Control />
   </mvc:View>
   ```

## How it works

(describe how it, well, works)

## Build time (in apps)

Use `ui5 build --all` to produce a deployable version of your app including `ui5-cc-custom.control` and its’ control(s).

Other than that, nothing specific to note for using `ui5-cc-custom.control` in builds in UI5 apps.

## Tests

The `test` folder contains a minimal UI5 app requiring `ui5-cc-custom.control`.

For testing manually, do:

```bash
$> yarn test:manual # runs ui5 serve
# now point a browser to http://localhost:8080
```

The [livereload middleware](https://github.com/petermuessig/ui5-ecosystem-showcase/tree/master/packages/ui5-middleware-livereload) is included, so changes to the test app get reloaded immediately.

A full automated test suite is setup with [Jest + puppeteer](https://jestjs.io/docs/en/puppeteer), starting `ui5 serve` and running all `/test/**/*.test.js` :

```bash
$> cd test/ui5-app
$> yarn # for installing runtime dependencies
$> cd ..
$> yarn test
# sample output:
 ...
```

## License

This work is [dual-licensed](./LICENSE) under Apache 2.0 and the Derived Beer-ware License. The official license will be Apache 2.0, but ultimately you can choose between one of them if you use this work.

When you like this stuff, buy [you](https://you) a drink when you see the person.
