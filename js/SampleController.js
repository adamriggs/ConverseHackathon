"use strict"

function SampleController() {

	this.samples = [];
	this.samples.loop = [];
	this.samples.one_shot = [];
	this.initSamples();
	this.shuffleLoopSamples();
	this.shuffleOneShotSamples();
};

SampleController.prototype.initSamples = function() {
	//console.log("SampleController.initSamples()");

	for(var key in GLOBAL_VARS.samples.loop){
		if (GLOBAL_VARS.samples.loop.hasOwnProperty(key)) {
			this.samples.loop = this.samples.loop.concat(GLOBAL_VARS.samples.loop[key]);
		}
	}

	for(var key in GLOBAL_VARS.samples.one_shot){
		if (GLOBAL_VARS.samples.one_shot.hasOwnProperty(key)) {
			this.samples.one_shot = this.samples.one_shot.concat(GLOBAL_VARS.samples.one_shot[key]);
		}
	}
};

SampleController.prototype.shuffleLoopSamples = function() {
	this.samples.loop = this.shuffleSamples(this.samples.loop);
};

SampleController.prototype.shuffleOneShotSamples = function() {
	this.samples.one_shot = this.shuffleSamples(this.samples.one_shot);
}

SampleController.prototype.shuffleSamples = function(array) {
  for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
};

SampleController.prototype.getRandomValueFromArray = function(Arr){
	//console.log(Arr.length);
	return Math.floor(Math.random() * Arr.length);
};