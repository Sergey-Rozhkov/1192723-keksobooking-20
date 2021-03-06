'use strict';

window.constants = (function () {
  var ADVERT_TYPES = [
    'palace',
    'flat',
    'house',
    'bungalo'
  ];

  var ADVERT_TYPES_TEXT = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  var ADVERT_REGISTRATION_TIMES = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  var ADVERTS_COUNT = 8;
  var MIN_PRICE = 10000;
  var MAX_PRICE = 5000000;
  var MIN_ROOMS = 1;
  var MAX_ROOMS = 5;
  var MIN_GUESTS = 1;
  var MAX_GUESTS = 10;
  var MIN_Y = 130;
  var MAX_Y = 630;
  var MAIN_PIN_HEIGHT = 84;
  var MAIN_PIN_WIDTH = 62;
  var MAIN_PIN_DISABLED_HEIGHT = 62;
  var MAIN_PIN_DISABLED_WIDTH = 62;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var NOT_FOR_GUESTS_ROOMS_COUNT = 100;
  var MIN_ADVERT_TITLE_LENGTH = 30;
  var MAX_ADVERT_TITLE_LENGTH = 100;
  var TYPE_ADVERT_MIN_PRICE = {
    bungalo: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
  };
  var MAX_ADVERT_PRICE_VALUE = 1000000;

  var XHR_API_URL = 'https://javascript.pages.academy/keksobooking';
  var XHR_TIMEOUT = 5000;
  var XHR_STATUS_SUCCESS = 200;

  var MAX_SIMILAR_ADVERTS = 5;
  var SIMILAR_ADVERTS_OPTION_ALL = 'any';
  var SIMILAR_ADVERTS_DEBOUNCE_TIME = 500;

  var FILTER_FORM_PRICE_VALUES = {
    'middle': {
      min: 10000,
      max: 50000
    },
    'low': {
      min: 0,
      max: 10000
    },
    'high': {
      min: 50000,
      max: Number.MAX_SAFE_INTEGER
    }
  };

  var ADVERT_FORM_PHOTO_PREVIEW_MAX_WIDTH = 70;
  var ADVERT_FORM_PHOTO_PREVIEW_MAX_HEIGHT = 70;
  var FORM_ELEMENTS_TO_VALIDATE = ['input', 'select', 'textarea'];
  var FORM_ELEMENTS_TO_DISABLE = ['input', 'select', 'textarea', 'button'];

  return {
    ADVERT_TYPES: ADVERT_TYPES,
    ADVERT_TYPES_TEXT: ADVERT_TYPES_TEXT,
    ADVERT_REGISTRATION_TIMES: ADVERT_REGISTRATION_TIMES,
    FEATURES: FEATURES,
    ADVERTS_COUNT: ADVERTS_COUNT,
    MIN_PRICE: MIN_PRICE,
    MAX_PRICE: MAX_PRICE,
    MIN_ROOMS: MIN_ROOMS,
    MAX_ROOMS: MAX_ROOMS,
    MIN_GUESTS: MIN_GUESTS,
    MAX_GUESTS: MAX_GUESTS,
    MIN_Y: MIN_Y,
    MAX_Y: MAX_Y,
    MAIN_PIN_HEIGHT: MAIN_PIN_HEIGHT,
    MAIN_PIN_WIDTH: MAIN_PIN_WIDTH,
    MAIN_PIN_DISABLED_HEIGHT: MAIN_PIN_DISABLED_HEIGHT,
    MAIN_PIN_DISABLED_WIDTH: MAIN_PIN_DISABLED_WIDTH,
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    NOT_FOR_GUESTS_ROOMS_COUNT: NOT_FOR_GUESTS_ROOMS_COUNT,
    MIN_ADVERT_TITLE_LENGTH: MIN_ADVERT_TITLE_LENGTH,
    MAX_ADVERT_TITLE_LENGTH: MAX_ADVERT_TITLE_LENGTH,
    TYPE_ADVERT_MIN_PRICE: TYPE_ADVERT_MIN_PRICE,
    MAX_ADVERT_PRICE_VALUE: MAX_ADVERT_PRICE_VALUE,
    XHR_API_URL: XHR_API_URL,
    XHR_TIMEOUT: XHR_TIMEOUT,
    XHR_STATUS_SUCCESS: XHR_STATUS_SUCCESS,
    MAX_SIMILAR_ADVERTS: MAX_SIMILAR_ADVERTS,
    SIMILAR_ADVERTS_OPTION_ALL: SIMILAR_ADVERTS_OPTION_ALL,
    SIMILAR_ADVERTS_DEBOUNCE_TIME: SIMILAR_ADVERTS_DEBOUNCE_TIME,
    FILTER_FORM_PRICE_VALUES: FILTER_FORM_PRICE_VALUES,
    ADVERT_FORM_PHOTO_PREVIEW_MAX_WIDTH: ADVERT_FORM_PHOTO_PREVIEW_MAX_WIDTH,
    ADVERT_FORM_PHOTO_PREVIEW_MAX_HEIGHT: ADVERT_FORM_PHOTO_PREVIEW_MAX_HEIGHT,
    FORM_ELEMENTS_TO_VALIDATE: FORM_ELEMENTS_TO_VALIDATE,
    FORM_ELEMENTS_TO_DISABLE: FORM_ELEMENTS_TO_DISABLE
  };
})();
