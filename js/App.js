"use strict"

function App(){

	this.window = {
		$el: $(window),
		height: 0,
		width: 0,
		gridLeft: 0
	};
	
	var angle = 0;

	if(window.hasOwnProperty('AudioContext')){	//thanks, other Alex
		GLOBAL_VARS.audioContext = new AudioContext()
	} else {
		GLOBAL_VARS.audioContext = new webkitAudioContext();
	}

	var context = GLOBAL_VARS.audioContext;
	context.listener.setPosition(0,0,0);
	var panner = context.createPanner();

	panner.setOrientation(Math.cos(angle), -Math.sin(angle), 1);

	GLOBAL_VARS.panner = panner;
	GLOBAL_VARS.gain = context.createGain();
	//panner.connect(panner);
	GLOBAL_VARS.gain.connect(context.destination);



	this.sampleController = new SampleController();
	this.leapController = new LeapController();

	this.$loopPads = $("#loop-pads");
	this.$oneShotPads = $("#one-shot-pads");
	this.padController = new PadController(this.$loopPads, this.$oneShotPads, this.window, this.sampleController);

	this.keyboardController = new KeyboardController(this.padController);

	this.controllers = {
		'padController': this.padController,
		'sampleController': this.sampleController
	}

	this.$pads = $("#controls");
	this.controls = new Controls(this.$pads, this.window, this.controllers);
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