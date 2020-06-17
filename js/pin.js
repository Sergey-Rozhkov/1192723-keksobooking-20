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

  return {
    renderAdvertPinsOnMap: renderAdvertPinsOnMap,
    renderAdvertPin: renderAdvertPin
  };
})();
