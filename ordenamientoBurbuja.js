// Creacion de un array desordenado
let array_desordenado = [20, 15, 10, 19, 50, 1, 31, 41]
//Lo muestro por pantalla
console.log('Array Original: ' + ' ' + array_desordenado)


function ordenamientoBurbuja(array){
    let tamanio = array.length //Almaceno el tamaño del array
    let aux; //Creo un auxiliar para guardar un dato

    for(let i = 1; i < tamanio; i++){ // Recorro el array desde la segunda posición
        for(let j = 0; j<(tamanio-i); j++){ // Recorro el array desde la primera posición
            /*ordenamiento descendente
            if(array[j] > array[j+1]){ */
            // ordenamiendo ascendente
            if(array[j] > array[j+1]){ //Comparo el valor en j con su siguiente, si el primero es mayor
                aux = array[j] // Almaceno el valor mayor en la variable auxiliar
                array[j] = array[j+1] // muevo el valor menor a una posición hacia atrás
                array[j+1] = aux //  muevo el valor mayor una posición hacia adelante
            }
            console.log('Cambio :'+ ' ' + array)
        }
    }
    console.log('Final: ' + ' ' + array)
}

ordenamientoBurbuja(array_desordenado)