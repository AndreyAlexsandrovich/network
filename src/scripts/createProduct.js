import openModal from "./modal";

const createFormProduct = document.querySelector(".create-product");
const closeButton = document.querySelector("#button-close");
const saveProduct = document.querySelector("#save-product");

export default function createProduct() {
  const popup = document.querySelector(".popup-product");
  const popupProduct = popup.querySelector(".popup__form");
  openModal(popup, createFormProduct, closeButton);

  if (!popup || !popupProduct) {
    return;
  }

  saveProduct.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const formData = new FormData(popupProduct);
    const formDataObject = Object.fromEntries(formData);
    const nameProduct =
      document.querySelector("#product-name").value + ` ${Date.now()}`;
    const priceProduct = document.querySelector("#product-price").value;
    const descriptionProduct = document.querySelector(
      "#description-product"
    ).value;
    const imageProduct = document.querySelector("#product-image").value;

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

      const containerProduct = document
        .querySelector("#template-product")
        .content.cloneNode(true);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          `Error ${response.status}: ${err.message || JSON.stringify(err)}`
        );
      }

      const product = await response.json();

      class newProducts {
        constructor(name, price, image, description, container) {
          this.name = name;
          this.price = price;
          this.image = image;
          this.description = description;
          this.container = container;
        }

        newProduct(name, price, image, description, container) {
          container.querySelector("#title-product").textContent = name;
          container.querySelector("#price-product").textContent = `${price}$`;

          container.querySelector("#description").textContent = description;

          container.querySelector("#image-product").src = image;
        }
      }

      // CreateProduct
      new newProducts(
        nameProduct,
        priceProduct,
        descriptionProduct,
        imageProduct[0],
        containerProduct
      ).newProduct(
        nameProduct,
        priceProduct,
        imageProduct,
        descriptionProduct,
        containerProduct
      );

      // add product
      const list = document.querySelector("#places__list");
      list.prepend(containerProduct);
      popupProduct.reset();
    } catch (error) {
      console.error("Ошибка создания товара:", error);
      alert(`Ошибка: ${error.message}`);
    }
  });
}
