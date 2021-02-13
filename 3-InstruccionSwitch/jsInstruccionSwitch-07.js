// GIRARDI ALTERINI FRANCO 1H
/* Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en 
donde se encuentra Norte, Sur, Este u Oeste*/


function mostrar()
{
	var Destino;
	Destino=txtIdDestino.value;
	switch(Destino)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		default:
			alert("Sur");	
	}
}