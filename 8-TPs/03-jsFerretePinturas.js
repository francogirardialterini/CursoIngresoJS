/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//   FRANCO GIRARDI ALTERINI CURSO 1 H

function FahrenheitCentigrados () 
{ var Temperatura;
	var FahrenheitCentigrados;
	Temperatura= txtIdTemperatura.value;
	Temperatura= parseInt(Temperatura);
	FahrenheitCentigrados= (Temperatura - 32) *5/9;
	alert(Temperatura + " Fahrenheit son " + FahrenheitCentigrados + " centígrados");
}

function CentigradosFahrenheit () 
{ var Temperatura;
	var CentigradosFahrenheit;
	Temperatura= txtIdTemperatura.value;
	Temperatura= parseInt(Temperatura);
	CentigradosFahrenheit= (Temperatura * 9/5) + 32;
	alert( Temperatura + "  Centígrados son " + CentigradosFahrenheit + " Fahrenheit");
}
