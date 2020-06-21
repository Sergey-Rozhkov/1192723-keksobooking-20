'use strict';

window.pin = (function () {
  var mapPinsElement = document.querySelector('.map__pins');
  var advertPinTemplateElement = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

  var renderAdvertPinsOnMap = function (adverts) {
    var fragment = document.createDocumentFragment();
    adverts.forEach(function (advert) {
      fragment.appendChild(renderAdvertPin(advert));
    });
    mapPinsElement.appendChild(fragment);
  };

  var renderAdvertPin = function (advert) {
    var pinElement = advertPinTemplateElement.cloneNode(true);

    var image = pinElement.querySelector('img');
    image.src = advert.author.avatar;
    image.alt = advert.offer.title;

    pinElement.style.left = advert.location.x - (image.width / 2) + 'px';
    pinElement.style.top = advert.location.y - image.height + 'px';

    pinElement.dataset.advert = advert.id;

    return pinElement;
  };

  var bindPinEvents = function (adverts) {
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

  return {
    renderAdvertPinsOnMap: renderAdvertPinsOnMap,
    renderAdvertPin: renderAdvertPin,
    bindPinEvents: bindPinEvents
  };
})();
