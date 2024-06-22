//desafio
alert('Bienvenid@ a nuestra web')

let nombre = "Luna"
let edad = 18

let numeroDeVentas = 50
let saldoDisponible = 1000


let nombreUser = prompt("Escribe tu nombre")
let edadUser = prompt("Escribe tu edad")

let edadUserNumber = parseInt(edadUser)

if (!nombreUser || !edadUser){
    alert('Error! Completa todos los campos')
}
 else if (nombreUser == nombre && edadUserNumber >= edad){
    alert('puedes obtener tu licencias')
}else {
    alert('no puedes obtener tu licencia ERES MENOR')
}

console.log('Nuevo nombre:', nombreUser)
console.log('Edad user', edadUser)