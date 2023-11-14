export function validateEmail() {
	const email = document.querySelector("#email");
	const emailConstraint = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	email.addEventListener("input", () => {
		email.setCustomValidity("");
		email.reportValidity();
	});

	email.addEventListener("blur", () => {
		if (email !== "") {
			if (!emailConstraint.test(email.value)) {
				email.setCustomValidity("Invalid E-mail.");
				email.reportValidity();
			} else {
				email.setCustomValidity("");
				email.reportValidity();
			}
		}
	});
}

export function validateCountry() {
	const country = document.querySelector("#country");
	const countryConstraint = /^[a-zA-Z ]*$/;

	country.addEventListener("input", () => {
		country.setCustomValidity("");
		country.reportValidity();
	});

	country.addEventListener("blur", () => {
		if (country !== "") {
			if (!countryConstraint.test(country.value)) {
				country.setCustomValidity("Invalid Country.");
				country.reportValidity();
			} else {
				country.setCustomValidity("");
				country.reportValidity();
			}
		}
	});
}

export function validateZipcode() {
	const zipcode = document.querySelector("#zipcode");
	const zipcodeConstraint = /^\d{5}(?:[-\s]\d{4})?$/;

	zipcode.addEventListener("input", () => {
		zipcode.setCustomValidity("");
		zipcode.reportValidity();
	});

	zipcode.addEventListener("blur", () => {
		if (zipcode !== "") {
			if (!zipcodeConstraint.test(zipcode.value)) {
				zipcode.setCustomValidity("Invalid ZIP Code.");
				zipcode.reportValidity();
			} else {
				zipcode.setCustomValidity("");
				zipcode.reportValidity();
			}
		}
	});
}
