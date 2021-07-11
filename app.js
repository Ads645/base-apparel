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



 /* /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
 
 
 
 email.value = "Please enter a valid email!";
	document.getElementById('error').style.visibility = "visible";
 
 
 email.value = "";
 
 
 function  resetFn() {
	email.onkeydown = document.getElementById('error').style.visibility = "hidden";
}
	
 resetFn();
 
 
 setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 5000);
 
 
 else {
	object.onfocus = function(){myScript}
  }document.getElementById("form").reset();

const form = document.getElementById('form');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
	e.preventDefault();
	const emailVal = email.value;
	
	//check if it is a valid email 
	if (validateEmail(emailVal)){
		document.getElementById('error').style.visibility = "visible";
	} else {
		document.getElementById('error').style.visibility = "hidden";
	}

});document.getElementById('error').style.visibility = "visible";


 


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/