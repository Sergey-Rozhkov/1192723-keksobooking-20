'use strict';

window.constants = (function () {
  var TITLES = [
    'Уютное гнездышко для молодоженов',
    'Маленькая квартирка рядом с парком',
    'Небольшая лавочка в парке',
    'Императорский дворец в центре Токио',
    'Милейший чердачок',
    'Наркоманский притон',
    'Чёткая хата',
    'Стандартная квартира в центре',
    'Тихая квартирка недалеко от метро',
    'Милое гнездышко для фанатов Анимэ'
  ];

  var DESCRIPTIONS = [
    'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
    'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
    'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
    'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    'Маленькая квартирка на чердаке. Для самых не требовательных.',
    'У нас есть всё! Шприцы, интернет, кофе. Для всех кто знает толк в отдыхе. Полицию просим не беспокоить.',
    'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
    'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
    'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    'Азиатов просьба не беспокоить.'
  ];

  var PHOTOS = [
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_25_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_27_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_1_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_12_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_5_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/01488611-c1f9-4854-ad67-9f0ad3e857e6.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d976dd4b-2a7e-415a-a2a2-afc51caf8006.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/5a29d708-9396-40bf-b002-92c5fdeb5c90.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/23e332cb-1379-4582-85ac-901d6c441635.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/1c859bbf-61d6-4295-b463-c1d0cbf62592.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f5e66549-1940-4659-b27a-652f5c809231.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130219545024.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130215449816.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130206399539.jpg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/69d53ff8-cd47-479d-8c9a-5170352aa169.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/19614107-a1da-4a0b-8a93-95107704a598.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/a97c72b9-e311-4a5a-863d-ea1e31ae9924.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d2a52c68-e877-4902-be6d-c7f3cb198437.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/5000000/4500000/4493700/4493658/4493658_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/b4/c6/b4c674087f12b74bc71fe073923ec744dfe1ed8f.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/1e/e8/1ee854db105a1f6bcd19ea62e1aa294724af7885.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/ca/9a/ca9ad256650553cdce9d8ff8baad93d4f17b9484.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/42624d02-3198-4979-b521-194024454eb7.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/a4/bb/a4bbfa3d98c0ddf60e95e610509dbede8160e40e.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_12_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/aa9f9334-acd2-46f7-ae6e-4ae039376ec6.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/987935fb-633a-46b8-9b76-76af9f35c5e3.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/434b2eda-5af9-4b93-b97d-4e7514621ff1.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/fa9c3bba-a64a-4019-ab50-102bf6e5d691.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f779d886-18a6-4ffb-b7c2-f5d4d0c8952a.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/9b/6c/9b6cacd832ce9f3db3f17b3a2f368958710ce518.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/9c/5d/9c5dc5a6daf5353bb44b5696df1c1186c55173b9.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/cd/c6/cdc6e4a1df6259cb54c75edb6ac351180b49b5ec.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/abcedd44-bfbd-411d-9919-fa2ac82ef6b0.jpeg'
  ];

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
  var MAIN_PIN_DISABLED_HEIGHT = 200;
  var MAIN_PIN_DISABLED_WIDTH = 200;
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

  return {
    TITLES: TITLES,
    DESCRIPTIONS: DESCRIPTIONS,
    PHOTOS: PHOTOS,
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
    FILTER_FORM_PRICE_VALUES: FILTER_FORM_PRICE_VALUES
  };
})();
