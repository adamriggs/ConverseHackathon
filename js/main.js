"use strict"

var GLOBAL_VARS = {
	audioContext: {},
	padCount: 4,

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
