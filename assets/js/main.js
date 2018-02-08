// Validar login
function toCollage(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;


	if(username.length == ""){
		alert("Ingresa tu usuario")
	}

	if((password == "") || (password == 123456) || (password.length < 5)){
		alert("Ingresa una contraseña válida")
	} else {
		window.location.href="collage-dnd.html"
	}
}

//D&D
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

