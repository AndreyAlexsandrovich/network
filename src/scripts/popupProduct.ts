import openModal from "./modal";
export default function popupProductModal(container = document.body) {
    const popupWindow = document.querySelector('.popup-window-product.popup');
    function initialModalTemplate() { 
        const existingContent = popupWindow?.querySelector('.content-product');
        if (existingContent) existingContent.remove();

         const template = document.querySelector('#template-product-modal') as HTMLTemplateElement;
         if (!template) return;
         const templateModalProduct = template.content.cloneNode(true) as DocumentFragment;
        popupWindow?.appendChild(templateModalProduct);
    }


     initialModalTemplate();

     
    
    container.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).matches('.buy')) {
            const productCard = (e.target as HTMLElement).closest('.product-container');
            if (!productCard) return;
            const nameProductEl = productCard.querySelector('#title-product') as HTMLElement;
            const nameProduct = nameProductEl?.textContent || '';
            const imageProductEl = productCard.querySelector('#image-product') as HTMLImageElement;
            const imageProduct = imageProductEl?.src || ''; 
            const descriptionProductEl = productCard.querySelector('#description') as HTMLElement;
            const descriptionProduct = descriptionProductEl?.textContent || '';
            initialModalTemplate();
            
            const closeModal = popupWindow?.querySelector('.close-button') as HTMLElement;

            const titleProduct = document.querySelector('.popup-content__title-product') as HTMLElement;
            titleProduct.textContent = nameProduct;
            const image = document.querySelector('#popup-content__image') as HTMLImageElement;
            image.src = imageProduct;
            const textDescription = document.querySelector('#popup-content__description') as HTMLElement;
            textDescription.textContent = descriptionProduct;
            openModal(popupWindow as HTMLElement, e.target as HTMLElement, closeModal);
        }
    })
}