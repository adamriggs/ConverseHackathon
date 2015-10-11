"use strict"

function LeapController() {
	var context = GLOBAL_VARS.audioContext;
	var panner = GLOBAL_VARS.panner;
	var hand, palmVect;
	var _this = this;
	var palmVect;
	var angle = 0;

	Leap.loop({}, function(frame){
		//console.log("leap loop");
		//console.log(frame.id);
		//if(frame.id%10==0){
			for (var i = 0, len = frame.hands.length; i < len; i++) {
				hand = frame.hands[0];

				palmVect = _this.paramaterizeVector(hand.palmPosition);

				panner.setPosition(palmVect[0], palmVect[1], palmVect[2]);
				//panner.setPosition(palmVect[0], palmVect[1], .5);
				//console.log(palmVect[0], palmVect[1], palmVect[2]);
				//console.log(palmVect[2]);

				//panner.setOrientation(Math.cos(angle), -Math.sin(angle), 1);
				//panner.connect(context.destination);
			}
		//}
	});
};

LeapController.prototype.paramaterizeVector = function(Vect) {

	//if(Vect[0]<0){Vect[0]=Vect[0]*-1;};
	//if(Vect[1]<1){Vect[1]=Vect[1]*-1;};
	if(Vect[2]<2){
		if(Vect[2]>10){
			Vect[2] = Vect[2]/10;
		}

		//Vect[2]=Vect[2]/-10;
	};

	return Vect;

};

LeapController.prototype.handleWindowResize = function() {
	
};