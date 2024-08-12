const consultarCotizaciones = async () => {
    try {
        const response = await fetch("https://dolarapi.com/v1/dolares");
        const datos = await response.json();

        datos.forEach(dolar => {
            console.log(`Tipo: ${dolar.casa.nombre}`);
            console.log(`Compra: ${dolar.casa.compra}`);
            console.log(`Venta: ${dolar.casa.venta}`);
            console.log(`Agencia: ${dolar.casa.agencia}`);
            console.log(`Variación: ${dolar.casa.variacion}`);
            console.log('-------------------------');
        });
    } catch (error) {
        console.error("Error al consultar las cotizaciones:", error);
    }
}

document.getElementById("btn_consultar").addEventListener("click", consultarCotizaciones);
