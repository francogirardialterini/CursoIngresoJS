// GIRARDI ALTERINI FRANCO 1H

function mostrar()
{	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad>17)
		{alert("usted es mayor");
		}
	else{
		if(edad>12 && edad<18)
			{alert("usted es adolescente");
		    }
		else{alert("usted es un niño");
			}
	   	}	 
}