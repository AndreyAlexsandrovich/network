import initSideBar from "./scripts/sidebarButton.js";
import apiProducts from "./scripts/api.js";
import createProduct from "./scripts/createProduct.js";
import searchProduct from "./scripts/searchProducts.js";
import registerProfile from './scripts/registry.js';
import chagesProfile from './scripts/changesProfile.js'
import Data from './scripts/profile.js';
import popupProductModal from '../src/scripts/popupProduct.js';



const place = document.querySelector("#places__list");

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".sidebar")) {
    initSideBar();
  }
  apiProducts(place);
  if (document.querySelector(".registry")) {
    registerProfile();
  }

  if (document.querySelector(".profile") || document.querySelector(".sidebar")) {
    Data();
  } 

  if (document.querySelector(".popup-product")) {
    createProduct();
  }

  if (document.querySelector("#form-search")) {
    searchProduct(place);
  }

  if (document.querySelector('.popup__form')) { 
    chagesProfile()
  }

  
  popupProductModal()
});

import "./index.css";
