import bookmarkButton from './bookmarkButton';

interface Product {
    id: number;
    title: string;
    name?: string;
    price: number;
    description: string;
    images: string[];
}

export default async function apiProducts(place: HTMLElement) {
    if (!place) return;

    const target = 'https://dummyjson.com';
    
    try {
        const response = await fetch(`${target}/products`);
        
        if (!response.ok) {
            const errorMessage = response.status === 404 
                ? "Просим наши извинения"
                : "Товары не найдены";
            throw new Error(errorMessage);
        }
        
        const json: { products: Product[] } = await response.json();
        
        json.products.forEach((item: Product) => {
            const product = {
                title: item.title || item.name || 'Без названия',
                price: item.price,
                description: item.description || '',
                image: item.images?.[0] || '', 
                id: item.id
            };

            const classNameFilter = `album-${item.id}`
                .replace(/[^a-zA-Z0-9-_]/g, "")
                .toLowerCase();

                const templateEl = document.querySelector("#template-product") as HTMLTemplateElement;
                const templateProduct = templateEl.content.cloneNode(true) as DocumentFragment;

           
            (templateProduct.querySelector("#title-product") as HTMLElement).textContent = product.title;
            (templateProduct.querySelector("#price-product") as HTMLElement).textContent = `$${product.price}`;
            (templateProduct.querySelector("#description") as HTMLElement).textContent = product.description;
            (templateProduct.querySelector("#image-product") as HTMLImageElement).src = product.image;
            (templateProduct.querySelector(".product") as HTMLElement).id = `product-${product.id}`;
            (templateProduct.querySelector(".product") as HTMLElement).classList.add(`product-${classNameFilter}`);

           
            bookmarkButton(templateProduct);  
            
            place.appendChild(templateProduct);
        });
    } catch (error) {
        console.error('❌ Ошибка API:', error);
        place.innerHTML = error instanceof Error ? error.message : 'Неизвестная ошибка';
    }
}
