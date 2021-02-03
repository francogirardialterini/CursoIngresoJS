
/* // FRANCO GIRARDI ALTERINI CURSO 1H

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	var Numerouno;
var Numerodos;
var suma;
Numerouno= txtIdNumeroUno.value;
Numerodos= txtIdNumeroDos.value;
Numerouno= parseInt(Numerouno);
Numerodos= parseInt(Numerodos);
suma= (Numerouno + Numerodos);
	alert("la suma da " + suma);
}

function restar()
{var Numerouno;
var Numerodos;
var resta;
Numerouno= txtIdNumeroUno.value;
Numerodos= txtIdNumeroDos.value;
Numerouno= parseInt(Numerouno);
Numerodos= parseInt(Numerodos);
resta= (Numerouno - Numerodos);
alert("la resta da " + resta);
	
}

function multiplicar()
{ var Numerouno;
var Numerodos;
var multiplicar;
Numerouno= txtIdNumeroUno.value;
Numerodos= txtIdNumeroDos.value;
Numerouno= parseInt(Numerouno);
Numerodos= parseInt(Numerodos);
multiplicar= (Numerouno * Numerodos);
alert("la multiplicacion da " + multiplicar)
	
}

function dividir()
{var Numerouno;
var Numerodos;
var dividir;
Numerouno= txtIdNumeroUno.value;
Numerodos= txtIdNumeroDos.value;
Numerouno= parseInt(Numerouno);
Numerodos= parseInt(Numerodos);
dividir= (Numerouno / Numerodos);
alert("la division da " + dividir)
	
}

