"use strict"

function PadController($El, Window) {
	this.$el = $El;
	this.window = Window;

	this.padCount = 0;
	this.padArray = [];

	this.setPadCount();
	this.drawPads();

};

PadController.prototype.setPadCount = function() {
	this.padCount = GLOBAL_VARS.padCount;

};

PadController.prototype.drawPads = function() {

	for(var i = 0; i < this.padCount; i++) {
		this.padArray.push(new Pad());
	}

};

PadController.prototype.handleWindowResize = function() {

	for(var i = 0; i < this.padCount; i++) {
		this.padArray[i].handleWindowResize();
	}

};