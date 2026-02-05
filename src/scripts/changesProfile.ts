import openModal from "./modal";

export default function chagesProfile() {
    const popup = document.querySelector('.popup__type-profile-edit') as HTMLElement;
    if (!popup) return;
    const popupForm = (popup.querySelector('.popup__form') as HTMLFormElement);
    const closeButtonForm = popupForm.querySelector('.button-close') as HTMLElement;
    const openButtonForm = document.querySelector('.profile-button-changes') as HTMLButtonElement;
    const saveProfileButton = document.querySelector('.profile-save') as HTMLButtonElement;
    
    saveProfileButton.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
            const inputProfileAvatar = (popupForm.querySelector('#profile-avatar') as HTMLInputElement).value;
            const inputProfileName = (popupForm.querySelector('#profile-name') as HTMLInputElement).value;
            const inputProfileEmail = (popupForm.querySelector('#profile-email') as HTMLInputElement).value;
            const inputProfilePhone = (popupForm.querySelector('#profile-phone') as HTMLInputElement).value;
              
            (document.querySelector('.profile-avatar img') as HTMLImageElement).src = inputProfileAvatar;
            (document.querySelector('.name') as HTMLElement).textContent = inputProfileName;
            (document.querySelector('.email') as HTMLElement).textContent = inputProfileEmail;
            (document.querySelector('.phone') as HTMLElement).textContent = inputProfilePhone;


            (document.querySelector('.user-name') as HTMLElement).textContent = inputProfileName;
            (document.querySelector('.user-phone') as HTMLElement).textContent = inputProfilePhone;
            (document.querySelector('.user-image img') as HTMLImageElement).src = inputProfileAvatar;
            
        })

         openButtonForm.addEventListener('click', (e: MouseEvent) => { 
         openModal(popup, openButtonForm, closeButtonForm);
    })
}