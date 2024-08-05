const consumir_api = async () => {
    const publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos = await publicaciones.json()

        datos.forEach(element => {
            console.log(element.title)
        });
}

consumir_api()