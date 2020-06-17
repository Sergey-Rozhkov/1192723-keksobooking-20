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

  return {
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement,
    getRandomElements: getRandomElements
  };
})();
