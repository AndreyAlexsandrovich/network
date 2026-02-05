import openModal from "./modal";


export default function createProduct(container = document.body) {
  const createFormProduct = document.querySelector(".create-product") as HTMLElement;
  const saveProduct = document.querySelector("#save-product") as HTMLElement;
  const popup = document.querySelector(".popup-product") as HTMLElement;
  const popupProduct = popup?.querySelector(".popup__form") as HTMLFormElement;


  container?.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
    if ((e.target as HTMLElement).matches('.create-product')) {
      const closeButton = (popup?.querySelector("#button-close") as HTMLElement);

      if (!popup || !popupProduct || !closeButton) {
        return;
      }

      openModal(popup, e.target as HTMLElement, closeButton);
    }
  })


  saveProduct?.addEventListener("click", async (evt: MouseEvent) => {
    evt.preventDefault();

    const formData = new FormData(popupProduct as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData);
    const nameProduct =
      (document.querySelector("#product-name") as HTMLInputElement).value + ` ${Date.now()}`;
    const priceProduct = (document.querySelector("#product-price") as HTMLInputElement)?.value;
    const descriptionProduct = (document.querySelector(
      "#description-product"
    ) as HTMLInputElement)?.value;
    const imageProduct = (document.querySelector("#product-image") as HTMLImageElement)?.src;

    const requireBody = {
      ...formDataObject,
      title: nameProduct,
      price: Number(priceProduct),
      description: descriptionProduct,
      categoryId: 1,
      images: [imageProduct],
    };

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products/",
        {
          method: "POST",
          body: JSON.stringify(requireBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const containerTemplate = (document
        .querySelector("#template-product") as HTMLTemplateElement);
      const containerProduct = containerTemplate.content.cloneNode(true);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          `Error ${response.status}: ${err.message || JSON.stringify(err)}`
        );
      }

      const responseProduct = await response.json();

      class newProducts {
        constructor(public name: string,
          public price: string,
          public image: string,
          public description: string,
          public container: HTMLElement
        ) { }

        render() {
          (this.container.querySelector("#title-product") as HTMLElement).textContent = this.name;
          (this.container.querySelector("#price-product") as HTMLElement).textContent = `${this.price}$`;
          (this.container.querySelector("#description") as HTMLElement).textContent = this.description;
          (this.container.querySelector("#image-product") as HTMLImageElement).src = this.image;
        }
      }

      // CreateProduct
      const product = new newProducts(
        nameProduct,
        priceProduct,
        imageProduct,
        descriptionProduct,
        containerProduct as HTMLElement
      );
      responseProduct.render();


      // add product
      const list = document.querySelector("#places__list") as HTMLElement;
      list?.prepend(containerProduct);
      popupProduct.reset();
    } catch (error) {
      console.error("Ошибка создания товара:", error);
      alert(`Ошибка: ${error instanceof Error ? error.message : 'неизвестная ошибка'}`);
    }
  });
}
