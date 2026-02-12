interface Product {
    id: number;
    title: string;
    name?: string;
    price: number;
    description: string;
    images: string[];
}

export default function searchProduct(placeProduct: HTMLElement, jsonArrays?: Product[]): void { 
    if (!jsonArrays) return;
    
    const search = document.querySelector("#input-search") as HTMLInputElement;
    if (!search) return;
    
    search.addEventListener('input', () => { 
        const input = search.value.toLowerCase();
        placeProduct.innerHTML = '';

        const filterProduct = jsonArrays.filter(item => 
            item.title.toLowerCase().includes(input)
        );

        const template = document.querySelector('#template-product') as HTMLTemplateElement;
        if (!template) return;

        filterProduct.forEach(product => { 
            const liClone = template.content.cloneNode(true) as DocumentFragment;
            const liElement = liClone.firstElementChild as HTMLElement;
            
            const titleEl = liElement.querySelector('#title-product') as HTMLElement;
            const priceEl = liElement.querySelector('#price-product') as HTMLElement;
            const imageEl = liElement.querySelector('#image-product') as HTMLImageElement;
            
            if (titleEl) titleEl.textContent = product.title;
            if (priceEl) priceEl.textContent = `$${product.price}`;
            if (imageEl && product.images[0]) imageEl.src = product.images[0];
            
            placeProduct.appendChild(liElement);
        });
    });
}
