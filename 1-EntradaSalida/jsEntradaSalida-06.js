/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Numerouno;
var Numerodos;
var suma;
Numerouno= txtIdNumeroUno.value;
Numerodos= txtIdNumeroDos.value;
Numerouno= parseInt(Numerouno);
Numerodos= parseInt(Numerodos);
suma= (Numerouno + Numerodos);
	alert("la suma es " + suma);
}

