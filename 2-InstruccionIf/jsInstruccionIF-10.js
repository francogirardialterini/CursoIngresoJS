// GIRARDI ALTERINI FRANCO 1H
/* Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{	var numrandom;
	numrandom=Math.floor(Math.random() *10 +1);
	console.log(numrandom);
	if(numrandom>8)
	{	
		alert("EXCELENTE");
	}	
	else
	{
		if(numrandom>3)
		{	
			alert("APROBO");
		}
		else
		{	
		alert("Vamos, la proxima se puede");
		}
	}	
}