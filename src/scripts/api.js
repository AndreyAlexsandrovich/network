export default function apiProducts(place) {

  if (!place) {
    return;
  }

  try {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          const errorMessage =
            response.status === 404
              ? "Просим наши извенения"
              : "Товары не найдены";
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .then((json) => {
        json.forEach((item) => {
          const { title, price, description, images, id, category } = item;
          const classNameFilter = category.name
            .replace(/[^a-zA-Z0-9-_]/g, "")
            .replace(/[^a-zA-Z0-9-_]/g, "");
          const templateProduct = document
            .querySelector("#template-product")
            .content.cloneNode(true);
          templateProduct.querySelector("#title-product").textContent = title;
          templateProduct.querySelector("#price-product").textContent = `${
            price + "$"
          }`;
          templateProduct.querySelector("#description").textContent =
            description;
          templateProduct.querySelector("#image-product").src = images[0];
          templateProduct.querySelector(".product").id = id;
          templateProduct
            .querySelector(".product")
            .classList.add(`product-${classNameFilter}`);

          place.appendChild(templateProduct);
        });
        console.log(json);
      });
  } catch (error) {
    place.innerHTML = error.message;
  }
}
