export default function openModel(popup, openButton, closeButton) {

    if (!popup || !openButton || !closeButton) return;
    const showPopup = () => {
        popup.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }

    const closePopup = (evt) => {
        evt.preventDefault();
        popup.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }

    popup.addEventListener('click', (evt) => {
        if (evt.target === popup) closePopup(evt);
    })

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') closePopup(evt);
    })

    showPopup();
}