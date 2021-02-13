//GIRARDI ALTERINI FRANCO 1H

function mostrar()
{	var edad;
	var estadocivil;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estadocivil=estadoCivil.value;
	if(edad<18 && estadocivil!="Soltero")
	{alert("es muy pequeño para No ser Soltero");
	}
}