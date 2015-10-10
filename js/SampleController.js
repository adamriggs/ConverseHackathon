"use strict"

function SampleController() {

	this.bass = this.getRandomValueFromArray(GLOBAL_VARS.samples.bass);
	this.drums = this.getRandomValueFromArray(GLOBAL_VARS.samples.drums);
	this.guitar = this.getRandomValueFromArray(GLOBAL_VARS.samples.guitar);
	this.hornsAndReeds = this.getRandomValueFromArray(GLOBAL_VARS.samples.hornsAndReeds);

	// console.log(this.bass);
	// console.log(this.drums);
	// console.log(this.guitar);
	// console.log(this.hornsAndReeds);

	this.samples = [];
	this.initSamples();
};

SampleController.prototype.initSamples = function() {
	console.log("SampleController.initSamples()");

	var size = 0;

	for(var key in GLOBAL_VARS.samples){
		if (GLOBAL_VARS.samples.hasOwnProperty(key)) size++;
		this.samples.push(GLOBAL_VARS.samples[key]);
	}

	// for(var i = 0; i < size; i++){
	// 	console.log(i);
	// 	this.samples.push(GLOBAL_VARS.samples[i]);
	// }
};

SampleController.prototype.getRandomValueFromArray = function(Arr){
	//console.log(Arr.length);
	return Math.floor(Math.random() * Arr.length);
}


SampleController.prototype.handleWindowResize = function() {
	
};