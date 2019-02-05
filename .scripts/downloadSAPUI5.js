#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var request = require('request');
var progress = require('request-progress');
var minizip = require('node-minizip');

let sapui5version = require("../app/sapui5version")
console.log("SAP UI5 version:", sapui5version)

request.defaults({'no_proxy':'*.wdf.sap.corp'});

var targetSubdir = "app/sapui5";

if(!fs.existsSync(targetSubdir)) {
  console.log("Created directory " + targetSubdir)
  fs.mkdirSync(targetSubdir);
}

function download(urlBase,file,targetSubdir,headers={},cb)
{
  let theFile = file;
  let url = urlBase + file;
  console.log("download "+url+" into "+targetSubdir);
  progress(request({url,headers}), {throttle: 1000, delay: 1000})
  .on('progress', function (state) {
    console.log(theFile+' remaining '+state.time.remaining+ "s");
  })
  .on('error', function (err) {
    console.log(theFile+' error', err);
  })
  .on('end', function () {
    console.log('downloaded: '+theFile);
    if(cb) cb();
  })
  .pipe(fs.createWriteStream(path.join(targetSubdir,file)));
}

function sleep(to,cb) {
  setTimeout( () => { cb() }, to);
}

let wloops=5;
function extract(zipfile,targetSubdir) {
  sleep(1000,() => {
    console.log("Extracting",zipfile,"...")
    minizip.unzip(zipfile, targetSubdir, function (err) {
      if (err) {
        console.log("unzip:",err);
        wloops--;
        if(wloops==0)
          throw Error("Timeout occured while waiting for file ",zipfile)
        extract(zipfile,targetSubdir);
      } else
        console.log('Extraction finished.')
    })
  })
}

download("https://sapui5.hana.ondemand.com/test-resources/sap/ushell/bootstrap/","sandbox.js",targetSubdir);

/*
let sapui5uri = "https://tools.hana.ondemand.com/additional/";
let sapui5zip = "sapui5-rt-"+sapui5version+".zip";
let headers = {"Cookie":'eula_3_1_agreed=tools.hana.ondemand.com/developer-license-3_1.txt'};
*/
let sapui5uri="http://nexus.wdf.sap.corp:8081/nexus/content/repositories/deploy.releases/com/sap/ui5/dist/sapui5-dist/"+sapui5version+"/";
let sapui5zip="sapui5-dist-"+sapui5version+"-download.zip";
let headers={};
download(
  sapui5uri,sapui5zip,targetSubdir,headers,
  () => {extract(targetSubdir+"/"+sapui5zip,"app/sapui5/"+sapui5version+"/")
});