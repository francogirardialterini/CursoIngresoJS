
// GIRARDI ALTERINI FRANCO 1H

/* 1-con if pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/

function mostrar()
{
	var DistanciaDeViaje;
	var TiempoDeViaje;
	var VelocidadDeViaje;
	DistanciaDeViaje=txtIdEdad.value;
	DistanciaDeViaje=parseInt(DistanciaDeViaje);
	TiempoDeViaje=parseInt(prompt("cuanto tiempo tardo"));
	VelocidadDeViaje=DistanciaDeViaje/TiempoDeViaje;
	if(VelocidadDeViaje<61)
	{
		alert("Muy lento");
	}
	else
	{
		if(VelocidadDeViaje<81)
		{
			alert("Lento");
		}	
		else
		{
			if(VelocidadDeViaje<101)
			{
				alert("buen ritmo");
			}
			else
			{
				if(VelocidadDeViaje<121)
				{
					alert("Ahi de la Ley");
				}
				else
				{
					alert("eso no se hace");
				}
			}
		}
	}
}

/*
var edad;
	edad= txtIdEdad.value;
	edad=parseInt(edad);
	//resultado = edad == 15;

	//alert (resultado);

	if (edad==15) 
	{	
		alert("niña bonita");

	} */