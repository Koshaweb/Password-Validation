let isVisible = false;

function see() {
	let input = document.getElementById('password');
	let see = document.getElementById('see');

	if(isVisible) {
		input.type = "password";
		see.style.color = "gray";
		isVisible = false;
	}else{
		input.type = "text";
		see.style.color = "black";
		isVisible = true;
	}
}

function check() {
	let input = document.getElementById('password').value;
	 
	input = input.trim();

	if(input.length >= 5) {
		document.getElementById('check1').style.color = "green";
	}else{
		document.getElementById('check1').style.color = "red";
	}


	if(input.length <= 10) {
		document.getElementById('check2').style.color = "green";
	}else{
		document.getElementById('check2').style.color = "red";
	}

	if(input.match(/[0-9]/i)){
		document.getElementById('check3').style.color = 'green';
	}else{
		document.getElementById('check3').style.color = 'red';
	}


	if(input.match(/[^A-Za-z0-9-""]/i)){
		document.getElementById('check4').style.color = 'green';
	}else{
		document.getElementById('check4').style.color = 'red';
	}



}