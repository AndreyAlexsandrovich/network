import initSideBar from "./scripts/sidebarButton.js";
import apiProducts from "./scripts/api.js";
import createProduct from "./scripts/createProduct.js";
import searchProduct from "./scripts/searchProducts.js";
const place = document.querySelector("#places__list");

document.addEventListener("DOMContentLoaded", () => {
  initSideBar();
  apiProducts(place);
  if (document.querySelector(".popup-product")) {
    createProduct();
  }

  if (document.querySelector("#form-search")) {
    searchProduct(place);
  }
});

import "./index.css";
