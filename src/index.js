import { submitForm } from "./form";
import {
	validateEmail,
	validateCountry,
	validateZipcode,
	validatePassword,
	confirmPassword,
} from "./validate";

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
	submitForm();
});

window.onload = () => {
	document.querySelector("#email").oninput = validateEmail;
	document.querySelector("#country").oninput = validateCountry;
	document.querySelector("#zipcode").oninput = validateZipcode;
	document.querySelector("#password").oninput = validatePassword;
	document.querySelector("#confirm-pwd").oninput = confirmPassword;
};
