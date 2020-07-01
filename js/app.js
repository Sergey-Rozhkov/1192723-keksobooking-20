'use strict';

window.app = (function () {
  var init = function () {
    window.form.disableInputsOnAddForm();
    window.filterForm.disableInputsOnFilterForm();
    window.form.fillAddressField(true);
  };

  var setNotActiveState = function () {
    window.pin.removeAdvertPinsFromMap();
    window.card.closeAdvertCard();
    window.map.deactivateMap();
    window.form.deactivateForm();
    window.filterForm.resetForm();
  };

  return {
    init: init,
    setNotActiveState: setNotActiveState
  };
})();

window.app.init();
