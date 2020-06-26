'use strict';

window.filterForm = (function () {
  var filterFormElement = document.querySelector('.map__filters');
  var filterFormInputElements = document.querySelectorAll('.map__filters input');
  var filterFormSelectElements = document.querySelectorAll('.map__filters select');
  var filterFormTypeElement = filterFormElement.querySelector('[name=housing-type]');

  var enableInputsOnFilterForm = function () {
    window.formUtils.enableInputs(filterFormInputElements);
    window.formUtils.enableInputs(filterFormSelectElements);
  };

  var disableInputsOnFilterForm = function () {
    window.formUtils.disableInputs(filterFormInputElements);
    window.formUtils.disableInputs(filterFormSelectElements);
  };

  var filterAdverts = function () {
    window.pin.removeAdvertPinsFromMap();

    var selectedType = filterFormTypeElement.value;
    var sameAdverts = window.data.adverts.filter(function (advert) {
      if (selectedType === window.constants.SIMILAR_ADVERTS_TYPE_ALL) {
        return true;
      }

      return advert.offer.type === selectedType;
    });

    sameAdverts = sameAdverts.slice(0, window.constants.MAX_SIMILAR_ADVERTS);

    window.pin.addPinsOnMap(sameAdverts);
  };

  filterFormElement.addEventListener('change', function () {
    window.card.closeAdvertCard();
  });

  filterFormTypeElement.addEventListener('change', function () {
    window.debounce(filterAdverts);
  });

  return {
    enableInputsOnFilterForm: enableInputsOnFilterForm,
    disableInputsOnFilterForm: disableInputsOnFilterForm,
    filterAdverts: filterAdverts
  };
})();
