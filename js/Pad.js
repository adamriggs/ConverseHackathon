"use strict"

function Pad(Window) {
	this.window = Window;

	this.$el = $("<div class='pad'></div>");
	this.$el.on('click', this.clicked);

	//console.log(this.$el);
	
};

Pad.prototype.clicked = function() {
	console.log("Pad.clicked()");


};

Pad.prototype.handleWindowResize = function() {
	
};