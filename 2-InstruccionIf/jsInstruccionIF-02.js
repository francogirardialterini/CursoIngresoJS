// GIRARDI ALTERINI FRANCO 1H
/*
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III */

/*
function mostrar()
{ 
	var NombreDelUsuario;
	var PesoDelUsuario;
	var AlturaDelUsuario;
	var Imc;
	NombreDelUsuario=txtIdEdad.value;
	PesoDelUsuario=parseFloat(prompt("cual es su peso en kg"));
	AlturaDelUsuario=parseFloat(prompt("cual es su altura en metros","por ej. 1.70"));
	Imc=PesoDelUsuario/(AlturaDelUsuario*AlturaDelUsuario);
	if(Imc<18.5)
	{
		alert(NombreDelUsuario + " tiene Bajo peso");
	}
	else
	{
		if(Imc<25)
		{
			alert(NombreDelUsuario + " tiene un peso Adecuado");
		}
		else
		{
			if (Imc<30) 
			{
				alert(NombreDelUsuario + " tiene un sobrepeso");
			}
			else
			{
				if(Imc<35)
				{
					alert(NombreDelUsuario + " tiene Obesidad Tipo 1");
				}
				else
				{
					alert(NombreDelUsuario + " tiene Obesidad Tipo 2");
				}
			}
		}
	}
}
*/


// GIRARDI ALTERINI FRANCO 1H
/*
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III */

function mostrar()
{ 
	var NombreDelUsuario;
	var PesoDelUsuario;
	var AlturaDelUsuario;
	var Imc;
	var Condición;
	NombreDelUsuario=txtIdEdad.value;
	PesoDelUsuario=parseFloat(prompt("cual es su peso en kg"));
	AlturaDelUsuario=parseFloat(prompt("cual es su altura en metros","por ej. 1.70"));
	Imc=PesoDelUsuario/(AlturaDelUsuario*AlturaDelUsuario);
		
	if(Imc<18.5)
	{
		Condición=" tiene Bajo peso";
	}
	else
	{
		if(Imc<25)
		{
			Condición=" tiene un peso Adecuado"
		}
		else
		{
			if (Imc<30) 
			{
				Condición=" tiene un sobrepeso";
			}
			else
			{
				if(Imc<35)
				{
					Condición=" tiene Obesidad Tipo 1";

				}
				else
				{
					Condición=" tiene Obesidad Tipo 2";
				}
			}
		}
	}
	alert(NombreDelUsuario + Condición);
}



/*
var edad;
	edad= txtIdEdad.value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("usted es mayor de edad");
	} */