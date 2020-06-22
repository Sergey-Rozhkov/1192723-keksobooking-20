'use strict';

var init = function () {
  window.form.disableInputsOnAddForm();
  window.filterForm.disableInputsOnFilterForm();
  window.form.fillAddressField(true);
};

init();
