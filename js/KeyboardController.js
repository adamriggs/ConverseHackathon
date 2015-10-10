"use strict";

function KeyboardController($pads, padController) {
  this.$pads = $pads;
  this.padController = padController;
  this.loopKeyCodes = {
    // browser key code: [keyboard key, element in pad array]
    49: ['1', 0],
    50: ['2', 1],
    51: ['3', 2],
    52: ['4', 3],
  };
  this.oneShotKeyCodes = {
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
  };

  this.assignKeyUpEventToOneShotPads();
}

KeyboardController.prototype.assignKeyUpEventToOneShotPads = function() {
  var _this = this;

  $(document).on('keyup', function(event) {
    if (_this.oneShotKeyCodes[event.keyCode]) {
      var padElement = _this.oneShotKeyCodes[event.keyCode][1];
      _this.padController.padArray[padElement].play();

      return false;
    }
  });
};
