function toCollage(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	var btnSesion = document.getElementsById("sign")[0];


	if(user == ""){
		alert("por favor ingresa tu usuario")
		/*var errorU = document.createElement("span")
		errorU.classList.add("error-u")
		var textU = document.createTextNode("Ingrese Usuario")

		var userbien = document.getElementsByClassName("form-group")[0];
		errorU.appendChild(textU)
		userbien.appendChild(errorU)*/

	}else{
		window.location.href="collage-dnd.html"
	}

	if((pass == "") || (pass == 123456) || (pass.length < 5) || (pass.length > 7)){
		var errorP = document.createElement("span")
		errorP.classList.add("error-p")
		var textP = document.createTextNode("Ingrese Contraseña")

		var passbien = document.getElementsByClassName("form-group")[0];
		errorP.appendChild(textP)
		passbien.appendChild(errorP)

	}else{
		window.location.href="collage-dnd.html"
	}
}

// Función d&d

var button = document.getElementById("boton");
button.addEventListener("click", toCollage);

function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}
function permitirDrop(ev){
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var idFoto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(idFoto));
}

