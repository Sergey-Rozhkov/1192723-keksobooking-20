'use strict';

window.app = (function () {
  var init = function () {
    window.form.disableInputs();
    window.filterForm.disableInputs();
    window.form.fillAddressField(true);
  };

  var setNotActiveState = function () {
    window.pin.removePins();
    window.card.close();
    window.map.deactivate();
    window.form.deactivate();
    window.filterForm.reset();
  };

  return {
    init: init,
    setNotActiveState: setNotActiveState
  };
})();

window.app.init();
