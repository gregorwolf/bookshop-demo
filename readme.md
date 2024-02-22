# Bookshop Sample App

Sample application showcasing different services serving the same set of data entities from a sqlite database.
The services match different use cases visualized in corresponding Fiori apps.

## Develop in VS Code devcontainer

The easiest way to get started with devlopment of this project is inside a Docker Devcontainer. See [this blog post](https://github.com/htammen/cap-vscode-dev-container#so-what-do-i-have-to-do) for details.  
If you don't have Docker installed **you can of course develop within you local OS**. But in that case you have to install all your tools and vs extensions on your own.

## Preliminaries

- get [_Node.js_](https://nodejs.org/en/) v16 or higher
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

If you want to try also the external service calls, then you need to create a `default-env.json` file in the project root folder and add the following content:

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

If you want to test the used SAP Business Technology Platform - Cloud Foundry services you need also to add the VCAP\*SERVICES variable to `default-env.json`. I.e.:

```json
{
  "VCAP_SERVICES": {}
}
```

## Run local with SAP HANA Cloud (Hybrid Testing)

Before you can run the following commands you need to connect to the BTP Cloud Foundry environment using:

```
cf login -a <CF-API-Endpoint> -o <CF-Organization> -s <CF-Space> --sso
```

Then you can create or update an existing HDI using:

```
npm run deploy:hana
```

This should write the needed information to `.cdsrc-private.json`. When you have deployed the application already to BTP Cloud Foundry you can run:

```
cds bind -2 bookshop-demo-db-service --profile hybrid
```

to reuse the existing HDI container. Then you can use:

```
npm run test:hana
```

to start the test or you run

```
npm run start:hana
```

to start the app with SAP HANA Cloud as the database.

## Test

Open these links in your browser:

- <http://localhost:4004/webapp/fiori.html> &ndash; Fiori Launchpad sandbox

## Late-Cut Microservices

The services:

- JobService
- JobExecutionService

show a concrete example of the [Late-Cut Microservices](https://cap.cloud.sap/docs/guides/providing-services#late-cut-microservices).

To get the two instances talk to each other you need to add the following entries in `default-env.json`:

```json
{
  "destinations": [
    {
      "existing": "entries"
    },
    {
      "name": "job-service",
      "url": "http://localhost:4004",
      "username": "job",
      "password": "Secret1"
    },
    {
      "name": "job-execution-service",
      "url": "http://localhost:4005",
      "username": "job-execution",
      "password": "Secret2"
    }
  ]
}
```

### Run local with sqlite

To run this example locally you can run:

```
run-s "deploy:sqlite:instance:**"
```

to deploy two separate sqlite databases. You can start the two instances

```
npm run watchboth
```

### Run hybrid with SAP HANA Cloud

First you need to create the HDI Containers using:

```
run-s "deploy:hana:instance:**"
```

Due to the issue reported at [cds deploy does not support --profile](https://answers.sap.com/questions/13754675/cds-deploy-does-not-support-profile.html) the resulting configuration isn't written to the profiles defined with --profile. So you need to add this entries manually to your `.cdsrc-private.json`:

```json
{
  "requires": {
    "[hybrid-instance1]": {
      "db": {
        "binding": {
          "type": "cf",
          "apiEndpoint": "<CF-API-Endpoint>",
          "org": "<CF-Organization>",
          "space": "<CF-Space>",
          "instance": "bookshop-demo-db-instance1",
          "key": "bookshop-demo-db-instance1-key",
          "resolved": false
        },
        "kind": "hana",
        "vcap": {
          "name": "db"
        }
      }
    },
    "[hybrid-instance2]": {
      "db": {
        "binding": {
          "type": "cf",
          "apiEndpoint": "<CF-API-Endpoint>",
          "org": "<CF-Organization>",
          "space": "<CF-Space>",
          "instance": "bookshop-demo-db-instance2",
          "key": "bookshop-demo-db-instance2-key",
          "resolved": false
        },
        "kind": "hana",
        "vcap": {
          "name": "db"
        }
      }
    },
```

Then you can start with:

```
npm run start:hybridboth
```

### Testing

Use the REST Client scripts in `tests/job.http`.

### Adding XSUAA Authentication

```sh
cf create-service xsuaa broker bookshop-demo-uaa -c xs-security.json
cf create-service-key bookshop-demo-uaa bookshop-demo-uaa-key
cf create-service xsuaa broker bookshop-demo-instance2-uaa -c xs-security-instance2.json
cf create-service-key bookshop-demo-instance2-uaa bookshop-demo-instance2-uaa-key
```

```
cds bind -2 bookshop-demo-uaa
cds bind -2 bookshop-demo-instance2-uaa
```

## Manual steps needed for Service Broker

### Generate Broker Credentials

1. Navigate into folder `/broker`
2. Run command `npm i` in terminal
3. Run command `npm run init` in terminal
4. Store the generated credentials in a safe place

### Create `.mtaext` file

1. Copy file `cf-service-broker-template.mtaext` to `cf-service-broker-private.mtaext`
2. Copy the hashed broker credentials from your safe place into the `cf-service-broker-private.mtaext` file

### Register broker

Build and deploy the MTAR as described in the next step. After the deployment you can register the broker with:

```sh
cf create-service-broker bookshop-demo-broker broker-user <plain-broker-password> <broker-url> --space-scoped
```

- The `broker-url` can be read from e.g. the SAP BTP cockpit by navigating to the broker application in the space where it was deployed.

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

[Carlos Roggan](https://people.sap.com/carlos.roggan) provides a great description in his SAP Community blog post: [How to call protected app from external app as external user with scope](https://blogs.sap.com/2020/06/02/how-to-call-protected-app-from-external-app-as-external-user-with-scope/). For the moment we will not use a separate client app but a REST client script. Follow the next steps to get it working for this project. You have to create and display a service key for the client xsuaa instance:

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

Then open the REST Client script `tests/api-access.http` in VS Code and run the script with the comment `Get Access Token (Cloud Foundry)`. It should return a valid access\*token. Now execute the requests `Read Orders` and `Read Books`. You should see a valid result.

## Authentication and Authorization

The services of this application use authentication and authorization to
restrict usage of the functions.  
The scopes of the app are defined in `xs-security.json`.
They are used in the services files `srv/cat-service.cds` and `srv/admin-service.cds`.

_Please have a look at these files for the restrictions cause they can change due to the POC character of this project_

### Authentication and Authorization in local environment

If you run the application in a local environment the users you can use are
defined in the field `.cdsrc`.  
Currently in this file the following users are defined

_Please have a look at this file to see the current users and roles cause they can change due to the POC character of this project_

| Username    | Scopes                       |
| ----------- | ---------------------------- |
| requester   | admin                        |
| booksadmin  | booksadmin                   |
| admin       | admin, roleadmin, booksadmin |
| littleadmin | admin                        |
| bob         | authenticated-user, openid   |
