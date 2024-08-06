const mostrar_datos_criptos = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    const datos = await response.json();
    const total_filas = [];

    datos.forEach(element => {
        let fila = `
            <tr>
                <td><img src="${element.image}" alt="${element.name}" style="width: 32px; height: 32px;"></td>
                <td>${element.name}</td>
                <td>${element.symbol.toUpperCase()}</td>
                <td>$${element.current_price.toFixed(2)}</td>
                <td>${element.price_change_percentage_24h.toFixed(2)}%</td>
                <td>${element.total_volume.toLocaleString()}</td>
            </tr>
        `;
        total_filas.push(fila);
    });

    document.getElementById("tb_filas").innerHTML = total_filas.join("");
}

    const boton = document.getElementById("btn_mostrar");
    boton.addEventListener("click", mostrar_datos_criptos);