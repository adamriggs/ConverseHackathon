"use strict"

function SampleController() {

	this.samples = [];
	this.initSamples();
};

SampleController.prototype.initSamples = function() {
	//console.log("SampleController.initSamples()");

	for(var key in GLOBAL_VARS.samples){
		if (GLOBAL_VARS.samples.hasOwnProperty(key)) {
			this.samples.push(GLOBAL_VARS.samples[key]);
		}
	}
};

SampleController.prototype.getRandomValueFromArray = function(Arr){
	//console.log(Arr.length);
	return Math.floor(Math.random() * Arr.length);
};