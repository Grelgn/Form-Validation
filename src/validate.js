export default function validate() {
	const email = document.querySelector("#email");
	const emailConstraint = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	email.addEventListener("input", () => {
		email.setCustomValidity("");
		email.reportValidity();
	});

	email.addEventListener("blur", () => {
		if (email !== "") {
			if (!emailConstraint.test(email.value)) {
				email.setCustomValidity("Invalid e-mail.");
				email.reportValidity();
			} else {
				email.setCustomValidity("");
				email.reportValidity();
			}
		}
	});

	const country = document.querySelector("#country");
	const countryConstraint = /^[a-zA-Z ]*$/;

	country.addEventListener("input", () => {
		country.setCustomValidity("");
		country.reportValidity();
	});

	country.addEventListener("blur", () => {
		if (country !== "") {
			if (!countryConstraint.test(country.value)) {
				country.setCustomValidity("Invalid country.");
				country.reportValidity();
			} else {
				country.setCustomValidity("");
				country.reportValidity();
			}
		}
	});
}
