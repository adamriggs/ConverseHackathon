"use strict"

function App(){
	
	this.window = {
		$el: $(window),
		height: 0,
		width: 0,
		gridLeft: 0
	};

	this.$pads = $("#controls");
	this.padController = new Controls(this.$pads, this.window);

	this.$pads = $("#pads");
	this.padController = new PadController(this.$pads, this.window);
}

App.prototype.bindWindowResize = function(){
	var _this = this;

	// Window resize event
	this.window.$el.on("resize", function(Evt) {
		_this.setHandleWindowResizeTimeout();
		Evt.preventDefault();
		Evt.stopPropagation();
		return false;
	});
	
	this.window.$el.on("orientationchange", function(Evt) {
	  _this.setHandleWindowResizeTimeout();
	});
}

App.prototype.setHandleWindowResizeTimeout = function(){
	var _this = this;
	if(Modernizr.isInputTouchOnly){
		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(function(){
			_this.handleWindowResize(false);
		}, 500);
	}
	else {
		this.handleWindowResize(false);
	}
};

App.prototype.handleWindowResize = function(){
	this.window.width = window.outerWidth && window.outerWidth > this.window.$el.width() ? window.outerWidth : this.window.$el.width();
	this.window.height = this.window.$el.height();

	this.padController.handleWindowResize();
}