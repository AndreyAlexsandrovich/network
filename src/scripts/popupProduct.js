import openModal from "./modal";
export default function popupProductModal(container = document.body) {
    const popupWindow = document.querySelector('.popup-window-product.popup');
    if (!popupWindow.querySelector('.content-product')) {
        const templateModalProduct = document.querySelector('#template-product-modal').content.cloneNode(true);
        popupWindow.appendChild(templateModalProduct);
    }
    const closeModal = popupWindow.querySelector('.close-button');
    const templateModal = document.querySelector('#template-product').content.cloneNode(true);
    container.addEventListener('click', (e) => {
        
        if (e.target.matches('.buy')) {
            const productCard = e.target.closest('.product-container');
            const nameProduct = productCard.querySelector('#title-product').textContent;
            const imageProduct = productCard.querySelector('#image-product').src;
            const descriptionProduct = productCard.querySelector('#description').textContent;
            const priceProduct = productCard.querySelector('#price-product').textContent;
            openModal(popupWindow, e.target, closeModal);
            document.querySelector('.popup-content__title-product').textContent = nameProduct;
            document.querySelector('#popup-content__image').src = imageProduct;
            document.querySelector('#popup-content__description').textContent = descriptionProduct;
            // document.querySelector('#popup-content__description').textContent = priceProduct;
        }
    })
}