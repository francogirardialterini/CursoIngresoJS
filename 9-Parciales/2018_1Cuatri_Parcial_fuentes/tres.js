function mostrar()
{ var Precio;
	var Descuento;
	var PrecioFinal;
	Precio= parseInt (promt("cual es el precio"));
	Descuento= parseInt(promt("cual es el descuento"));
	PrecioFinal= (Precio * Descuento) /100;
	elPrecioFinal.value = PrecioFinal;

}
