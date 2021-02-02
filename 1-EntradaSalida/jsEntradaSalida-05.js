/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

// GIRARDI ALTERINI FRANCO ejercicio 5
/*
function mostrar()
{	var NombredeUsuario;
	var EdaddeUsuario;
	NombredeUsuario = txtIdNombre.value;
	EdaddeUsuario = txtIdEdad.value;
	alert("Usted se llama " + NombredeUsuario + " y tiene " + EdaddeUsuario + "años");
}

// GIRARDI ALTERINI FRANCO ejercicio 5 bis
*/

function mostrar()
{	var NombredeUsuario;
	var EdaddeUsuario;
	var Apellidodelalumno;
	NombredeUsuario = document.getElementById('txtIdNombre').value;
	EdaddeUsuario = document.getElementById('txtIdEdad').value;
	Apellidodelalumno = prompt("cual es su apellido");
	alert("Usted se llama " + NombredeUsuario + " su apellido es " + Apellidodelalumno +  " y tiene " + EdaddeUsuario + " años");
}

