const email = document.getElementById('email');
const exclamation = document.querySelector('.error');

const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

function validateForm() {
	
	if (check.test(email.value)) {
	email.value = "Thanks! We will reach out to you soon";
	email.style.color = "hsl(0, 93%, 68%)";
	exclamation.style.display = "none";
	return true;
  } else {
	exclamation.style.display = "block";
	email.style.color = "hsl(0, 93%, 68%)";
	email.value = "Ops! Invalid Email";

	return false;
  }
 };

 email.addEventListener('keydown', function(event) {
	const key = event.key;
	if (key === "Backspace" || key === "Delete") {
		email.value = "";
		exclamation.style.display = "none"
	}
});
