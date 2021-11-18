import refs from "./refs.js";
const scrolling = function (e) {
  e.preventDefault();
  setTimeout(() => {
    const node = e.target.nodeName;

    if (node !== "A" && node !== "SPAN") return;
    let anchor;
    node === "SPAN"
      ? (anchor = "#home")
      : (anchor = e.target.attributes[0].value);

    const linkTo = document.querySelector(anchor).offsetTop;

    const scrollHeight = linkTo - refs.siteHeader.clientHeight;
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  }, 300);
};

export default scrolling;
