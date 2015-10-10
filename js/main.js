"use strict"

var GLOBAL_VARS = {
	audioContext: {},
	loopPadCount: 4,
  oneShotPadCount: 16,
	samples: {
		all: {
			bass_all: bass_all,
			drums_all: drums_all,
			guitar_all: guitar_all,
			horns_and_reeds_all: horns_and_reeds_all,
			keyboards_all: keyboards_all,
			other_stringed_all: other_stringed_all,
			percussion_all: percussion_all,
			pitched_percussion_all: pitched_percussion_all,
			strings_all: strings_all,
			synths_all: synths_all,
			vocals_all: vocals_all
		},
		loop: {
			bass_loop: bass_loop,
			drums_loop: drums_loop,
			guitar_loop: guitar_loop,
			horns_and_reeds_loop: horns_and_reeds_loop,
			keyboards_loop: keyboards_loop,
			other_stringed_loop: other_stringed_loop,
			percussion_loop: percussion_loop,
			pitched_percussion_loop: pitched_percussion_loop,
			strings_loop: strings_loop,
			synths_loop: synths_loop,
			vocals_loop: vocals_loop
		},
		one_shot: {
			bass_one_shot: bass_one_shot,
			drums_one_shot: drums_one_shot,
			guitar_one_shot: guitar_one_shot,
			horns_and_reeds_one_shot: horns_and_reeds_one_shot,
			keyboards_one_shot: keyboards_one_shot,
			other_stringed_one_shot: other_stringed_one_shot,
			percussion_one_shot: percussion_one_shot,
			pitched_percussion_one_shot: pitched_percussion_one_shot,
			strings_one_shot: strings_one_shot,
			synths_one_shot: synths_one_shot,
			vocals_one_shot: vocals_one_shot
		}
	}
};

var app;

//Document ready
$( document ).ready(function() {
    console.log("***** DOM LOAD COMPLETE *****");

    buildApp();
});

function buildApp() {
    console.log("buildApp()");
    app = new App();

    console.log("***** APP BUILD COMPLETE *****");
};
