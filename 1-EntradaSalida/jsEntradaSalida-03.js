

/* 1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.

RECUERDEN QUE LOS EJERCICIOS LOS DEBEN ENTREGAR POR LINK DE GDB Y DEBERAN INCLUIR COMO COMENTARIO, EL ENUNCIADO DEL EJERCICIO, DIVISION, NOMBRE Y APELLIDO
*/

// GIRARDI ALTERINI FRANCO, CURSO 1H

function mostrar()
{
var NombreDelProducto;
var PrecioDelProducto;
var Aumento;
var porcentaje;
var PrecioFinal;
porcentaje= 30;
PrecioDelProducto= txtIdNombre.value;
PrecioDelProducto= parseFloat(PrecioDelProducto);
NombreDelProducto= prompt("Ingrese el nombre del producto", "por ejemplo alfajor");
Aumento= PrecioDelProducto* porcentaje/100;
PrecioFinal= PrecioDelProducto+ Aumento;
alert("El producto " + NombreDelProducto + " con el aumento vale " + PrecioFinal)

}

/*






/*
Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"


GIRARDI ALTERINI FRANCO L H

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{ var edadDelAlumno;
edadDelAlumno= prompt("cual es su edad")
	var nombreDelAlumno;
	nombreDelAlumno=txtIdNombre.value;
	//nombreDelAlumno=document.getElementById('txtIdNombre').value;
	alert("Usted se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");

} 

*/
