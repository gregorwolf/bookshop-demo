# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database. The services match different use cases visualized in corresponding Fiori apps.

## Preliminaries

* get [_Node.js_](https://nodejs.org/en/) v8 or higher
* get [_sqlite_](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)
* _npm set @sap:registry_ to _npm.sap.com_:
  ```sh
  npm set @sap:registry=http://npm.sap.com
  ```
  > Alternatively use latest _nexus snapshots_:
  ```sh
  npm set @sap:registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.snapshots.npm
  ```

## Setup

Download this project and _`npm run setup`_ in the project folder — e.g. copy & paste this to your command line:

```sh
git clone https://github.wdf.sap.corp/caps/bookshop.git
cd bookshop
npm run setup
```

## Run
```sh
npm start
```

## Test

Open these links in your browser:

* <http://localhost:4004> &ndash; Fiori Launchpad sandbox
* <http://localhost:4004/$index> &ndash; generic index page


## Debug

In [VS Code](https://code.visualstudio.com) switch to _Debug_ view and launch the prepared _cds run_ configuration. 

Set breakpoints in one of the javascript files, e.g. [srv/handlers/cat-service.js](srv/handlers/cat-service.js).


## Develop

Edit the provided `.cds` or `.js` sources and restart the server (i.e. Ctrl-C, `npm start`) to see the effects.

Note: re-deploy the database thru `npm run deploy` in case you did changes which affect the data models or the signatures of entities exposed in the services.

## Issues?
→ [cap/issues](https://github.wdf.sap.corp/cap/issues/issues)

## More Features?
- Authentication and authorization → ['auth' branch](https://github.wdf.sap.corp/caps/bookshop/tree/auth)
- CF & MTA → ['cf' branch](https://github.wdf.sap.corp/caps/bookshop/tree/cf)
