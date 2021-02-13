
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//   FRANCO GIRARDI ALTERINI CURSO 1 H

function Sumar () 
{ var Producto1;
	var Producto2;
	var Producto3;
	var Suma;
	Producto1= txtIdPrecioUno.value;
	Producto2= txtIdPrecioDos.value;
	Producto3= txtIdPrecioTres.value;
	Producto1= parseInt(Producto1);
	Producto2= parseInt(Producto2);
	Producto3= parseInt(Producto3);
	Suma= Producto1 + Producto2 + Producto3;
	document.write("el resultado es " + Suma);
}

function Promedio () 
{var Producto1 = txtIdPrecioUno.value
	var Producto2 = txtIdPrecioDos.value
	var Producto3= txtIdPrecioTres.value
	var promedio
	Producto1= parseInt(Producto1);
	Producto2= parseInt(Producto2);
	Producto3= parseInt(Producto3);
	promedio= (Producto1 + Producto2 + Producto3)/3;
	alert("el resultado es " + promedio);
}

function PrecioFinal () 
{var Producto1 = txtIdPrecioUno.value
	var Producto2 = txtIdPrecioDos.value
	var Producto3= txtIdPrecioTres.value
	var Preciofinal;
	Producto1= parseInt(Producto1);
	Producto2= parseInt(Producto2);
	Producto3= parseInt(Producto3);
	Preciofinal= (Producto1 + Producto2 + Producto3) + (Producto1 + Producto2 + Producto3) * 0.21;
	alert("el resultado es " + Preciofinal);
	
}
