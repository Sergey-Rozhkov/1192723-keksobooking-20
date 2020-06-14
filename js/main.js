'use strict';

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
var MAIN_PIN_HEIGHT = 64;
var MAIN_PIN_WIDTH = 62;
var MAIN_PIN_DISABLED_HEIGHT = 200;
var MAIN_PIN_DISABLED_WIDTH = 200;
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

var mapElement = document.querySelector('.map');
var mapWidth = mapElement.clientWidth;

var mapPinsElement = document.querySelector('.map__pins');

var advertPinTemplateElement = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var advertCardTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.map__card');

var addFormElement = document.querySelector('.ad-form');
var adFormInputElements = addFormElement.querySelectorAll('.ad-form input');
var adFormSelectElements = addFormElement.querySelectorAll('.ad-form select');
var adFormTextareaElements = addFormElement.querySelectorAll('.ad-form textarea');
var adFormSubmitElement = addFormElement.querySelector('.ad-form__submit');

var filterFormInputElements = document.querySelectorAll('.map__filters input');
var filterFormSelectElements = document.querySelectorAll('.map__filters select');

var mainPinElement = document.querySelector('.map__pin--main');
var addressFieldElement = document.querySelector('input[name=address]');

var addFormHousingRoomsElement = document.querySelector('select[name=rooms]');
var addFormHousingCapacityElement = document.querySelector('select[name=capacity]');

var adFormTitleElement = document.querySelector('.ad-form input[name=title]');
var adFormTypeElement = document.querySelector('.ad-form [name=type]');
var adFormPriceElement = document.querySelector('.ad-form [name=price]');
var adFormTimeInElement = document.querySelector('.ad-form [name="timein"]');
var adFormTimeOutElement = document.querySelector('.ad-form [name="timeout"]');

var getRandomInt = function (min, max) {
  return min + Math.floor((max - min) * Math.random());
};

var getRandomElement = function (arr) {
  return arr[getRandomInt(0, arr.length)];
};

var getRandomElements = function (arr, count) {
  var tmp = JSON.parse(JSON.stringify(arr));
  var result = [];
  for (var i = 0; i < count; i++) {
    var elementInd = getRandomInt(0, tmp.length - 1);
    result = result.concat(tmp.splice(elementInd, 1));
  }
  return result;
};

var generateAdverts = function (limit) {
  var result = [];
  for (var i = 0; i < limit; i++) {
    var locationX = getRandomInt(0, mapWidth);
    var locationY = getRandomInt(MIN_Y, MAX_Y);
    result.push({
      id: i,
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: getRandomElement(TITLES),
        address: locationX + ', ' + locationY,
        price: getRandomInt(MIN_PRICE, MAX_PRICE),
        type: getRandomElement(ADVERT_TYPES),
        rooms: getRandomInt(MIN_ROOMS, MAX_ROOMS),
        guests: getRandomInt(MIN_GUESTS, MAX_GUESTS),
        checkin: getRandomElement(ADVERT_REGISTRATION_TIMES),
        checkout: getRandomElement(ADVERT_REGISTRATION_TIMES),
        features: getRandomElements(FEATURES, getRandomInt(0, FEATURES.length - 1)),
        description: getRandomElement(DESCRIPTIONS),
        photos: getRandomElements(PHOTOS, getRandomInt(0, 10)),
      },
      location: {
        x: locationX,
        y: locationY
      }
    });
  }
  return result;
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

var renderAdvertPinsOnMap = function (adverts) {
  var fragment = document.createDocumentFragment();
  adverts.forEach(function (advert) {
    fragment.appendChild(renderAdvertPin(advert));
  });
  mapPinsElement.appendChild(fragment);
};

var renderAdvertCard = function (advert) {
  var cardElement = advertCardTemplateElement.cloneNode(true);

  addTextContentToPopupCard(advert.offer.title, cardElement.querySelector('.popup__title'));

  addTextContentToPopupCard(advert.offer.address, cardElement.querySelector('.popup__text--address'));

  addTextContentToPopupCard(advert.offer.price + ' ₽/ночь', cardElement.querySelector('.popup__text--price'));

  renderAdvertTypeForCard(advert, cardElement);

  var capacityText = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
  addTextContentToPopupCard(capacityText, cardElement.querySelector('.popup__text--capacity'));

  var timeText = 'Заезд после ' + advert.offer.checkin + ', выезд до ' + advert.offer.checkout;
  addTextContentToPopupCard(timeText, cardElement.querySelector('.popup__text--time'));

  renderAdvertFeaturesForCard(advert, cardElement);

  addTextContentToPopupCard(advert.offer.description, cardElement.querySelector('.popup__description'));

  addTextContentToPopupCard(advert.author.avatar, cardElement.querySelector('.popup__avatar'));

  renderAdvertPhotosForCard(advert, cardElement);

  return cardElement;
};

var renderAdvertPhotosForCard = function (advert, cardElement) {
  var advertCardPhotosElement = cardElement.querySelector('.popup__photos');
  if (advert.offer.photos.length > 0) {
    var fragment = document.createDocumentFragment();

    advert.offer.photos.forEach(function (photo, ind) {
      fragment.appendChild(renderAdvertCardPhoto(photo, ind, advert));
    });

    advertCardPhotosElement.innerHTML = '';
    advertCardPhotosElement.appendChild(fragment);
  } else {
    advertCardPhotosElement.remove();
  }
};

var renderAdvertCardPhoto = function (photo, ind, advert) {
  var advertImgElement = advertCardTemplateElement.querySelector('.popup__photo').cloneNode(true);
  advertImgElement.src = photo;
  advertImgElement.alt = advert.offer.title + ' фото ' + (ind + 1);

  return advertImgElement;
};

var renderAdvertFeaturesForCard = function (advert, cardElement) {
  var advertCardFeaturesElement = cardElement.querySelector('.popup__features');
  if (advert.offer.features.length > 0) {
    var fragment = document.createDocumentFragment();

    advert.offer.features.forEach(function (feature) {
      fragment.appendChild(renderAdvertCardFeature(feature));
    });

    advertCardFeaturesElement.innerHTML = '';
    advertCardFeaturesElement.appendChild(fragment);
  } else {
    advertCardFeaturesElement.remove();
  }
};

var renderAdvertCardFeature = function (feature) {
  var advertFeatureElement = advertCardTemplateElement.querySelector('.popup__feature').cloneNode(true);
  advertFeatureElement.className = '';
  advertFeatureElement.classList.add('popup__feature');
  advertFeatureElement.classList.add('popup__feature--' + feature);

  return advertFeatureElement;
};

var renderAdvertTypeForCard = function (advert, cardElement) {
  var popupTypeElement = cardElement.querySelector('.popup__type');
  if (advert.offer.type !== '' && typeof ADVERT_TYPES_TEXT[advert.offer.type] !== 'undefined') {
    popupTypeElement.textContent = ADVERT_TYPES_TEXT[advert.offer.type];
  } else {
    popupTypeElement.remove();
  }
};

var addTextContentToPopupCard = function (content, element) {
  if (typeof content !== 'undefined' && content !== '') {
    element.textContent = content;
  } else {
    element.remove();
  }
};

var disableInputs = function (elements) {
  elements.forEach(function (input) {
    addDisable(input);
  });
};

var enableInputs = function (elements) {
  elements.forEach(function (input) {
    removeDisable(input);
  });
};

var addDisable = function (element) {
  element.disabled = true;
};

var removeDisable = function (element) {
  element.disabled = false;
};

var disableInputsOnAddForm = function () {
  disableInputs(adFormInputElements);
  disableInputs(adFormSelectElements);
  disableInputs(adFormTextareaElements);
};

var disableInputsOnFilterForm = function () {
  disableInputs(filterFormInputElements);
  disableInputs(filterFormSelectElements);
};

var enableInputsOnAddForm = function () {
  enableInputs(adFormInputElements);
  enableInputs(adFormSelectElements);
  enableInputs(adFormTextareaElements);
};

var enableInputsOnFilterForm = function () {
  enableInputs(filterFormInputElements);
  enableInputs(filterFormSelectElements);
};

var isActiveMap = function () {
  return !mapElement.classList.contains('map--faded');
};

var activateMap = function () {
  if (isActiveMap()) {
    return;
  }

  var adverts = generateAdverts(ADVERTS_COUNT);
  renderAdvertPinsOnMap(adverts);

  mapElement.classList.remove('map--faded');
  enableInputsOnAddForm();
  enableInputsOnFilterForm();
  bindMapPinEvents(adverts);
  document.querySelector('.ad-form').classList.remove('ad-form--disabled');
};

var fillAddressField = function () {
  var coords = getMainPinCoordinates();
  addressFieldElement.value = coords.x + ', ' + coords.y;
};

var isDisabledMap = function () {
  return mapElement.classList.contains('map--faded');
};

var getMainPinCoordinates = function () {
  if (isDisabledMap()) {
    return {
      x: mainPinElement.offsetLeft + MAIN_PIN_DISABLED_WIDTH / 2,
      y: mainPinElement.offsetTop + MAIN_PIN_DISABLED_HEIGHT
    };
  }

  return {
    x: mainPinElement.offsetLeft + MAIN_PIN_WIDTH / 2,
    y: mainPinElement.offsetTop + MAIN_PIN_HEIGHT
  };
};

var addFormSubmit = function (evt) {
  evt.preventDefault();
  if (!addFormElement.checkValidity()) {
    return;
  }

  addFormElement.submit();
};

var validateHousingCapacity = function () {
  var roomsCount = addFormHousingRoomsElement.value;
  var capacityCount = addFormHousingCapacityElement.value;
  if (roomsCount < NOT_FOR_GUESTS_ROOMS_COUNT) {
    if (capacityCount === '0' || capacityCount > roomsCount) {
      var errorMsg = roomsCount === '1' ? 'Можно выбрать только одного гостя' : 'Можно выбрать до ' + roomsCount + ' гостей';
      addFormHousingCapacityElement.setCustomValidity(errorMsg);
    } else {
      addFormHousingCapacityElement.setCustomValidity('');
    }
  } else if (capacityCount !== '0') {
    addFormHousingCapacityElement.setCustomValidity('Только не для гостей');
  } else {
    addFormHousingCapacityElement.setCustomValidity('');
  }
};

var showAdvertCard = function (adverts, advertIndex) {
  closeAdvertCard();
  var advertCard = renderAdvertCard(adverts[advertIndex]);
  mapPinsElement.insertAdjacentElement('afterend', advertCard);

  var popupCardCloseElement = document.querySelector('.popup__close');
  popupCardCloseElement.addEventListener('click', closeAdvertCard);
  document.addEventListener('keydown', advertCardEscPress);
};

var bindMapPinEvents = function (adverts) {
  var mapPinElements = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  mapPinElements.forEach(function (mapPin) {
    mapPin.addEventListener('click', function (evt) {
      var advertIndex = evt.currentTarget.dataset.advert;
      showAdvertCard(adverts, advertIndex);
    });

    mapPin.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        var advertIndex = evt.currentTarget.dataset.advert;
        showAdvertCard(adverts, advertIndex);
      }
    });
  });
};

var advertCardEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeAdvertCard();
  }
};

var closeAdvertCard = function () {
  var openedCardElement = document.querySelector('.map__card');
  if (openedCardElement) {
    openedCardElement.remove();
  }
  document.removeEventListener('keydown', advertCardEscPress);
};

var validatePrice = function () {
  var advertType = adFormTypeElement.value;
  var advertTypeMinPrice = TYPE_ADVERT_MIN_PRICE[advertType];
  var advertPriceValue = adFormPriceElement.value;
  adFormPriceElement.placeholder = advertTypeMinPrice;
  adFormPriceElement.min = advertTypeMinPrice;

  if (advertPriceValue === '') {
    adFormPriceElement.setCustomValidity('Поле обязательно к заполнению');
  } else if (advertPriceValue < advertTypeMinPrice) {
    adFormPriceElement.setCustomValidity('Минимальная сумма ' + advertTypeMinPrice);
  } else if (advertPriceValue > MAX_ADVERT_PRICE_VALUE) {
    adFormPriceElement.setCustomValidity('Максимальная сумма ' + MAX_ADVERT_PRICE_VALUE);
  } else {
    adFormPriceElement.setCustomValidity('');
  }
};

var validateTime = function (evt) {
  var isTimeInChange = evt.currentTarget === adFormTimeInElement;
  if (isTimeInChange) {
    adFormTimeOutElement.value = adFormTimeInElement.value;
  } else {
    adFormTimeInElement.value = adFormTimeOutElement.value;
  }
};

mainPinElement.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    activateMap();
    fillAddressField();
  }
});

mainPinElement.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    activateMap();
  }
});

addFormHousingRoomsElement.addEventListener('change', validateHousingCapacity);
addFormHousingCapacityElement.addEventListener('change', validateHousingCapacity);

adFormSubmitElement.addEventListener('click', addFormSubmit);

adFormTitleElement.addEventListener('invalid', function () {
  if (adFormTitleElement.validity.tooShort) {
    adFormTitleElement.setCustomValidity('Имя должно состоять минимум из ' + MIN_ADVERT_TITLE_LENGTH + '-х символов');
  } else if (adFormTitleElement.validity.tooLong) {
    adFormTitleElement.setCustomValidity('Имя не должно превышать ' + MAX_ADVERT_TITLE_LENGTH + '-ти символов');
  } else if (adFormTitleElement.validity.valueMissing) {
    adFormTitleElement.setCustomValidity('Обязательное поле');
  } else {
    adFormTitleElement.setCustomValidity('');
  }
});

adFormTitleElement.addEventListener('input', function () {
  var valueLength = adFormTitleElement.value.length;

  if (valueLength < MIN_ADVERT_TITLE_LENGTH) {
    adFormTitleElement.setCustomValidity('Ещё ' + (MIN_ADVERT_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_ADVERT_TITLE_LENGTH) {
    adFormTitleElement.setCustomValidity('Удалите лишние ' + (valueLength - MIN_ADVERT_TITLE_LENGTH) + ' симв.');
  } else {
    adFormTitleElement.setCustomValidity('');
  }
});

adFormTypeElement.addEventListener('change', validatePrice);
adFormPriceElement.addEventListener('input', validatePrice);
adFormTimeInElement.addEventListener('change', function (evt) {
  validateTime(evt);
});
adFormTimeOutElement.addEventListener('change', function (evt) {
  validateTime(evt);
});

var init = function () {
  disableInputsOnAddForm();
  disableInputsOnFilterForm();
  fillAddressField();
};

init();
