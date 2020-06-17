'use strict';

window.data = (function () {
  var mapElement = document.querySelector('.map');
  var mapWidth = mapElement.clientWidth;

  var getAdverts = function () {
    var result = [];
    for (var i = 0; i < window.constants.ADVERTS_COUNT; i++) {
      var locationX = window.utils.getRandomInt(0, mapWidth);
      var locationY = window.utils.getRandomInt(window.constants.MIN_Y, window.constants.MAX_Y);
      result.push({
        id: i,
        author: {
          avatar: 'img/avatars/user0' + (i + 1) + '.png'
        },
        offer: {
          title: window.utils.getRandomElement(window.constants.TITLES),
          address: locationX + ', ' + locationY,
          price: window.utils.getRandomInt(window.constants.MIN_PRICE, window.constants.MAX_PRICE),
          type: window.utils.getRandomElement(window.constants.ADVERT_TYPES),
          rooms: window.utils.getRandomInt(window.constants.MIN_ROOMS, window.constants.MAX_ROOMS),
          guests: window.utils.getRandomInt(window.constants.MIN_GUESTS, window.constants.MAX_GUESTS),
          checkin: window.utils.getRandomElement(window.constants.ADVERT_REGISTRATION_TIMES),
          checkout: window.utils.getRandomElement(window.constants.ADVERT_REGISTRATION_TIMES),
          features: window.utils.getRandomElements(window.constants.FEATURES, window.utils.getRandomInt(0, window.constants.FEATURES.length - 1)),
          description: window.utils.getRandomElement(window.constants.DESCRIPTIONS),
          photos: window.utils.getRandomElements(window.constants.PHOTOS, window.utils.getRandomInt(0, 10)),
        },
        location: {
          x: locationX,
          y: locationY
        }
      });
    }
    return result;
  };

  return {
    getAdverts: getAdverts
  };
})();
