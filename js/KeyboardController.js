"use strict";

function KeyboardController(padController) {
  this.padController = padController;
  this.loopKeyCodes = GLOBAL_VARS.loopKeyCodes;
  this.oneShotKeyCodes = GLOBAL_VARS.oneShotKeyCodes;
  this.controlKeyCodes = GLOBAL_VARS.controlKeyCodes;

  this.handleKeyUpEvents();
}

KeyboardController.prototype.handleKeyUpEvents = function() {
  var _this = this;

  $(document).on('keydown', function(event) {
    if (_this.controlKeyCodes[event.keyCode]) {
      $('.stop_all').click();

      return false;
    }

    if (_this.loopKeyCodes[event.keyCode]) {
      var padElement = _this.loopKeyCodes[event.keyCode][1];
      _this.padController.loopPadArray[padElement].clicked();

      return false;
    }

    if (_this.oneShotKeyCodes[event.keyCode]) {
      var padElement = _this.oneShotKeyCodes[event.keyCode][1];
      _this.padController.oneShotPadArray[padElement].clicked();

      return false;
    }
  });
};
