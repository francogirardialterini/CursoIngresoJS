// GIRARDI ALTERINI FRANCO 1H
/*
3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 
por cada estadia como base, se pide el ingreso de una estacion del año y localidad para 
vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */


function mostrar()
{ 
	var PrecioBase;
	var Estacion;
	var Localidad;
	var VariaciónDePrecio;
	PrecioBase=15000;
	Localidad=txtIdEdad.value;
	Estacion=prompt("Cual es la Estacion", "Por ej. Verano");
	if(Estacion=="Invierno")
	{
		if(Localidad=="Bariloche") 
		{
			VariaciónDePrecio=1.2; //18000
		}
		else
		{
			if(Localidad=="Cordoba"||Localidad=="Cataratas")
			{
				VariaciónDePrecio=0.9; //13500
			}
			else
			{
				VariaciónDePrecio=0.8; //12000
			}
		}
	}
	else
	{
		if(Estacion=="Verano")
		{
			if(Localidad=="Bariloche") 
			{
			VariaciónDePrecio=0.8; //12000
			}
			else
			{
				if(Localidad=="Cordoba"||Localidad=="Cataratas")
				{
					VariaciónDePrecio=1.1; //16500
				}
				else
				{
					VariaciónDePrecio=1.2; //18000
				}
			}
		}
	}	
	if(Estacion=="Otoño"||Estacion=="Primavera")
	{
		if(Localidad=="Bariloche"||Localidad=="Cataratas"||Localidad=="Mar del Plata") 
		{
		VariaciónDePrecio=1.1; //16500
		}
		else
		{
			VariaciónDePrecio=1;
		}
	}	
	alert(PrecioBase*VariaciónDePrecio);
}




// GIRARDI ALTERINI FRANCO 1H
/*

function mostrar()
{ 
	var edad;
	edad= txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>=18)
	{alert("usted es mayor de edad");
	}
	else
	{alert("usted es menor de edad");
	}	
}
*/
