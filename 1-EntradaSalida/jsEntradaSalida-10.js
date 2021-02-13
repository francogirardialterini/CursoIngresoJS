
/*   FRANCO GIRARDI ALTERINI CURSO 1H

2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"

*/


function mostrarAumento()
{	var NombreDelProducto;
	var importe;
	var descuento;
	var resultado;
	importe= txtIdImporte.value;
	importe=parseInt(importe);
	NombreDelProducto= prompt("cual es el nombre del producto")
	descuento= parseInt(prompt("cual es el valor de descuento"))
	resultado= importe + (importe*descuento/100);
	mensaje= ("usted compro un " + NombreDelProducto + " con " + descuento + " % de descuento " + ", el precio final es " + resultado);
	txtIdResultado.value= mensaje;
}
//"usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"


/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"


function mostrarAumento()
{var importe;
	var resultado;
	var descuento;
	importe= txtIdImporte.value;
	importe=parseInt(importe);
	descuento=(importe*0.25);
	resultado= (importe - descuento);
	txtIdResultado.value= resultado;
	;
}

/*
function mostrarAumento()
{var importe;
	var resultado;
	var descuento;
	importe= txtIdImporte.value;
	importe=parseInt(importe);
	resultado=parseInt(resultado);
	descuento=parseInt(descuento);
	descuento=importe*25/100;
	resultado= (importe - descuento);
	txtIdResultado.value= resultado;
	;
}

function mostrarAumento()
{var importe;
	var resultado;
	importe= txtIdImporte.value;
	importe=parseInt(importe);
	resultado=parseInt(resultado);
	resultado= importe - (importe*0.25);
	txtIdResultado.value= resultado;
	;
}

function mostrarAumento()
{var importe;
	var resultado;
	importe= txtIdImporte.value;
	importe=parseInt(importe);
	resultado=parseInt(resultado);
	resultado= importe *0.75;
	txtIdResultado.value= resultado;
	;
}
*/