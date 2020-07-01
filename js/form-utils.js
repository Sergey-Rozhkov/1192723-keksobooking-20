'use strict';

window.formUtils = (function () {
  var disableInputs = function (elements) {
    elements.forEach(function (input) {
      addDisable(input);
    });
  };

  var disableButtons = function (elements) {
    elements.forEach(function (btn) {
      addDisable(btn);
    });
  };

  var addDisable = function (element) {
    element.disabled = true;
  };

  var enableInputs = function (elements) {
    elements.forEach(function (input) {
      removeDisable(input);
    });
  };

  var enableButtons = function (elements) {
    elements.forEach(function (btn) {
      removeDisable(btn);
    });
  };

  var removeDisable = function (element) {
    element.disabled = false;
  };

  return {
    disableInputs: disableInputs,
    enableInputs: enableInputs,
    disableButtons: disableButtons,
    enableButtons: enableButtons
  };
})();
