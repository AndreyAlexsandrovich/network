export default function apiProducts(place) {

  if (!place) {
    return;
  }

  try {
    fetch('https://your-shop.myshopify.com/api/2026-01/graphql.json')
      .then((response) => {
        if (!response.ok) {
          const errorMessage =
            response.status === 404
              ? "Просим наши извинения"
              : "Товары не найдены";
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .then((json) => {
        json.forEach((item) => {
          const { title, id, albumId, url, thumbnailUrl } = item;
          const classNameFilter = `album-${albumId}`
            .replace(/[^a-zA-Z0-9-_]/g, "")
            .toLowerCase();
          const templateProduct = document
            .querySelector("#template-product")
            .content.cloneNode(true);
          templateProduct.querySelector("#title-product").textContent = title;
          templateProduct.querySelector("#price-product").textContent = `$${Math.round(Math.random()*100)}`;
          templateProduct.querySelector("#description").textContent =
            "Описания товара";
          templateProduct.querySelector("#image-product").src = url;
          templateProduct.querySelector(".product").id = `product-${id}`;
          templateProduct
            .querySelector(".product")
            .classList.add(`product-${classNameFilter}`);

          place.appendChild(templateProduct);
        });
        console.log(json);
      });
  } catch (error) {
    console.error('❌ Ошибка API:', error);
    place.innerHTML = error.message;
  }
}
