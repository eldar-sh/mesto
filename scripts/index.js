let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-btn');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');

function openPopup() {
    popup.classList.add('popup_open');
    nameInput.value =  profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function closePopup(evt) {
        popup.classList.remove('popup_open');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
