
 /* FRANCO GIRARDI ALTERINI CURSO 1H
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo) */



function SacarResto()
{ var NumeroUno;
	var NumeroDos;
	var suma;
	var promedio;
	var modulo;

	NumeroUno= txtIdNumeroDividendo.value;
	NumeroDos= txtIdNumeroDivisor.value;
	NumeroUno= parseInt(NumeroUno);
	NumeroDos= parseInt(NumeroDos);
	suma= NumeroUno + NumeroDos;
	promedio= suma /2;
	modulo= NumeroUno%NumeroDos;
	console.log(suma);
	console.log(promedio);
	console.log(modulo);
}



/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
function SacarResto()
{ var dividendo;
	var divisor;
	var resto;
	dividendo= txtIdNumeroDividendo.value;
	divisor= txtIdNumeroDivisor.value;
	dividendo= parseInt(dividendo);
	divisor= parseInt(divisor);
	resto= dividendo%divisor;
	alert("el resultado es " + resto);
}
*/