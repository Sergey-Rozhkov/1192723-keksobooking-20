'use strict';

window.filterForm = (function () {
  var filterFormInputElements = document.querySelectorAll('.map__filters input');
  var filterFormSelectElements = document.querySelectorAll('.map__filters select');

  var enableInputsOnFilterForm = function () {
    window.formUtils.enableInputs(filterFormInputElements);
    window.formUtils.enableInputs(filterFormSelectElements);
  };

  var disableInputsOnFilterForm = function () {
    window.formUtils.disableInputs(filterFormInputElements);
    window.formUtils.disableInputs(filterFormSelectElements);
  };

  return {
    enableInputsOnFilterForm: enableInputsOnFilterForm,
    disableInputsOnFilterForm: disableInputsOnFilterForm
  };
})();
