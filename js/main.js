"use strict"

var GLOBAL_VARS = {
	audioContext: {},
	padCount: 4,
	samples: {
		bass: bass,
		drums: drums,
		guitar: guitar,
		hornsAndReeds: hornsAndReeds
	}
};

var app;

//Document ready
$( document ).ready(function() {
    console.log("***** DOM LOAD COMPLETE *****");

    buildApp();
});

function buildApp() {
    console.log("buildApp()");
    app = new App();

    console.log("***** APP BUILD COMPLETE *****");
};
