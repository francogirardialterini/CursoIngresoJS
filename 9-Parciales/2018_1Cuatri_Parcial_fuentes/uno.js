
function mostrar()
{var LargoDelRectangulo;
	var AnchoDelRectangulo;
	var PerimetroDelRectangulo;
	LargoDelRectangulo= parseInt(prompt("cual es el largo del rectangulo"));
	AnchoDelRectangulo= parseInt(prompt("cual es el ancho del rectangulo"));
	PerimetroDelRectangulo= (AnchoDelRectangulo + LargoDelRectangulo)*2;
	alert("El perimetro es " + PerimetroDelRectangulo);

}
