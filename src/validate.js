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

export function validatePassword() {
	const password = document.querySelector("#password");

	const passwordConstraint =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

	password.addEventListener("input", () => {
		password.setCustomValidity("");
		password.reportValidity();
	});

	password.addEventListener("blur", () => {
		if (password !== "") {
			if (!passwordConstraint.test(password.value)) {
				password.setCustomValidity(
					"Password needs to be at least 8 characters and must include: a number (0-9), an uppercase letter (A-Z) and a lowercase letter (a-z)."
				);
				password.reportValidity();
			} else {
				password.setCustomValidity("");
				password.reportValidity();
			}
		}
	});
}

export function confirmPassword() {
	const password = document.querySelector("#password");
	const confirmPwd = document.querySelector("#confirm-pwd");

	confirmPwd.addEventListener("input", () => {
		confirmPwd.setCustomValidity("");
		confirmPwd.reportValidity();
	});

	confirmPwd.addEventListener("blur", () => {
		if (password.value !== confirmPwd.value) {
			confirmPwd.setCustomValidity("Passwords do not match!");
			confirmPwd.reportValidity();
		} else {
			confirmPwd.setCustomValidity("");
			confirmPwd.reportValidity();
		}
	});
}
