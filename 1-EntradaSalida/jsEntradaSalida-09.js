/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{var sueldo;
	var resultado;
	var aumento;
	sueldo= txtIdSueldo.value;
	sueldo=parseInt(sueldo);
	resultado=parseInt(resultado);
	aumento=parseInt(aumento);
	aumento=(sueldo*0.1);
	resultado= (sueldo + aumento);
	txtIdResultado.value= resultado;

}
