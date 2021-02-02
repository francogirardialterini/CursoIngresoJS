/*
Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"


GIRARDI ALTERINI FRANCO L H

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{ var edadDelAlumno;
edadDelAlumno= prompt("cual es su edad")
	var nombreDelAlumno;
	nombreDelAlumno=txtIdNombre.value;
	//nombreDelAlumno=document.getElementById('txtIdNombre').value;
	alert("Usted se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");

} 


