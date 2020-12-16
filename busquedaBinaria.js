
// Creacion de un array ordenado
let array_ordenado = [20, 25, 30, 39, 40, 41, 51, 61]
function busquedaBinaria(value, array){
    let inicio = 0
    let final = array.length - 1
    let position = -1
    let encontrado = false
    let medio

    console.log(array)
    while(encontrado === false && inicio <= final){
        medio = Math.floor((inicio + final)/2)
        if(array[medio] == value){
            encontrado = true
            posicion = medio
        }
        else if(array[medio] > value){
            final = medio - 1
            console.log(final, array[final])
        }
        else{
            inicio = medio + 1
            console.log(inicio, array[inicio])
        }
    }
    console.log('El valor: ' + value + ' se encuentra en la posicion: ' + posicion)
}

console.log(busquedaBinaria(61, array_ordenado))