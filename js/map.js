'use strict';

window.map = (function () {
  var mapElement = document.querySelector('.map');
  var mapWidth = mapElement.clientWidth;
  var mainPinElement = document.querySelector('.map__pin--main');

  var isActiveMap = function () {
    return !mapElement.classList.contains('map--faded');
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

  var getMaxTopCoordinate = function () {
    return window.constants.MAX_Y - window.constants.MAIN_PIN_HEIGHT;
  };

  var getMinTopCoordinate = function () {
    return window.constants.MIN_Y - window.constants.MAIN_PIN_HEIGHT;
  };

  var getMainPinHalfWidth = function () {
    return window.constants.MAIN_PIN_WIDTH / 2;
  };

  mainPinElement.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      if (isDisabledMap()) {
        activateMap();
        window.form.fillAddressField();
      } else {
        evt.preventDefault();

        var startCoords = {
          x: evt.clientX,
          y: evt.clientY
        };

        var dragged = false;

        var onMouseMove = function (moveEvt) {
          moveEvt.preventDefault();

          dragged = true;

          var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
          };

          startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
          };

          var newTopCoordinate = mainPinElement.offsetTop - shift.y;
          if (newTopCoordinate + window.constants.MAIN_PIN_HEIGHT < window.constants.MIN_Y) {
            newTopCoordinate = getMinTopCoordinate();
          }
          if (newTopCoordinate + window.constants.MAIN_PIN_HEIGHT > window.constants.MAX_Y) {
            newTopCoordinate = getMaxTopCoordinate();
          }
          mainPinElement.style.top = newTopCoordinate + 'px';

          var newLeftCoordinate = mainPinElement.offsetLeft - shift.x;
          if (newLeftCoordinate < -getMainPinHalfWidth()) {
            newLeftCoordinate = -getMainPinHalfWidth();
          }

          if (newLeftCoordinate > mapWidth - getMainPinHalfWidth()) {
            newLeftCoordinate = mapWidth - getMainPinHalfWidth();
          }

          mainPinElement.style.left = newLeftCoordinate + 'px';

          window.form.fillAddressField();
        };

        var onMouseUp = function (upEvt) {
          upEvt.preventDefault();

          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);

          if (dragged) {
            var onClickPreventDefault = function (clickEvt) {
              clickEvt.preventDefault();
              mainPinElement.removeEventListener('click', onClickPreventDefault);
            };
            mainPinElement.addEventListener('click', onClickPreventDefault);
          }
          window.form.fillAddressField();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      }
    }
  });

  var activateMap = function () {
    if (isActiveMap()) {
      return;
    }

    window.data.initAdverts(successHandler, errorHandler);

    mapElement.classList.remove('map--faded');
    window.filterForm.enableInputsOnFilterForm();
    window.form.activateForm();
  };

  var deactivateMap = function () {
    window.form.deactivateForm();
    window.filterForm.disableInputsOnFilterForm();
    mapElement.classList.add('map--faded');
    window.data.adverts = [];
    window.pin.removeAdvertPinsFromMap();
  };

  var successHandler = function (response) {
    var adverts = window.utils.getRandomElements(response, window.constants.ADVERTS_COUNT);

    if (Array.isArray(adverts)) {
      adverts.map(function (advert, index) {
        advert.id = index;
        return advert;
      });

      window.data.adverts = adverts;
      window.filterForm.filterAdverts();
    }
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  mainPinElement.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      activateMap();
    }
  });

  return {
    getMainPinCoordinates: getMainPinCoordinates,
    deactivateMap: deactivateMap
  };
})();
