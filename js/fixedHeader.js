// import throttle from "https://cdn.jsdelivr.net/npm/lodash@4.17.21/throttle.min.js";
// const _ = require("./throttle.js");
import refs from "./refs.js";

let height;
let addClass;

const currentWidth = document.documentElement.clientWidth;
if (currentWidth > 768) {
  height = 70;
  addClass = "baner--header-desktop";
} else {
  height = 170;
  addClass = "baner--header-mobile";
}

const fixedHeader = () => {
  const scroll = window.scrollY;
  if (scroll > height) {
    refs.siteHeader.classList.add("header--fixed");
    refs.baner.classList.add(addClass);
  } else {
    refs.siteHeader.classList.remove("header--fixed");
    refs.baner.classList.remove(addClass);
  }
};

export default fixedHeader;
