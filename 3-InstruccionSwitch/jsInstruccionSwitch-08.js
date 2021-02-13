// GIRARDI ALTERINI FRANCO 1H
/* Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/


function mostrar()
{
	var Clima;
	Clima=txtIdDestino.value;
	switch(Clima)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;
		default:
			alert("Hace Frio");	
	}
}