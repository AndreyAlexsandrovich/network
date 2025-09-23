const formSearch = document.querySelector("#form-search");

export default function searchProduct(place) {
  try {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          const errorMessage =
            response.status === 404
              ? "Такого товара нету"
              : "Похоже такой товар еще никто не добавил :(";
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .then((json) => {
        formSearch.addEventListener("submit", (evt) => {
          const inputSearch = document
            .querySelector("#input-search")
            .value.trim().toUpperCase();
          evt.preventDefault();
          const foundProduct = json.filter((item) => {
            return (
              item.title.toUpperCase().includes(inputSearch) &&
              inputSearch !== ""
            );
          });

          if (foundProduct.length > 0) {
            let productsHTML = "";
            foundProduct.forEach((item) => {
              const { title, price, description, images, id } = item;
              productsHTML += `
  <article>
    <li class="product" id="${id}">
      <div class="product-container">
        <div class="title-wrapper">
          <h2 class="title-product" id="title-product">${title}</h2>
        </div>
        <div class="image-product-wrapper">
          <img
            src="${images[0]}"
            alt="Обложка товара"
            class="image-product"
            id="image-product"
          />
        </div>
        <div class="description-product-wrapper">
          <p class="description-product" id="description">${description}</p>
        </div>
        <div class="price-product">
          <p class="price" id="price-product">${price}</p>
        </div>
        <div class="buy-product">
          <button class="buy">Купить товар</button>
        </div>
      </div>
    </li>
  </article>
              `;
              place.innerHTML = productsHTML;
              console.log(item);
            });
          } else {
            place.innerHTML = `товар ${inputSearch} не найден`;
          }
        });
      });
  } catch (err) {}
}
