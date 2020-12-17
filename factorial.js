let numero = 4

function factorial(numero){
    if(numero<=1){
        return 1
    }
    else{
        return numero * factorial(numero-1)
    }
}

console.log('El factorial de ' + numero + ' es = ' + factorial(numero))