export default class Form {
	constructor(email, country, zipcode, password, confirm) {
		this.email = email;
		this.country = country;
		this.zipcode = zipcode;
		this.password = password;
		this.confirm = confirm;
	}
}

export function submitForm() {
	const email = document.querySelector("#email").value;
	const country = document.querySelector("#country").value;
	const zipcode = document.querySelector("#zipcode").value;
	const password = document.querySelector("#password").value;
	const confirm = document.querySelector("#confirm-pwd").value;

	console.log(new Form(email, country, zipcode, password, confirm));
}
