"use strict"

function Controls($El, Window, Controllers){
	this.$el = $El;
	this.window = Window;
	this.controllers = Controllers;

	//console.log(this.$el);
	var This = this;

	this.$padCount = this.$el.find("> .padCount p input");
	this.$padCount.change(function(){
		This.updatePadCount(This);
	});
	
};

Controls.prototype.updatePadCount = function(This) {
	console.log("Controls.updatePadCount()");
	GLOBAL_VARS.padCount = This.$padCount.value;
	This.controllers.padController.setPadCount();
};

Controls.prototype.handleWindowResize = function(){
	
};