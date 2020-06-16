'use strict';

window.formUtils = (function () {
  var disableInputs = function (elements) {
    elements.forEach(function (input) {
      addDisable(input);
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

  var removeDisable = function (element) {
    element.disabled = false;
  };

  return {
    disableInputs: disableInputs,
    enableInputs: enableInputs
  };
})();
