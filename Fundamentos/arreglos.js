//crear un arreglo
let lenguajes = ['JavaScript','Php','C++','Python','Go','C#']

//longitud de un array
let longitud = lenguajes.length
console.log('Longitud de un arreglo: '+longitud)

//último elemento de un arreglo
let ultimo = lenguajes[longitud-1]
console.log('Último elemento del array: '+ultimo)

/*
vamos a recorrer un arreglo haciendo uso de la estructura
repetitiva foreach
*/
lenguajes.forEach((element,index) => {
    console.log(index+'-'+element)
});

//como agregar un elemento al final del arreglo
lenguajes.push('Java')
console.log(lenguajes)

//como eliminar el último elemento de arreglo
lenguajes.pop()
console.log(lenguajes)

//como agregar un elemento al inicio de un arreglo
lenguajes.unshift('Java')
console.log(lenguajes)

//como eliminar el primer elemento de un arreglo
lenguajes.shift()
console.log(lenguajes)

//como buscar un elemento e imprimir su índice
let indice = lenguajes.indexOf('Php')
console.log('Indice de PHP: '+indice)

//eliminar elementos de un arreglo
//necesita punto de partida y cantidad de elemento a eliminar
//Incluyendo al elemento de partida
//dicho método nos otorga como info los elementos eliminados (Php y  C++)
let eliminados = lenguajes.splice(indice,2)
console.log(lenguajes)
console.log('Elementos eliminados: '+eliminados)

//como agregar elementos a un arreglo
lenguajes.splice(1,0,'Visual Basic')
console.log(lenguajes)

//copiar un arreglo
let lenguajes2 = lenguajes.slice()
lenguajes2.push('Java')
console.log(lenguajes2)