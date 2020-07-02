# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database. 
The services match different use cases visualized in corresponding Fiori apps.

## Develop in VS Code devcontainer
The easiest way to get started with devlopment of this project is inside a Docker Devcontainer. See [this blog post](https://github.com/htammen/cap-vscode-dev-container#so-what-do-i-have-to-do) for details.   
If you don't have Docker installed **you can of course develop within you local OS**. But in that case you have to install all your tools and vs extensions on your own.

## Preliminaries

* get [_Node.js_](https://nodejs.org/en/) v12 or higher
* get [_sqlite_](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)
* As SAP has depricated their own NPM registry please remove the setting in your npm config with the following command

```sh
npm config rm @sap:registry
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
npm run build
npm run build:swagger
npm run startv2
```

## Test

Open these links in your browser:

* <http://localhost:4004/webapp/fiori.html> &ndash; Fiori Launchpad sandbox
