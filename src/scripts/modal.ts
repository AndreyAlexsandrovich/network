export default function openModal(popup: HTMLElement, openButton: HTMLElement, closeButton: HTMLElement) {

    if (!popup || !openButton || !closeButton) return;
    const showPopup = () => {
        popup.style.visibility = 'visible';
        document.body.style.overflow = 'hidden';
    }

    const closePopup = () => {
        popup.style.visibility = 'hidden';
        document.body.style.overflow = '';
    }

    popup.addEventListener('click', (evt: MouseEvent) => {
        if (evt.target as HTMLElement === popup) closePopup();
    })

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') closePopup();
    })

    closeButton.addEventListener('click', () => {
        popup.style.visibility = 'hidden';
        document.body.style.overflow = '';
    })

    showPopup();
}