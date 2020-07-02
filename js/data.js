'use strict';

window.data = (function () {
  var adverts = [];

  var initAdverts = function (successHandler, errorHandler) {
    var xhr = window.utils.prepareRequest(successHandler, errorHandler);

    xhr.open('GET', window.constants.XHR_API_URL + '/data');
    xhr.send();
  };

  var saveAdvertForm = function (data, successHandler, errorHandler) {
    var xhr = window.utils.prepareRequest(successHandler, errorHandler);

    xhr.open('POST', window.constants.XHR_API_URL);
    xhr.send(data);
  };

  return {
    adverts: adverts,
    initAdverts: initAdverts,
    saveAdvertForm: saveAdvertForm
  };
})();
