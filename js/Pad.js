"use strict"

function Pad(Window) {
	this.window = Window;

	var _this = this;

	this.$el = $("<div class='pad'></div>");

	this.context = GLOBAL_VARS.audioContext;
	this.sample = {};
	this.sample.source = "";

	this.sampleID = "";
	this.sampleURL = "";
	this.sampleJSON = "";
	this.sampleS3_key = "";
	this.sampleS3URL = "";


	this.apiPrefix = "https://hackathon.indabamusic.com/samples/";

	this.s3Prefix = "https://d34x6xks9kc6p2.cloudfront.net/";

	//this.setSampleID('542ad5f4e4b0f0e47d33a7d8');
	//this.addAudioProperties();
};

Pad.prototype.setSampleID = function(ID) {
	//console.log("Pad.setSampleID(" + ID + ")");
	this.sample = {};
	this.deactivate();
	this.sampleID = ID;
	this.sampleURL = this.apiPrefix + this.sampleID;
	//console.log(this.sampleURL);

	this.getSampleJSON();
};

Pad.prototype.setSourceURL = function() {
	this.sampleS3URL = this.s3Prefix + this.sampleS3_key;

	this.sample.source = this.sampleS3URL;

    this.loadAudio(this.sample, this.sample.source);

	//console.log(this.sampleS3URL);
};

Pad.prototype.getSampleJSON = function() {
	//console.log("Pad.getSampleJSON()");
	var _this = this;
	var request = new XMLHttpRequest();
    request.open('GET', this.sampleURL, true);

    request.onload = function() {
        _this.sampleJSON = JSON.parse(request.response);
        _this.sampleS3_key = _this.sampleJSON.s3_key;
        _this.sampleS3_key = _this.sampleS3_key.replace(".wav", ".mp3");
        _this.setSourceURL();
    }
    request.send();
};

Pad.prototype.clicked = function(This) {
	//console.log("Pad.clicked()");
	This.sample.play();
};

Pad.prototype.stop = function() {
	this.sample.stop();
};

Pad.prototype.loadAudio = function( object, url) {
	var _this = this;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
    	if(request.status==200) {
	        _this.context.decodeAudioData(request.response, function(buffer) {
	            _this.sample.buffer = buffer;
	            //console.log(_this.sample);

				_this.addAudioProperties();
	        });

	        _this.activate();
    	} else {
    		console.log(request.status);
    	}
    }
    request.send();
};

Pad.prototype.addAudioProperties = function() {
	var _this = this;

    this.sample.play = function () {
    	var s = _this.context.createBufferSource();
    	s.buffer = _this.sample.buffer;
    	s.connect(_this.context.destination);
    	_this.sample.s = s;
        s.start(0);
        _this.playing();

		s.onended = function() {
	    	_this.activate();
	    }
    }

    this.sample.stop = function() {
    	s.stop();
    }

};

Pad.prototype.playing = function() {

	this.$el.off('click', function(){
		_this.clicked(_this);
	});

	this.$el.css({
		'background-color': '#889900'
	});
}

Pad.prototype.activate = function() {
	//console.log("Pad.activate()");
	var _this = this;

	this.$el.on('click', function(){
		_this.clicked(_this);
	});

	this.$el.css({
		'background-color': '#FFAA00'
	});
};

Pad.prototype.deactivate = function() {
	var _this = this;

	this.$el.off('click', function(){
		_this.clicked(_this);
	});

	this.$el.css({
		'background-color': '#FF3300'
	});
};

Pad.prototype.handleWindowResize = function() {
	
};