function invi(){

	document.getElementById("i1").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i1").style = "display: none;";
	"display: none;"

	document.getElementById("i2").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i2").style = "display: none;";
	"display: none;"

	document.getElementById("i3").style = "visibility: visible;";
	"visibility: visible;"
	document.getElementById("i3").style = "display: block;";
	"display: block;"

	document.getElementById("i4").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i4").style = "display: none;";
	"display: none;"

	document.getElementById("i5").style = "visibility: visible;";
	"visibility: visible;"
	document.getElementById("i5").style = "display: block;";
	"display: block;"

}

function visi(){

	document.getElementById("i3").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i3").style = "display: none;";
	"display: none;"

	document.getElementById("i2").style = "visibility: visible;";
	"visibility: visible;"
	document.getElementById("i2").style = "display: block;";
	"display: block;"

	document.getElementById("i3").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i3").style = "display: none;";
	"display: none;"

	document.getElementById("i4").style = "visibility: visible;";
	"visibility: visible;"
	document.getElementById("i4").style = "display: block;";
	"display: block;"

	document.getElementById("i5").style = "visibility: hidden;";
	"visibility: hidden;"
	document.getElementById("i5").style = "display: none;";
	"display: none;"

	document.getElementById("i1").style = "visibility: visible;";
	"visibility: visible;"
	document.getElementById("i1").style = "display: block;";
	"display: block;"

}

function pass(){

	var c1=document.getElementById("ps").value;
	var cp2=document.getElementById("cps").value;	

	if ((c1==cp2)&&(c1,cp2 !="")) {
		document.getElementById("ps").style = "border-bottom: 4px solid green;";
		document.getElementById("cps").style = "border-bottom: 4px solid green;";		
	} else{
		document.getElementById("ps").style = "border-bottom: 4px solid red;";
		document.getElementById("cps").style = "border-bottom: 4px solid red;";	
		document.getElementById("info").innerHTML = "Las contraseñas no coinciden"; 
	}

	valor = document.getElementById("d").value;
	if( valor != "" ) {
		document.getElementById("d").style = "border-bottom: 4px solid green;";
	}else{
		document.getElementById("d").style = "border-bottom: 4px solid red;";  	
		document.getElementById("info").innerHTML += "<br/>El usuario esta vacio"; 		
	}

	var e1=document.getElementById("em").value;

	if (validateEmail(e1)) {
		document.getElementById("em").style = "border-bottom: 4px solid green;";	
	}else{
		document.getElementById("em").style = "border-bottom: 4px solid red;";
		document.getElementById("info").innerHTML += "<br/> El Formato de Correo es Invalido"; 		
	}

	var p1=document.getElementById("p").value;

	if (valinum(p1)) {
		document.getElementById("p").style = "border-bottom: 4px solid green;";	
	}else{
		document.getElementById("p").style = "border-bottom: 4px solid red;";
		document.getElementById("info").innerHTML += "<br/> Ingrese numeros hasta un maximo de 10 caracteres"; 		
	}

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function valinum(num){

	var re =  /^([0-9]{1,10})$/;
	return re.test(String(num).toLowerCase());
}