"use strict"

function Controls($El, Window, Controllers){
	this.$el = $El;
	this.window = Window;
	this.controllers = Controllers;

	//console.log(this.$el);
	var _this = this;

	this.$padCount = this.$el.find("> .padCount p input");
	this.$padCount.change(function(){
		_this.updatePadCount(_this);
	});

	this.$stopAll = this.$el.find("> .stop_all");
	this.$stopAll.on('click', function(){_this.stopAll(_this);});
};

Controls.prototype.updatePadCount = function(This) {
	console.log("Controls.updatePadCount()");
	//console.log(This.$padCount);
	//console.log(This.$padCount.val());
	GLOBAL_VARS.padCount = This.$padCount.val();
	This.controllers.padController.setPadCount();
};

Controls.prototype.stopAll = function(This) {
	//console.log("Controls.stopAll()");
	This.controllers.padController.stopAll();
};

Controls.prototype.handleWindowResize = function(){

};