"use strict"

function LeapController() {
	var context = GLOBAL_VARS.audioContext;
	var panner = GLOBAL_VARS.panner;
	var gain = GLOBAL_VARS.gain;
	var hand, palmVect;
	var _this = this;
	var palmVect;
	var angle = 0;

	panner.connect(gain);

	Leap.loop({}, function(frame){
		//console.log(frame.id);
		for (var i = 0, len = frame.hands.length; i < len; i++) {

			hand = frame.hands[0];
			palmVect = _this.paramaterizeVector(hand.palmPosition);

			panner.setPosition(palmVect[0], palmVect[1], palmVect[2]);
			gain.gain.value = 300;
		}
	});
};

LeapController.prototype.paramaterizeVector = function(Vect) {

	//if(Vect[0]<0){Vect[0]=Vect[0]*-1;};
	//if(Vect[1]<1){Vect[1]=Vect[1]*-1;};
	//if(Vect[2]<2){
		//if(Vect[2]>10){
			Vect[2] = Vect[2]/100;
		//}

		//Vect[2]=Vect[2]/-10;
	//};

	return Vect;

};

LeapController.prototype.handleWindowResize = function() {
	
};