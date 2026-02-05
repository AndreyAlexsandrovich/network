import initSideBar from "./scripts/sidebarButton";
import apiProducts from "./scripts/api";
import createProduct from "./scripts/createProduct";
// import searchProduct from "./scripts/searchProducts";
import registerProfile from './scripts/registry';
import chagesProfile from './scripts/changesProfile'
import Data from './scripts/profile';
import popupProductModal from '../src/scripts/popupProduct';



const place = document.querySelector("#places__list")  as HTMLElement;

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".sidebar")) {
    initSideBar();
  }

  if (place) {
    apiProducts(place);
  }

  if (document.querySelector(".registry")) {
    registerProfile();
  }

  if (document.querySelector(".profile") || document.querySelector(".sidebar")) {
    Data();
  }

  if (document.querySelector(".popup-product")) {
    createProduct();
  }

  // if (document.querySelector("#form-search")) {
  //   searchProduct(place);
  // }

  if (document.querySelector('.popup__form')) {
    chagesProfile()
  }


  popupProductModal()
});

import "./index.css";
