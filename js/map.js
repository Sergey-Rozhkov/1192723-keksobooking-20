'use strict';

window.map = (function () {
  var mapElement = document.querySelector('.map');
  var mainPinElement = document.querySelector('.map__pin--main');

  var isActiveMap = function () {
    return !mapElement.classList.contains('map--faded');
  };

  var bindMapPinEvents = function (adverts) {
    var mapPinElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinElements.forEach(function (mapPin) {
      mapPin.addEventListener('click', function (evt) {
        var advertIndex = evt.currentTarget.dataset.advert;
        var advertCard = window.card.renderAdvertCard(adverts[advertIndex]);
        window.card.showAdvertCard(advertCard);
      });

      mapPin.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          var advertIndex = evt.currentTarget.dataset.advert;
          var advertCard = window.card.renderAdvertCard(adverts[advertIndex]);
          window.card.showAdvertCard(advertCard);
        }
      });
    });
  };

  var isDisabledMap = function () {
    return mapElement.classList.contains('map--faded');
  };

  var getMainPinCoordinates = function () {
    if (isDisabledMap()) {
      return {
        x: mainPinElement.offsetLeft + window.constants.MAIN_PIN_DISABLED_WIDTH / 2,
        y: mainPinElement.offsetTop + window.constants.MAIN_PIN_DISABLED_HEIGHT
      };
    }

    return {
      x: mainPinElement.offsetLeft + window.constants.MAIN_PIN_WIDTH / 2,
      y: mainPinElement.offsetTop + window.constants.MAIN_PIN_HEIGHT
    };
  };

  mainPinElement.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      activateMap();
      window.form.fillAddressField();
    }
  });

  var activateMap = function () {
    if (isActiveMap()) {
      return;
    }

    var adverts = window.data.getAdverts();
    window.pin.renderAdvertPinsOnMap(adverts);

    mapElement.classList.remove('map--faded');
    window.form.enableInputsOnAddForm();
    window.filterForm.enableInputsOnFilterForm();
    bindMapPinEvents(adverts);
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
  };

  mainPinElement.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activateMap();
    }
  });

  return {
    getMainPinCoordinates: getMainPinCoordinates
  };
})();
