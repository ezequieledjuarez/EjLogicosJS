// Creacion de un array desordenado
let array_desordenado = [20, 15, 10, 19, 50, 1, 31, 41]
//Lo muestro por pantalla
console.log('Array Original: ' + ' ' + array_desordenado)

function ordenamientoPorInsercion(array){
    let tamanio = array.length
    let aux,j;

    for(let i = 1; i<tamanio; i++){
        j = i
        aux = array[i]
        console.log(array)
        while(j >  0 && array[j-1] > aux){
            array[j] = array[j-1]
            j--
            //console.log(array)
        }
        array[j] = aux
    }
    console.log('Final: ' + ' ' + array)
}

console.log(ordenamientoPorInsercion(array_desordenado))