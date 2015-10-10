"use strict";

function KeyboardController($pads, PadController) {
  this.$pads = $pads;
  this.padController = padController;
  this.loopKeyCodes = {
    49: '1',
    50: '2',
    51: '3',
    52: '4',
  };
  this.oneShotKeyCodes = {
    81: 'q',
    87: 'w',
    69: 'e',
    82: 'r',
    65: 'a',
    83: 's',
    68: 'd',
    70: 'f',
    90: 'z',
    88: 'x',
    67: 'c',
    86: 'v',
    85: 'u',
    73: 'i',
    79: 'o',
    80: 'p',
  };

  this.assignKeyUpEventToOneShotPads();
}

KeyboardController.prototype.assignKeyUpEventToOneShotPads = function() {
  var _this = this;

  $(document).on('keyup', function(event) {
    if (_this.oneShotKeyCodes[event.keyCode]) {
      this.padController.padArray[0];

      return false;
    }
  });
};