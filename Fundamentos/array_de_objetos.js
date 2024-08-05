const alumnos = [
    {
        legajo: '234',
        usuario: 'nuñez',
        password: '1234',
        calificaciones:{
            matematica:8,
            sociales:7,
        }
    },
    {
        legajo: '235',
        usuario: 'castillo',
        password: '123456',
        calificaciones:{
            matematica:7,
            sociales:8,
        }
    }
]

alumnos.forEach(element => {
   console.log(element.usuario) 
});