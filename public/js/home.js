function encrpytPassword() {

	var result = document.getElementById('result');
	var pwdInput = document.getElementById('password');

	var xhr = new XMLHttpRequest();


	xhr.open('GET', 'http://localhost:3003/encrypt?password=' + pwdInput.value, true);

	xhr.onreadystatechange = function(event) {

		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				result.innerHTML = '<div class="alert alert-success" > <strong>Well done!</strong> ' + xhr.responseText + '</div';
			}
			else
			{
				alert('bad input!');
			}
		}	
	};

	xhr.send(null);
}

function decryptPassword() {

	var result = document.getElementById('result');
	var hashInput = document.getElementById('myHash');

	var xhr = new XMLHttpRequest();


	xhr.open('GET', 'http://localhost:3003/decrypt?myhash=' + hashInput.value, true);

	xhr.onreadystatechange = function(event) {

		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				result.innerHTML = '<div class="alert alert-info" > <strong>Well done!</strong> ' + xhr.responseText + '</div';
			}
			else
			{
				alert('bad input!');
			}
		}	
	};

	xhr.send(null);
}
