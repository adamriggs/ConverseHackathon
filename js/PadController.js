"use strict"

function PadController($loopEl, $oneShotEl, Window, Samples) {
	this.$loopEl = $loopEl;
	this.$oneShotEl = $oneShotEl;
	this.window = Window;
	this.sampleController = Samples;

	//console.log(this.sampleController.samples);

	this.loopPadCount = 0;
	this.loopPadArray = [];
	this.oneShotPadCount = 0;
	this.oneShotPadArray = [];

	this.setPadCount();

};

PadController.prototype.setPadCount = function() {
	console.log("PadController.setPadCount()");
	this.loopPadCount = GLOBAL_VARS.loopPadCount;
	this.oneShotPadCount = GLOBAL_VARS.oneShotPadCount;
	this.drawLoopPads();
	this.drawOneShotPads();
};

PadController.prototype.drawLoopPads = function() {
	console.log("PadController.drawPads()");

	this.$loopEl.empty();

	for(var i = 0; i < this.loopPadCount; i++) {
		var pad = new Pad(this.window);
		this.loopPadArray.push(pad);
		this.$loopEl.append(pad.$el);
		pad.setSampleID(this.sampleController.samples.loop[0][this.sampleController.getRandomValueFromArray(this.sampleController.samples.loop[0])]);
	}

	this.handleWindowResize();

};

PadController.prototype.drawOneShotPads = function() {
	console.log("PadController.drawPads()");

	this.$oneShotEl.empty();

	for(var i = 0; i < this.oneShotPadCount; i++) {
		var pad = new Pad(this.window);
		this.oneShotPadArray.push(pad);
		this.$oneShotEl.append(pad.$el);
		pad.setSampleID(this.sampleController.samples.one_shot[0][this.sampleController.getRandomValueFromArray(this.sampleController.samples.one_shot[0])]);
	}

	this.handleWindowResize();

};

PadController.prototype.handleWindowResize = function() {

	for(var i = 0; i < this.padCount; i++) {
		this.padArray[i].handleWindowResize();
	}

};