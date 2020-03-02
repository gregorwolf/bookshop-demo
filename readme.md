# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database. 
The services match different use cases visualized in corresponding Fiori apps.

## Preliminaries

* get [_Node.js_](https://nodejs.org/en/) v12 or higher
* get [_sqlite_](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)
* _npm set @sap:registry_ to the latest _nexus snapshots_:

```sh
npm set @sap:registry=https://npm.sap.com
```

## Setup

Copy & paste this to your command line:

```sh
git clone https://github.com/gregorwolf/bookshop-demo.git
cd bookshop
npm run setup
```

## Run
```sh
npm start
```

## Test

Open these links in your browser:

* <http://localhost:4004/webapp/fiori.html> &ndash; Fiori Launchpad sandbox
