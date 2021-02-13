// GIRARDI ALTERINI FRANCO 1H
/*
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var MesDelAnio
	MesDelAnio=txtIdMes.value
	switch(MesDelAnio)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias.");
			break;
		case "Febrero":
			alert("Tiene 28 dias.");
			break;
		default:
			alert("Tiene 30 dias.");	
	}
}