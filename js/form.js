'use strict';

window.form = (function () {
  var initialCoordinates = {};
  var addFormElement = document.querySelector('.ad-form');
  var adFormInputElements = addFormElement.querySelectorAll('.ad-form input');
  var adFormSelectElements = addFormElement.querySelectorAll('.ad-form select');
  var adFormTextareaElements = addFormElement.querySelectorAll('.ad-form textarea');
  var adFormButtonElements = addFormElement.querySelectorAll('button');
  var addFormHousingRoomsElement = addFormElement.querySelector('select[name=rooms]');
  var addFormHousingCapacityElement = addFormElement.querySelector('select[name=capacity]');
  var adFormSubmitElement = addFormElement.querySelector('.ad-form__submit');

  var adFormTitleElement = addFormElement.querySelector('input[name=title]');
  var adFormTypeElement = addFormElement.querySelector('[name=type]');
  var adFormPriceElement = addFormElement.querySelector('[name=price]');
  var adFormTimeInElement = addFormElement.querySelector('[name="timein"]');
  var adFormTimeOutElement = addFormElement.querySelector('[name="timeout"]');
  var addressFieldElement = addFormElement.querySelector('input[name=address]');

  var resetFormElement = addFormElement.querySelector('.ad-form__reset');

  var adFormAvatarInputElement = addFormElement.querySelector('[name=avatar]');
  var adFormAvatarPreviewElement = addFormElement.querySelector('.ad-form-header__preview img');
  var adFormImageInputElement = addFormElement.querySelector('[name=images]');
  var adFormImagePreviewElement = addFormElement.querySelector('.ad-form__photo');

  if (adFormAvatarPreviewElement) {
    var defaultAvatarImageSrc = adFormAvatarPreviewElement.getAttribute('src');
  }

  var submitHandler = function (evt) {
    evt.preventDefault();
    validatePrice();
    validateHousingCapacity();
    if (!addFormElement.checkValidity()) {
      checkFormElements();
      return;
    }

    window.data.saveAdvertForm(new FormData(addFormElement), successSubmitHandler, errorSubmitHandler);
  };

  var successSubmitHandler = function () {
    window.notification.showAdvertFormSuccess();
    window.app.setNotActiveState();
  };

  var errorSubmitHandler = function () {
    window.notification.showAdvertFormError();
  };

  var checkElementError = function (element) {
    if (!element.checkValidity()) {
      addErrorClassToElement(element);
    } else {
      removeErrorClassFromElement(element);
    }
  };

  var checkFormElements = function () {
    Array.from(addFormElement.elements).forEach(function (element) {
      var tag = element.tagName.toLowerCase();
      if (window.constants.FORM_ELEMENTS_TO_VALIDATE.indexOf(tag) !== -1) {
        checkElementError(element);
      }
    });
  };

  var addErrorClassToElement = function (element) {
    element.classList.add(window.constants.FORM_ELEMENT_ERROR_CLASS);
  };

  var removeErrorClassFromElement = function (element) {
    element.classList.remove(window.constants.FORM_ELEMENT_ERROR_CLASS);
  };

  var validateHousingCapacity = function (evt) {
    var roomsCount = addFormHousingRoomsElement.value;
    var capacityCount = addFormHousingCapacityElement.value;
    if (roomsCount < window.constants.NOT_FOR_GUESTS_ROOMS_COUNT) {
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
    if (evt) {
      checkElementError(addFormHousingCapacityElement);
    }
  };

  var disableInputs = function () {
    window.formUtils.disableInputs(adFormInputElements);
    window.formUtils.disableInputs(adFormSelectElements);
    window.formUtils.disableInputs(adFormTextareaElements);
    window.formUtils.disableButtons(adFormButtonElements);
  };

  var enableInputs = function () {
    window.formUtils.enableInputs(adFormInputElements);
    window.formUtils.enableInputs(adFormSelectElements);
    window.formUtils.enableInputs(adFormTextareaElements);
    window.formUtils.enableButtons(adFormButtonElements);
  };

  var validatePrice = function (evt) {
    var advertType = adFormTypeElement.value;
    var advertTypeMinPrice = window.constants.TYPE_ADVERT_MIN_PRICE[advertType];
    var advertPriceValue = adFormPriceElement.value;
    adFormPriceElement.placeholder = advertTypeMinPrice;
    adFormPriceElement.min = advertTypeMinPrice;

    if (advertPriceValue === '') {
      adFormPriceElement.setCustomValidity('Поле обязательно к заполнению');
    } else if (advertPriceValue < advertTypeMinPrice) {
      adFormPriceElement.setCustomValidity('Минимальная сумма ' + advertTypeMinPrice);
    } else if (advertPriceValue > window.constants.MAX_ADVERT_PRICE_VALUE) {
      adFormPriceElement.setCustomValidity('Максимальная сумма ' + window.constants.MAX_ADVERT_PRICE_VALUE);
    } else {
      adFormPriceElement.setCustomValidity('');
    }
    if (evt) {
      checkElementError(adFormPriceElement);
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

  var fillAddressField = function (save) {
    var coords = window.map.getMainPinCoordinates();

    if (save) {
      initialCoordinates = coords;
    }

    setCoordinatesToField(coords);
  };

  var setCoordinatesToField = function (coords) {
    addressFieldElement.value = coords.x + ', ' + coords.y;
  };

  var activate = function () {
    addFormElement.classList.remove('ad-form--disabled');
    enableInputs();
  };

  var deactivate = function () {
    reset();
    addFormElement.classList.add('ad-form--disabled');
    disableInputs();
  };

  var reset = function () {
    addFormElement.reset();
    resetAvatarToDefault();
    resetImageToDefault();
    setCoordinatesToField(initialCoordinates);
  };

  var isImageFile = function (file) {
    return file.type.match(/image\//g);
  };

  var resetAvatarToDefault = function () {
    adFormAvatarPreviewElement.src = defaultAvatarImageSrc;
  };

  var renderAvatarPreview = function (result) {
    adFormAvatarPreviewElement.src = result;
  };

  var renderImagePreview = function (result) {
    var fragment = document.createDocumentFragment();

    var img = document.createElement('img');
    img.src = result;
    img.style.maxWidth = window.constants.ADVERT_FORM_PHOTO_PREVIEW_MAX_WIDTH + 'px';
    img.style.maxHeight = window.constants.ADVERT_FORM_PHOTO_PREVIEW_MAX_HEIGHT + 'px';
    fragment.appendChild(img);

    adFormImagePreviewElement.innerHTML = '';
    adFormImagePreviewElement.appendChild(fragment);
  };

  var resetImageToDefault = function () {
    adFormImagePreviewElement.innerHTML = '';
  };

  var fileUploadHandler = function (evt, successHandler, errorHandler) {
    var element = evt.currentTarget;
    if (element.files.length === 0) {
      return;
    }

    var file = element.files[0];
    var reader = new FileReader();

    if (!isImageFile(file)) {
      if (window.utils.isFunction(errorHandler)) {
        errorHandler(reader.result);
      }
      return;
    }

    reader.addEventListener('load', function () {
      if (window.utils.isFunction(successHandler)) {
        successHandler(reader.result);
      }
    });

    reader.addEventListener('error', function () {
      if (window.utils.isFunction(errorHandler)) {
        errorHandler(reader.result);
      }
    });

    reader.readAsDataURL(file);
  };

  addFormHousingRoomsElement.addEventListener('change', validateHousingCapacity);
  addFormHousingCapacityElement.addEventListener('change', validateHousingCapacity);
  adFormSubmitElement.addEventListener('click', submitHandler);

  adFormTypeElement.addEventListener('change', validatePrice);
  adFormPriceElement.addEventListener('input', validatePrice);
  adFormTimeInElement.addEventListener('change', validateTime);
  adFormTimeOutElement.addEventListener('change', validateTime);

  adFormTitleElement.addEventListener('invalid', function () {
    if (adFormTitleElement.validity.tooShort) {
      adFormTitleElement.setCustomValidity('Имя должно состоять минимум из ' + window.constants.MIN_ADVERT_TITLE_LENGTH + '-х символов');
    } else if (adFormTitleElement.validity.tooLong) {
      adFormTitleElement.setCustomValidity('Имя не должно превышать ' + window.constants.MAX_ADVERT_TITLE_LENGTH + '-ти символов');
    } else if (adFormTitleElement.validity.valueMissing) {
      adFormTitleElement.setCustomValidity('Обязательное поле');
    } else {
      adFormTitleElement.setCustomValidity('');
    }
  });

  adFormTitleElement.addEventListener('input', function () {
    var valueLength = adFormTitleElement.value.length;

    if (valueLength < window.constants.MIN_ADVERT_TITLE_LENGTH) {
      adFormTitleElement.setCustomValidity('Ещё ' + (window.constants.MIN_ADVERT_TITLE_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.constants.MAX_ADVERT_TITLE_LENGTH) {
      adFormTitleElement.setCustomValidity('Удалите лишние ' + (valueLength - window.constants.MIN_ADVERT_TITLE_LENGTH) + ' симв.');
    } else {
      adFormTitleElement.setCustomValidity('');
    }
    checkElementError(adFormTitleElement);
  });

  resetFormElement.addEventListener('click', function () {
    window.app.setNotActiveState();
  });

  adFormAvatarInputElement.addEventListener('change', function (evt) {
    fileUploadHandler(evt, renderAvatarPreview, resetAvatarToDefault);
  });

  adFormImageInputElement.addEventListener('change', function (evt) {
    fileUploadHandler(evt, renderImagePreview, resetImageToDefault);
  });

  return {
    disableInputs: disableInputs,
    fillAddressField: fillAddressField,
    activate: activate,
    deactivate: deactivate
  };
})();
