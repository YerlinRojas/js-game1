//123
let nombre = 'Tu nombre'
console.log('Bienvenido '+ nombre)
alert('Bienvenido '+ nombre)

//4
let lenguaje= prompt('Cual es el lenguaje de programacion que mas te gusta?')
console.log(lenguaje)

//5
let valor1 = 23 
let valor2 = 11
let resulta= valor1+valor2
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resulta}.`)

//6
let valor12 = 55 
let valor22= 10
let resultado= valor1-valor2
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`)

//7
let edad = parseInt( prompt('indica tu edad'))
if(edad >= 18){
    console.log('Felicidades eres mayor de edad')
}else{
    console.log('No Eres mayor de edad')
}

//8
let numero = parseInt (prompt('Indica un numero'))
if(numero == 0){
    console.log('El numero indicador es cero')
}else if(numero > 0 ){
    console.log('El numero es positivo')
}else(numero < 0);{
    console.log('El numero es negativo')
}

//9
let numeroWhile = 1

while (numeroWhile <= 10) {
    console.log(numeroWhile)
    numeroWhile++
}

//10
let nota= 25
if(nota >= 7){
    console.log('Aprobado')
}else{
    console.log('reprobado')
}

//11
let numeroRamdon = Math.random()
console.log(numeroRamdon)

//12
let numeroR = Math.floor(Math.ramdon()*10)+1
console.log(numeroR)

//13
let numeroE = Math.floor(Math.random()*1000)+1
console.log(numeroE)