import refs from "./refs.js";

const backToSite = function (evt) {
  refs.modalBtn.removeEventListener("click", backToSite);
  refs.modal.classList.remove("modal--show");
};

export default backToSite;
