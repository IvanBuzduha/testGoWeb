// const refs = {
//   mainScreen: document.querySelector(".main-wrapper"),
//   home: document.querySelector(".header__logo-box"),
//   siteHeader: document.querySelector("header"),
//   navigation: document.querySelector(".nav"),
//   baner: document.querySelector(".baner"),
//   aboutUsImage: document.querySelector(".solutions__image"),
//   blogPostImage: document.querySelector(".blog__image"),
//   contactsImage: document.querySelector(".contact__image"),
//   submitBtn: document.querySelector('button[type="submit"]'),
//   callbackForm: document.querySelector('form[name="callback_form"]'),
//   modal: document.querySelector(".modal"),
//   modalBtn: document.querySelector(".modal__btn"),
//   nameInput: document.getElementById("name"),
//   emailInput: document.getElementById("email"),
// };

import refs from "./refs.js";

function support_format_webp() {
  const elem = document.createElement("canvas");

  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}

if (support_format_webp()) {
  refs.mainScreen.classList.add("main-wrapper--support-webp");
  refs.aboutUsImage.classList.add("solutions__image--support-webp");
  refs.blogPostImage.classList.add("blog__image--support-webp");
  refs.contactsImage.classList.add("contact__image--support-webp");
} else {
  refs.mainScreen.classList.add("main-wrapper--support-jpg");
  refs.aboutUsImage.classList.add("solutions__image--support-jpg");
  refs.blogPostImage.classList.add("blog__image--support-jpg");
  refs.contactsImage.classList.add("contact__image--support-jpg");
}
