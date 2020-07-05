'use strict';

window.card = (function () {
  var mapPinsElement = document.querySelector('.map__pins');
  var advertCardTemplateElement = document.querySelector('#card')
    .content
    .querySelector('.map__card');

  var renderPopup = function (advert) {
    var advertCard = fillPopup(advert);
    showPopup(advertCard);
  };

  var fillPopup = function (advert) {
    var cardElement = advertCardTemplateElement.cloneNode(true);

    addTextContent(advert.offer.title, cardElement.querySelector('.popup__title'));

    addTextContent(advert.offer.address, cardElement.querySelector('.popup__text--address'));

    addTextContent(advert.offer.price + ' ₽/ночь', cardElement.querySelector('.popup__text--price'));

    renderAdvertType(advert, cardElement);

    var capacityText = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
    addTextContent(capacityText, cardElement.querySelector('.popup__text--capacity'));

    var timeText = 'Заезд после ' + advert.offer.checkin + ', выезд до ' + advert.offer.checkout;
    addTextContent(timeText, cardElement.querySelector('.popup__text--time'));

    renderAdvertFeatures(advert, cardElement);

    addTextContent(advert.offer.description, cardElement.querySelector('.popup__description'));

    addTextContent(advert.author.avatar, cardElement.querySelector('.popup__avatar'));

    renderAdvertPhotos(advert, cardElement);

    return cardElement;
  };

  var addTextContent = function (content, element) {
    if (typeof content !== 'undefined' && content !== '') {
      element.textContent = content;
    } else {
      element.remove();
    }
  };

  var renderAdvertType = function (advert, cardElement) {
    var popupTypeElement = cardElement.querySelector('.popup__type');
    var advertTypeText = window.constants.ADVERT_TYPES_TEXT[advert.offer.type];

    if (advertTypeText) {
      popupTypeElement.textContent = advertTypeText;
    } else {
      popupTypeElement.remove();
    }
  };

  var renderAdvertFeatures = function (advert, cardElement) {
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

  var renderAdvertPhotos = function (advert, cardElement) {
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

  var showPopup = function (advertCard) {
    closePopup();
    mapPinsElement.insertAdjacentElement('afterend', advertCard);

    var popupCardCloseElement = document.querySelector('.popup__close');
    popupCardCloseElement.addEventListener('click', closePopup);
    document.addEventListener('keydown', advertCardEscPressHandler);
  };

  var closePopup = function () {
    var openedCardElement = document.querySelector('.map__card');
    if (openedCardElement) {
      openedCardElement.remove();
    }
    document.removeEventListener('keydown', advertCardEscPressHandler);
    window.pin.removeActiveClass();
  };

  var advertCardEscPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  return {
    renderPopup: renderPopup,
    closePopup: closePopup
  };
})();
