# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database. 
The services match different use cases visualized in corresponding Fiori apps.

## Develop in VS Code devcontainer
The easiest way to get started with devlopment of this project is inside a Docker Devcontainer. See [this blog post](https://github.com/htammen/cap-vscode-dev-container#so-what-do-i-have-to-do) for details.   
If you don't have Docker installed **you can of course develop within you local OS**. But in that case you have to install all your tools and vs extensions on your own.

## Preliminaries

* get [_Node.js_](https://nodejs.org/en/) v12 or higher
* get [_sqlite_](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)
* As SAP has deprecated their own NPM registry please remove the setting in your npm config with the following command

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

## Allow embedding as an iFrame

Manuel Seeger described the needed steps in [Can't authenticate against HTML-Mashup embedded SCP application in C4C](https://answers.sap.com/questions/13014707/cant-authenticate-against-html-mashup-embedded-scp.html). Here are the concrete steps for this application:

```sh
cf create-service xsuaa apiaccess bookshop-access
cf create-service-key bookshop-access bookshop-access-sk
cf service-key bookshop-access bookshop-access-sk
```

Store the returned values as Key-Value Pairs in tests/.env. I.e.: 

```
apiurl="https://api.authentication.us10.hana.ondemand.com"
```

Also add a variable for appurl which represents the app you want to enable to be embedded in an iFrame. Then run the REST Client Script tests/configure-xsuaa.http.