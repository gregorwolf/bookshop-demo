var fs = require('fs');
var path = require('path');
var request = require('request');
var progress = require('request-progress');
var minizip = require('node-minizip');

let sapui5version = require("./app/sapui5version")
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

let wloops=5;
function waitForFile(f,cb) {
  console.log("wait:",f)
  try {
    fs.statSync(f)
    cb()
  }catch(ex) {
    console.log("wait",wloops,ex)
    wloops--;
    if(wloops==0)
      throw Error("Timeout occured while waiting for file ",f)
    setTimeout(function() {
      waitForFile(f);
    },1000);
  }
}

function extract(zipfile,targetSubdir) {
  waitForFile(zipfile, () =>  {
    console.log("Extract: "+zipfile)
    minizip.unzip(zipfile, targetSubdir, function (err) {
      if (err)
        console.log(err);
      else
        console.log('Extraction finished.')
    })
  });
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