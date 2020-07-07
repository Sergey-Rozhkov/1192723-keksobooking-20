'use strict';

window.utils = (function () {
  var getRandomInt = function (min, max) {
    return min + Math.floor((max - min) * Math.random());
  };

  var getRandomElement = function (arr) {
    return arr[window.utils.getRandomInt(0, arr.length)];
  };

  var getRandomElements = function (arr, count) {
    var tmp = JSON.parse(JSON.stringify(arr));
    var result = [];

    for (var i = 0; i < count; i++) {
      var elementInd = window.utils.getRandomInt(0, tmp.length - 1);
      result = result.concat(tmp.splice(elementInd, 1));
    }

    return result;
  };

  var prepareRequest = function (successHandler, errorHandler) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.constants.XHR_STATUS_SUCCESS) {
        successHandler(xhr.response);
      } else {
        errorHandler('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      errorHandler('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      errorHandler('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constants.XHR_TIMEOUT;

    return xhr;
  };

  var isFunction = function (func) {
    return func && typeof func === 'function';
  };

  var isEscPress = function (evt) {
    return evt.key === 'Escape';
  };

  var isEnterPress = function (evt) {
    return evt.key === 'Enter';
  };

  return {
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement,
    getRandomElements: getRandomElements,
    prepareRequest: prepareRequest,
    isFunction: isFunction,
    isEscPress: isEscPress,
    isEnterPress: isEnterPress
  };
})();
