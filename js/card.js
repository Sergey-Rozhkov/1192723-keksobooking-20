'use strict';

window.card = (function () {
  var mapPinsElement = document.querySelector('.map__pins');
  var advertCardTemplateElement = document.querySelector('#card')
    .content
    .querySelector('.map__card');

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

  var addTextContentToPopupCard = function (content, element) {
    if (typeof content !== 'undefined' && content !== '') {
      element.textContent = content;
    } else {
      element.remove();
    }
  };

  var renderAdvertTypeForCard = function (advert, cardElement) {
    var popupTypeElement = cardElement.querySelector('.popup__type');
    if (advert.offer.type !== '' && typeof window.constants.ADVERT_TYPES_TEXT[advert.offer.type] !== 'undefined') {
      popupTypeElement.textContent = window.constants.ADVERT_TYPES_TEXT[advert.offer.type];
    } else {
      popupTypeElement.remove();
    }
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

  var showAdvertCard = function (advertCard) {
    closeAdvertCard();
    mapPinsElement.insertAdjacentElement('afterend', advertCard);

    var popupCardCloseElement = document.querySelector('.popup__close');
    popupCardCloseElement.addEventListener('click', closeAdvertCard);
    document.addEventListener('keydown', advertCardEscPress);
  };

  var closeAdvertCard = function () {
    var openedCardElement = document.querySelector('.map__card');
    if (openedCardElement) {
      openedCardElement.remove();
    }
    document.removeEventListener('keydown', advertCardEscPress);
    window.pin.removeActiveClass();
  };

  var advertCardEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeAdvertCard();
    }
  };

  return {
    renderAdvertCard: renderAdvertCard,
    showAdvertCard: showAdvertCard,
    closeAdvertCard: closeAdvertCard
  };
})();
