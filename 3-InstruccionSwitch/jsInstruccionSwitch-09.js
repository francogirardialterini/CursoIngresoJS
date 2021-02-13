// GIRARDI ALTERINI FRANCO 1H
/* Enunciado:
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var Tarifa;
	var Estacion;
	var Localidad;
	Estacion=txtIdEstacion.value;
	Localidad=txtIdDestino.value;
	Tarifa= 15000;
	switch (Estacion)
	{	case "Invierno":
			switch (Localidad)
			{
				case "Bariloche":
				Precio=Tarifa*1.2;
				alert(Precio);
				break;
				case "Cataratas":
				case "Cordoba":
				Precio=Tarifa*0.9;
				alert(Precio);
				break;
				case "Mar del plata":
				Precio=Tarifa*0.8;
				alert(Precio);
				break;
			}
		break;	
		case "Verano":
			switch (Localidad)
			{
				case "Bariloche":
				Precio=Tarifa*0.8;
				alert(Precio);
				break;
				case "Cataratas":
				case "Cordoba":
				Precio=Tarifa*1.1;
				alert(Precio);
				break;
				case "Mar del plata":
				Precio=Tarifa*1.2;
				alert(Precio);
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch (Localidad)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				Precio=Tarifa*1.1;
				alert(Precio);
				break;
				case "Cordoba":
				alert(Tarifa);
				break;
			}	
		break;	
	}
}