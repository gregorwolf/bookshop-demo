# Bookshop Sample App

Sample application showcasing Fiori apps consuming two [services](srv/cat-service.cds) served with Node.js runtime and a sqlite database.

## Prerequisites:

* [Node.js v8](https://nodejs.org/en/)
* [sqlite3](https://www.sqlite.org/download.html) (pre-installed on Mac and Linux)


## Download

Either git clone or download this project and change into the project root folder, e.g.

```sh
git clone https://github.wdf.sap.corp/caps/bookshop.git
cd bookshop
```

## Setup
```sh
npm run setup
```

## Run
```sh
cds run
```

## Test

Open these links in your browser:

* <http://localhost:4004> &ndash; Fiori Launchpad sandbox
* <http://localhost:4004/$index> &ndash; generic index page


## Debug

In [VS Code](https://code.visualstudio.com) switch to _Debug_ view and launch the pre-configured _cds run_ debug configuration. Set breakpoints in one of the javascript files, e.g. [srv/cat-service.js](srv/cat-service.js)