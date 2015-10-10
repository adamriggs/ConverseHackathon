"use strict"

function Pad(Window) {
	this.window = Window;

	var _this = this;

	this.$el = $("<div class='pad'></div>");
	this.$el.on('click', function(){
		_this.clicked(_this);
	});

	this.test = "test";
	this.context = GLOBAL_VARS.audioContext;
	this.sample = {};
	this.sample.source = "http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/08/1407409274kick.wav";

	//console.log(this.$el);

	//this.loadAudio(this.sample, "http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/08/1407409274kick.wav");
	this.addAudioProperties();
	//console.log("sample==", this.sample);
};

Pad.prototype.clicked = function(This) {
	//console.log("Pad.clicked()");
	This.sample.play();
};

Pad.prototype.loadAudio = function( object, url) {
	var _this = this;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
        _this.context.decodeAudioData(request.response, function(buffer) {
            _this.sample.buffer = buffer;
            //console.log(_this.sample);
        });

        _this.activate();
    }
    request.send();
};

Pad.prototype.addAudioProperties = function() {
	var _this = this;
	//this.sample.name = this.sample.id;
    this.loadAudio(this.sample, this.sample.source);
    this.sample.play = function () {
        var s = _this.context.createBufferSource();
        s.buffer = _this.sample.buffer;
        s.connect(_this.context.destination);
        s.start(0);
        _this.sample.s = s;
    }

}

Pad.prototype.activate = function() {
	//console.log("Pad.activate()");
	this.$el.css({
		'background-color': '#FF9900'
	});
};

Pad.prototype.deactivate = function() {
	this.$el.css({
		'background-color': '#FFCB17'
	});
};

Pad.prototype.handleWindowResize = function() {
	
};