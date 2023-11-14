export default function validate() {
	const email = document.querySelector("#email");
	const emailConstraint = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	email.addEventListener("input", () => {
		if (email !== "") {
			if (emailConstraint.test(email.value)) {
				email.setCustomValidity("");
				email.reportValidity();
			} else {
				email.setCustomValidity("Invalid e-mail.");
				email.reportValidity();
			}
		}
	});
}
