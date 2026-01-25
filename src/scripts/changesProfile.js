import openModal from "./modal";

export default function chagesProfile() {
    const popup = document.querySelector('.popup__type-profile-edit')
    const popupForm = popup.querySelector('.popup__form');
    const closeButtonForm = popupForm.querySelector('.button-close');
    const openButtonForm = document.querySelector('.profile-button-changes');
    openModal(popup, openButtonForm, closeButtonForm);
        popupForm.addEventListener('submit', (e) => {
            const inputProfileAvatar = popupForm.querySelector('#profile-avatar').value;
            const inputProfiletName = popupForm.querySelector('#profile-name').value;
            const inputProfileEmail = popupForm.querySelector('#profile-email').value;
            const inputProfilePhone = popupForm.querySelector('#profile-phone').value;

            document.querySelector('.profile-avatar img').src = inputProfileAvatar;
            document.querySelector('.name').textContent = inputProfiletName;
            document.querySelector('.email').textContent = inputProfileEmail;
            document.querySelector('.phone').textContent = inputProfilePhone;


            document.querySelector('.user-name').textContent = inputProfiletName;
            document.querySelector('.user-phone').textContent = inputProfilePhone;
            document.querySelector('.user-image img').src = inputProfileAvatar;

            e.preventDefault();
        })
}