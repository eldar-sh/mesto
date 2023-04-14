let editButton = document.querySelector('.profile__edit-button_popup-open');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-appointment');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupSaveButton = document.querySelector('.popup__save-btn');

function openPopup() {
    popup.classList.add('popup_open');
}

function closePopup(evt) {
    let isOverlay = evt.target.classList.contains('popup');
    let isClosePopupButton = evt.target.classList.contains('popup__close-btn');
    let isPopupSaveButton = evt.target.classList.contains('popup__save-btn')
    if (isOverlay || isClosePopupButton || isPopupSaveButton) {
        popup.classList.remove('popup_open');
        console.log(popup.classList);
    }
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupSaveButton.addEventListener('click', handleFormSubmit);
popupSaveButton.addEventListener('click', closePopup);
popup.addEventListener('click', closePopup);
