let burbuja = require('./ordenamientoBurbuja')

// Creacion de un array desordenado
let array_desordenado = [20, 15, 10, 19, 50, 1, 31, 41]

function busquedaLineal(value,array){
    let encontrado = false
    let posicion = -1
    let i = 0

    console.log(array)
    while(!encontrado && i < array.length){
        if(array[i] == value){
            encontrado = true
            posicion = i
        }
        else{
            index ++
        }
    }
    console.log('El valor buscado: ' + value + ' se encuentra en la posición: ' + posicion)
}


