import refs from "./refs.js";
import backToSite from "./backToSite.js";

const submitCallbackForm = function (evt) {
  evt.preventDefault();

  let myForm = document.getElementById("callback-form");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));

  refs.nameInput.value = "";
  refs.emailInput.value = "";

  refs.modal.classList.add("modal--show");
  refs.modalBtn.addEventListener("click", backToSite);
};

export default submitCallbackForm;
