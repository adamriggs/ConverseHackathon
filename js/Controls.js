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
	//console.log(This.$padCount);
	//console.log(This.$padCount.val());
	GLOBAL_VARS.padCount = This.$padCount.val();
	This.controllers.padController.setPadCount();
};

Controls.prototype.handleWindowResize = function(){
	
};