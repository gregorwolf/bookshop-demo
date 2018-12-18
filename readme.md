# Bookshop Sample App

Sample application showcasing Fiori apps consuming two [services](srv/cat-service.cds) served with Node.js runtime and a sqlite database.

## Prerequisites:

* [_Node.js v8_](https://nodejs.org/en/)
* [_sqlite_](https://www.sqlite.org/download.html) (pre-installed on Mac and Linux)
* _npm set @sap:registry_ to _npm.sap.com_:
```sh
npm set @sap:registry=http://npm.sap.com
```
> Alternatively use latest _nexus snapshots_:
```sh
npm set @sap:registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.snapshots.npm
```

## Setup

Simply download this project and _npm-run `setup`_ in the project folder, e.g. <br>
copy & paste this to your command line:

```sh
git clone https://github.wdf.sap.corp/caps/bookshop.git
cd bookshop
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

In [VS Code](https://code.visualstudio.com) switch to _Debug_ view and launch the pre-configured _cds run_ debug configuration. Set breakpoints in one of the javascript files, e.g. [srv/cat-service.js](srv/cat-service.js).


## Develop

Edit the provided `.cds` or `.js` sources and restart the server (i.e. Ctrl-C, `cds run`) to see the effects.

Note: re-deploy the database thru `cds deploy` in case you did changes which affect the data models or the signatures of entities exposed in the services.