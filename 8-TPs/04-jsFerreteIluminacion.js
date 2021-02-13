
//GIRARDI ALTERINI FRANCO 1H

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */


function CalcularPrecio () 
{	var CantidadDeLamparitas;
	var MarcaDeLamparita;
	var PrecioDeLamparita;
	var PrecioDeDescuento;
	CantidadDeLamparitas=txtIdCantidad.value;
	CantidadDeLamparitas=parseInt(CantidadDeLamparitas);
	MarcaDeLamparita=Marca.value;
	PrecioDeLamparita=35;

	if(CantidadDeLamparitas>5)
	{	
		Descuento=0.5;
	}
	else
	{
		if(CantidadDeLamparitas==5)
		{
			if(MarcaDeLamparita=="ArgentinaLuz")
			{	
				Descuento=0.6;
			}
			else
			{	
				Descuento=0.7;
			}
		}	
	}
	if (CantidadDeLamparitas==4)
	{
		if(MarcaDeLamparita=="ArgentinaLuz"||MarcaDeLamparita=="FelipeLamparas")
		{	
			Descuento=0.75;
		}	
		else
		{	
			Descuento=0.80;
		}
	}
	if(CantidadDeLamparitas==3)
	{
		if(MarcaDeLamparita=="ArgentinaLuz")
		{
			Descuento=0.85;
		}	
		else
		{	if(MarcaDeLamparita=="FelipeLamparas")
			{
			Descuento=0.9;
			}
			else
			{
			Descuento=0.95;
			}
		}
	}
	PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
	if(PrecioDeDescuento>120)
	{
		IngresosBrutos=PrecioDeDescuento*0.1;
		PrecioDeDescuento=PrecioDeDescuento+IngresosBrutos;
		alert("Usted pago "+PrecioDeDescuento+", siendo "+IngresosBrutos+" el impuesto que se pagó");
	}	
	txtIdprecioDescuento.value=PrecioDeDescuento;
}


/*function CalcularPrecio () 
{	var CantidadDeLamparitas;
	var MarcaDeLamparita;
	var PrecioDeLamparita;
	var PrecioDeDescuento;
	CantidadDeLamparitas=txtIdCantidad.value;
	CantidadDeLamparitas=parseInt(CantidadDeLamparitas);
	MarcaDeLamparita=Marca.value;
	PrecioDeLamparita=35;

	if(CantidadDeLamparitas>5)
	{	
		Descuento=0.5;
		PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
	}
	else
	{
		if(CantidadDeLamparitas==5)
		{
			if(MarcaDeLamparita=="ArgentinaLuz")
			{	
				Descuento=0.6;
				PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
			}
			else
			{	
				Descuento=0.7;
				PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
			}
		}	
	}
	if (CantidadDeLamparitas==4)
	{
		if(MarcaDeLamparita=="ArgentinaLuz"||MarcaDeLamparita=="FelipeLamparas")
		{	
			Descuento=0.75;
			PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
		}	
		else
		{	
			Descuento=0.80;
			PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
		}
	}
	if(CantidadDeLamparitas==3)
	{
		if(MarcaDeLamparita=="ArgentinaLuz")
		{
			Descuento=0.85;
			PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
		}	
		else
		{	if(MarcaDeLamparita=="FelipeLamparas")
			{
			Descuento=0.9;
			PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
			}
			else
			{
			Descuento=0.95;
			PrecioDeDescuento=CantidadDeLamparitas*PrecioDeLamparita*Descuento;
			}
		}
	}
	if(PrecioDeDescuento>120)
	{
		IngresosBrutos=PrecioDeDescuento*0.1;
		PrecioDeDescuento=PrecioDeDescuento+IngresosBrutos;
		alert("Usted pago "+PrecioDeDescuento+", siendo "+IngresosBrutos+" el impuesto que se pagó");
	}	

	txtIdprecioDescuento.value=PrecioDeDescuento;
}
*/