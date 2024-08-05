const mostrar = () => {
    const respuesta = entregar_datos(5,4)
    console.log('Resultado = '+respuesta)
}

const entregar_datos = (d1, d2) => {
    const resultado = Number(d1) + Number(d2)
    return resultado
}

//ejecutar la funcion mostrar
mostrar()