import refs from "./refs.js";
import "./checkingWebp.js";
import fixedHeader from "./fixedHeader.js";
import scrolling from "./scrolling.js";
import submitCallbackForm from "./submitCallbackForm.js";

window.addEventListener("scroll", fixedHeader);

refs.navigation.addEventListener("click", scrolling);
// refs.home.addEventListener("click", scrolling);

refs.callbackForm.addEventListener("submit", submitCallbackForm);
