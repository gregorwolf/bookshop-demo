function initSandbox() {
  loadScript("/sapui5version.js", // -> var sapui5version
    function () { loadSandbox(sapui5version) },
    function () { reportError("sapui5version.js not found!") }
  )
}

function loadSandbox() {
  loadScript("/sapui5/sandbox.js",
    function () { loadUI5("/sapui5/") },
    function () { loadRemoteSandbox() }
  )
}

function initUICore() {
  sap.ui.getCore().attachInit(()=> sap.ushell.Container.createRenderer().placeAt("content"));
}

function reportError(s) {
  document.write("<h2>"+s+"</h2>")
}

function loadUI5(uri) {
  var ui5 = document.createElement('script');
  ui5.id="sap-ui-bootstrap";
  ui5.src=uri+sapui5version+"/resources/sap-ui-core.js";
  ui5.setAttribute("data-sap-ui-libs","sap.m, sap.ushell, sap.collaboration, sap.ui.layout");
  ui5.setAttribute("data-sap-ui-compatVersion","edge");
  ui5.setAttribute("data-sap-ui-theme","sap_belize");
  ui5.setAttribute("data-sap-ui-frameOptions","allow");
  ui5.onload = initUICore;
  ui5.onerror = function () {
    reportError("SAP UI5 " + sapui5version + " not found!")
  }
  document.getElementsByTagName('head')[0].appendChild(ui5);
}

function loadRemoteSandbox() {
  loadScript("https://sapui5.hana.ondemand.com/test-resources/sap/ushell/bootstrap/sandbox.js",
    function () { loadUI5("https://sapui5.hana.ondemand.com/") },
    function () { reportError("Remote sandbox not found!") }
  );
}

function loadScript(src,onload,onerror) {
  var script = document.createElement('script');
  script.src=src;
  script.onload = onload;
  script.onerror = onerror;
  document.getElementsByTagName('head')[0].appendChild(script);
}
