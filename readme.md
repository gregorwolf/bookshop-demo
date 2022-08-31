# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database.
The services match different use cases visualized in corresponding Fiori apps.

## Develop in VS Code devcontainer

The easiest way to get started with devlopment of this project is inside a Docker Devcontainer. See [this blog post](https://github.com/htammen/cap-vscode-dev-container#so-what-do-i-have-to-do) for details.  
If you don't have Docker installed **you can of course develop within you local OS**. But in that case you have to install all your tools and vs extensions on your own.

## Preliminaries

- get [_Node.js_](https://nodejs.org/en/) v14 or higher
- get [_sqlite_](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)
- As SAP has deprecated their own NPM registry please remove the setting in your npm config with the following command

```sh
npm config rm @sap:registry
```

## Setup

Copy & paste this to your command line:

```sh
git clone https://github.com/gregorwolf/bookshop-demo.git
cd bookshop-demo
npm install
npm run setup
```

## Run local

If you want to try also the external service calls, then you need to create a _default-env.json_ file in the project root folder and add the following content:

```json
{
  "destinations": [
    {
      "name": "ES5",
      "url": "https://sapes5.sapdevcenter.com",
      "username": "<your-ES5-username>",
      "password": "<your-ES5-password>"
    },
    {
      "name": "ERP",
      "url": "https://saperp.example.com",
      "username": "<your-ERP-username>",
      "password": "<your-ERP-password>"
    }
  ]
}
```

```sh
npm run build
npm start
```

If you want to test the used SAP Business Technology Platform - Cloud Foundry services you need also to add the VCAP*SERVICES variable to \_default-env.json*. I.e.:

```json
{
  "VCAP_SERVICES": {}
}
```

## Run local with SAP HANA Cloud (Hybrid Testing)

When you have deployed the application to BTP Cloud Foundry you can run:

```
cds bind -2 bookshop-demo-db-service --profile hybrid
```

then you can use:

```
npm run test:hana
```

to start the test.

## Test

Open these links in your browser:

- <http://localhost:4004/webapp/fiori.html> &ndash; Fiori Launchpad sandbox

## Deploy to SAP Cloud Platform - Cloud Foundry Environment

We're using the mbt build to create a mtar that can be deployed to the SAP CP Cloud Foundry. The cf commandline must be installed and you have to be logged on to the space you want to deploy to. The build ist started with:

```
npm run build:cf
```

then you can deploy with:

```
npm run deploy:cf
```

If you need to redirect destinations according to your configuration you can achieve this by setting the environment variable `CDS_CONFIG` to this value:

```JSON
{
  "requires": {
    "GWSAMPLE_BASIC": {
      "credentials": {
        "destination": "S4HANA"
      }
    },
    "API_CV_ATTACHMENT_SRV": {
      "credentials": {
        "destination": "S4HANA"
      }
    }
  }
}
```

## Deploy to SAP HANA XSA on Premise

We're using the mbt build to create a mtar that can be deployed to the SAP HANA. The xs commandline must be installed and you have to be logged on to the space you want to deploy to. The build ist started with:

```
npm run build:xsa
```

then you can deploy with:

```
npm run deploy:xsa
```

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

Then open the REST Client script _tests/api-access.http_ in VS Code and run the script with the comment _Get Access Token (Cloud Foundry)_. It should return a valid access*token. Now execute the requests \_Read Orders* and _Read Books_. You should see a valid result.

## Authentication and Authorization

The services of this application use authentication and authorization to
restrict usage of the functions.  
The scopes of the app are defined in `xs-security.json`.
They are used in the services files `srv/cat-service.cds` and `srv/admin-service.cds`.

_Please have a look at these files for the restrictions cause they can change
due to the POC character of this project_

### Authentication and Authorization in local environment

If you run the application in a local environment the users you can use are
defined in the field `.cdsrc`.  
Currently in this file the following users are defined

_Please have a look at this file to see the current users and roles
cause they can change due to the POC character of this project_

| Username    | Scopes                       |
| ----------- | ---------------------------- |
| requester   | admin                        |
| booksadmin  | booksadmin                   |
| admin       | admin, roleadmin, booksadmin |
| littleadmin | admin                        |
| bob         | authenticated-user, openid   |
