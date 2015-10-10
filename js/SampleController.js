"use strict"

function SampleController() {

	this.samples = [];
	this.samples.all = [];
	this.samples.loop = [];
	this.samples.one_shot = [];
	this.initSamples();
};

SampleController.prototype.initSamples = function() {
	//console.log("SampleController.initSamples()");

	for(var key in GLOBAL_VARS.samples.all){
		if (GLOBAL_VARS.samples.all.hasOwnProperty(key)) {
			this.samples.all.push(GLOBAL_VARS.samples.all[key]);
		}
	}

	for(var key in GLOBAL_VARS.samples.loop){
		if (GLOBAL_VARS.samples.loop.hasOwnProperty(key)) {
			this.samples.loop.push(GLOBAL_VARS.samples.loop[key]);
		}
	}

	for(var key in GLOBAL_VARS.samples.one_shot){
		if (GLOBAL_VARS.samples.one_shot.hasOwnProperty(key)) {
			this.samples.one_shot.push(GLOBAL_VARS.samples.one_shot[key]);
		}
	}
};

SampleController.prototype.getRandomValueFromArray = function(Arr){
	//console.log(Arr.length);
	return Math.floor(Math.random() * Arr.length);
};