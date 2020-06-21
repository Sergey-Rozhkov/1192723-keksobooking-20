'use strict';

window.data = (function () {
  var prepareXRHRequest = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.constants.XHR_STATUS_SUCCESS) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constants.XHR_TIMEOUT;

    return xhr;
  };

  var load = function (onLoad, onError) {
    var xhr = prepareXRHRequest(onLoad, onError);

    xhr.open('GET', window.constants.XHR_API_URL + '/data');
    xhr.send();
  };

  var successHandler = function (response) {
    var adverts = window.utils.getRandomElements(response, window.constants.ADVERTS_COUNT);

    adverts.map(function (advert, index) {
      advert.id = index;
      return advert;
    });

    window.pin.renderAdvertPinsOnMap(adverts);
    window.pin.bindPinEvents(adverts);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var initAdverts = function () {
    load(successHandler, errorHandler);
  };

  return {
    initAdverts: initAdverts
  };
})();
