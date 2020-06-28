'use strict';

window.filterForm = (function () {
  var filterFormElement = document.querySelector('.map__filters');
  var filterFormInputElements = document.querySelectorAll('.map__filters input');
  var filterFormSelectElements = document.querySelectorAll('.map__filters select');
  var filterFormTypeElement = filterFormElement.querySelector('[name=housing-type]');
  var filterFormPriceElement = filterFormElement.querySelector('[name=housing-price]');
  var filterFormRoomsElement = filterFormElement.querySelector('[name=housing-rooms]');
  var filterFormGuestsElement = filterFormElement.querySelector('[name=housing-guests]');
  var filterFormFeaturesElements = filterFormElement.querySelectorAll('[name=features]');

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

    var sameAdverts = window.data.adverts.filter(function (advert) {
      return checkAdvertType(advert) && checkAdvertPrice(advert)
        && checkAdvertRooms(advert) && checkAdvertGuests(advert) && checkAdvertFeatures(advert);
    });

    sameAdverts = sameAdverts.slice(0, window.constants.MAX_SIMILAR_ADVERTS);

    window.pin.addPinsOnMap(sameAdverts);
  };

  var isOptionAll = function (value) {
    return value === window.constants.SIMILAR_ADVERTS_OPTION_ALL;
  };

  var checkAdvertType = function (advert) {
    var selectedType = filterFormTypeElement.value;
    if (isOptionAll(selectedType)) {
      return true;
    }

    return advert.offer.type === selectedType;
  };

  var checkAdvertPrice = function (advert) {
    var selectedPrice = filterFormPriceElement.value;
    if (isOptionAll(selectedPrice)) {
      return true;
    }

    var priceRange = window.constants.FILTER_FORM_PRICE_VALUES[selectedPrice];

    return advert.offer.price > priceRange.min && advert.offer.price <= priceRange.max;
  };

  var checkAdvertRooms = function (advert) {
    var selectedRooms = filterFormRoomsElement.value;
    if (isOptionAll(selectedRooms)) {
      return true;
    }

    return advert.offer.rooms === +selectedRooms;
  };

  var checkAdvertGuests = function (advert) {
    var selectedGuests = filterFormGuestsElement.value;
    if (isOptionAll(selectedGuests)) {
      return true;
    }

    return advert.offer.guests === +selectedGuests;
  };

  var checkAdvertFeatures = function (advert) {
    var selectedOptions = [];
    filterFormFeaturesElements.forEach(function (optionElement) {
      if (optionElement.checked) {
        selectedOptions.push(optionElement.value);
      }
    });

    var featureList = selectedOptions.filter(function (el) {
      return advert.offer.features.indexOf(el) !== -1;
    });

    return selectedOptions.length === featureList.length;
  };


  filterFormElement.addEventListener('change', function () {
    window.card.closeAdvertCard();
    window.debounce(filterAdverts);
  });

  return {
    enableInputsOnFilterForm: enableInputsOnFilterForm,
    disableInputsOnFilterForm: disableInputsOnFilterForm,
    filterAdverts: filterAdverts
  };
})();
