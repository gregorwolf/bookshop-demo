!function(){ /* globals sap document */

  var script = document.currentScript
  var options = {
    url: script.getAttribute('from')
    || 'https://sapui5nightly.int.sap.hana.ondemand.com/'
    || 'https://sapui5.hana.ondemand.com'
    || "http://localhost:8080/testsuite" ,
    version: script.getAttribute('version') || '1.61.1',
  }

  console.debug (options)

  load ({ src: "/sapui5/sandbox.js",
    onload: function () { loadUI5("/sapui5") },
    onerror: function () {
      load ({ src: "https://sapui5.hana.ondemand.com/test-resources/sap/ushell/bootstrap/sandbox.js",
        onload: function () { loadUI5 (options.url) },
        onerror: function () { error("Remote sandbox not found!") }
      });
    }
  })


  function loadUI5(uri) {
    var ui5 = document.createElement('script');
    ui5.id="sap-ui-bootstrap";
//    ui5.src=uri +'/'+ options.version + "/resources/sap-ui-core.js";
   // ui5.src='https://sapui5nightly.int.sap.hana.ondemand.com/resources/sap-ui-core.js'
   ui5.src=uri + "/resources/sap-ui-core.js";
    ui5.setAttribute("data-sap-ui-libs","sap.m, sap.ushell, sap.collaboration, sap.ui.layout");
    ui5.setAttribute("data-sap-ui-compatVersion","edge");
    ui5.setAttribute("data-sap-ui-theme","sap_belize");
    ui5.setAttribute("data-sap-ui-frameOptions","allow");
    ui5.onload = function() {
      sap.ui.getCore().attachInit(()=> sap.ushell.Container.createRenderer().placeAt("content"));
    };
    ui5.onerror = function() {
      error("SAP UI5 " + ui5.version + " not found!")
    }
    document.getElementsByTagName('head')[0].appendChild(ui5);
  }


  function load (options) {
    var script = document.createElement('script');
    Object.assign (script, options);
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function error (msg) {
    document.write("<h2>"+msg+"</h2>")
  }

}()