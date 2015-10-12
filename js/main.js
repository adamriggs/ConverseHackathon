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
	},
  	loopKeyCodes: {
		// browser key code: [keyboard key, element in pad array]
		49: ['1', 0],
		50: ['2', 1],
		51: ['3', 2],
		52: ['4', 3],
	},
	oneShotKeyCodes: {
		81: ['q', 0],
		87: ['w', 1],
		69: ['e', 2],
		82: ['r', 3],
		65: ['a', 4],
		83: ['s', 5],
		68: ['d', 6],
		70: ['f', 7],
		90: ['z', 8],
		88: ['x', 9],
		67: ['c', 10],
		86: ['v', 11],
		85: ['u', 12],
		73: ['i', 13],
		79: ['o', 14],
		80: ['p', 15],
	},
	controlKeyCodes: {
	// browser key code: [keyboard key, element in pad array]
		16: 'shift'
	},
	loopPadCharacters: [
	// browser key code: [keyboard key, element in pad array]
		'1',
		'2',
		'3',
		'4'
	],
	oneShotPadCharacters: [
		'q',
		'w',
		'e',
		'r',
		'a',
		's',
		'd',
		'f',
		'z',
		'x',
		'c',
		'v',
		'u',
		'i',
		'o',
		'p'
	]
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
