// GIRARDI ALTERINI FRANCO 1H
/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/

function mostrar()
{
	var HoraDelDia=txtIdHora.value;

	switch(HoraDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.");
			break;
	}
}