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
npm start
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

## Allow API Access

[Carlos Roggan](https://people.sap.com/carlos.roggan) providedes a great description in his SAP Community blogpost: [How to call protected app from external app as external user with scope](https://blogs.sap.com/2020/06/02/how-to-call-protected-app-from-external-app-as-external-user-with-scope/). For the moment we will not use a separate client app but a REST client script. Follow the next steps to get it working for this project. Start of by creating a separate xsuaa service instance by running:

```sh
cf create-service xsuaa application xsuaaforclient -c tests/xs-security.json
```

Then create and display a service key for this xsuaa:

```sh
cf create-service-key xsuaaforclient xsuaaforclient-sk
cf service-key xsuaaforclient xsuaaforclient-sk
```

Store the returned values as Key-Value Pairs for clientid, clientsecret, url in tests/.env. as:

```
clientid="sb-xsappforclientapp!dsjdfs"
clientsecret="NbFeh8ibk2zQ="
url="https://<your-trial-account>trial.authentication.eu10.hana.ondemand.com"
srvurl="https://<your-trial-account>trial-dev-bookshop-demo-srv.cfapps.us10.hana.ondemand.com"
```

Then open the REST Client script *tests/api-access.http* in VS Code and run the script with the comment *Get Access Token (Cloud Foundry)*. It should return a valid access_token. Now execute the requests *Read Orders* and *Read Books*. You should see a valid result.