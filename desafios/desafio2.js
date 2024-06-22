//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
//muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana= prompt('Escribe dia de la semana');

if(diaSemana == 'Sabado' || diaSemana == 'Domingo'){
    alert('Buen finde')
} else {
    alert('Buena Semana')
};


// Verifica si un número ingresado por el 
// usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt('Escribe numero');

if(numero == 0){
    alert('Escribe un numero mayor o menor a 0')
}else if(numero > 0){
    alert('Escribiste numero positivo')
}if(numero < 0){
    alert('Escribiste numero negativo')
};



//Crea un sistema de puntuación para un juego. Si la puntuación es 
//mayor o igual a 100, muestra "¡Felicidades, has ganado!".
// En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacionUser= prompt('Escribe tu puntuacion del 0 al 100');

if(puntuacionUser >= 100){
    alert('¡Felicidades, has ganado!')
} else(puntuacionUser < 100);{
    alert('Intentalo nuevamente para ganar.')
};


// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.
// Pide al usuario que ingrese su nombre mediante un prompt. 
// Luego, muestra una alerta de bienvenida usando ese nombre.

let saldo = 500
let name= "Joaquin"

alert(`Hola ${name} tu saldo disponible es: ${saldo}` )


