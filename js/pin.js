'use strict';

window.pin = (function () {
  var mapPinsElement = document.querySelector('.map__pins');
  var advertPinTemplateElement = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

  var addPins = function (adverts) {
    var fragment = document.createDocumentFragment();
    adverts.forEach(function (advert) {
      fragment.appendChild(renderAdvertPin(advert));
    });
    mapPinsElement.appendChild(fragment);
    bindPinEvents();
  };

  var removePins = function () {
    var mapPinElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinElements.forEach(function (element) {
      element.remove();
    });
  };

  var renderAdvertPin = function (advert) {
    var pinElement = advertPinTemplateElement.cloneNode(true);

    var image = pinElement.querySelector('img');
    image.src = advert.author.avatar;
    image.alt = advert.offer.title;

    pinElement.style.left = advert.location.x - (window.constants.PIN_WIDTH / 2) + 'px';
    pinElement.style.top = advert.location.y - window.constants.PIN_HEIGHT + 'px';

    pinElement.dataset.advert = advert.id;

    return pinElement;
  };

  var showAdvertInfo = function (evt) {
    removeActiveClass();
    var advertIndex = evt.currentTarget.dataset.advert;
    window.card.renderPopup(window.data.adverts[advertIndex]);
    evt.currentTarget.classList.add('map__pin--active');
  };

  var removeActiveClass = function () {
    var mapPinElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinElements.forEach(function (mapPin) {
      mapPin.classList.remove('map__pin--active');
    });
  };

  var bindPinEvents = function () {
    var mapPinElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinElements.forEach(function (mapPin) {
      mapPin.addEventListener('click', function (evt) {
        showAdvertInfo(evt);
      });

      mapPin.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          showAdvertInfo(evt);
        }
      });
    });
  };

  return {
    addPins: addPins,
    removePins: removePins,
    renderAdvertPin: renderAdvertPin,
    bindPinEvents: bindPinEvents,
    removeActiveClass: removeActiveClass
  };
})();
