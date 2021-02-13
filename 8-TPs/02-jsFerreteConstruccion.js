/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//   FRANCO GIRARDI ALTERINI CURSO 1 H

function Rectangulo () 
{ var LargoTerreno;
	var AnchoTerreno;
	var PerimetroAlambradoRectangular;
	var AlambradoFinal;
	LargoTerreno= txtIdLargo.value;
	AnchoTerreno= txtIdAncho.value;
	LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno =parseInt(AnchoTerreno);
	PerimetroAlambradoRectangular= (LargoTerreno + AnchoTerreno)*2 ;
	AlambradoFinal= PerimetroAlambradoRectangular*3;
	alert("la cantidad de alambre es " + AlambradoFinal + "metros");
}

function Circulo () 
{var RadioTerreno;
	var AlambradoCircular;
	var AlambradoFinal;
	RadioTerreno= txtIdRadio.value;
	RadioTerreno=parseInt(RadioTerreno);
	AlambradoCircular=RadioTerreno*Math.PI*2;
	AlambradoFinal= AlambradoCircular*3;
	alert("la cantidad de alambrado necesario es " + AlambradoFinal + " metros");	
}

function Materiales () 
{var LargoTerreno;
	var AnchoTerreno;
	var AreaDelTerreno;
	var Cemento;
	var Cal;
	LargoTerreno= txtIdLargo.value;
	AnchoTerreno= txtIdAncho.value;
	LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno =parseInt(AnchoTerreno);
	AreaDelTerreno= (LargoTerreno * AnchoTerreno);
	Cemento= AreaDelTerreno * 2;
	Cal= AreaDelTerreno * 3;
	alert("Se necesitan " + Cemento + " bolsas de Cemento " + " y " + Cal + " bolsas de Cal");
	
}
