'use strict';

window.app = (function () {
  var init = function () {
    window.form.disableInputs();
    window.filterForm.disableInputs();
    window.form.fillAddressField(true);
  };

  return {
    init: init
  };
})();

window.app.init();
