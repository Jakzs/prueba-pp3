const empleado = {
    nombre:'Juan',
    apellido:'rodriguez',
    dni:'42850192',
    correo:{
        gmail:'juan@gmail.com',
        outlook:'juan@outlook.com'
    }
}
//para mostrar en consola
//forma tradicional
//const nombre = empleado.nombre
//const gmail = empleado.correo.gmail
//const outlook = empleado.correo.outlook
//destructuring object

const{ apellido, dni} = empleado
const { gmail, outlook } = empleado.correo
console.log(`
    correo gmail: ${gmail}
    correo outlook: ${outlook}
    apellido: ${apellido}
    dni: ${dni}
    `)