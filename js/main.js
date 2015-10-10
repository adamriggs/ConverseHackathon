"use strict"

function ConverseApp(){
	
	this.window = {
		$el: $(window),
		height: 0,
		width: 0,
		gridLeft: 0
	};
}

ConverseApp.prototype.bindWindowResize = function(){
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

ConverseApp.prototype.setHandleWindowResizeTimeout = function(){
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

ConverseApp.prototype.handleWindowResize = function(){
	this.window.width = window.outerWidth && window.outerWidth > this.window.$el.width() ? window.outerWidth : this.window.$el.width();
	this.window.height = this.window.$el.height();
}