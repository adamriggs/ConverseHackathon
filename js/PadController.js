"use strict"

function PadController($El, Window) {
	this.$el = $El;
	this.window = Window;

	this.padCount = 0;
	this.padArray = [];

	//this.setPadCount();

};

PadController.prototype.setPadCount = function() {
	console.log("PadController.setPadCount()");
	this.padCount = GLOBAL_VARS.padCount;
	this.drawPads();
};

PadController.prototype.drawPads = function() {
	console.log("PadController.drawPads()");
	for(var i = 0; i < this.padCount; i++) {
		this.padArray.push(new Pad());
	}

};

PadController.prototype.handleWindowResize = function() {

	for(var i = 0; i < this.padCount; i++) {
		this.padArray[i].handleWindowResize();
	}

};