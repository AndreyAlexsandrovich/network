import initSideBar from "./scripts/sidebarButton.js";
import apiProducts from "./scripts/api.js";
import createProduct from "./scripts/createProduct.js";
import searchProducts from "./scripts/searchProducts.js"

document.addEventListener("DOMContentLoaded", () => {
  initSideBar();
  apiProducts();
  if (document.querySelector(".popup-product")) { 
    createProduct();
  }
});

import "./index.css";