import { submitForm } from "./form";
import validate from "./validate";

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
	submitForm();
});

window.onload = () => {
	document.querySelector("#email").oninput = validate;
};
