//Crea un contador que comience en 1 y vaya 
//hasta 10 usando un bucle 'while'. Muestra cada número.

let numero = 1;

while (numero <= 10){
    console.log(numero);
    numero ++;
};


//Crea un contador que comience en 10 y vaya hasta 
//0 usando un bucle 'while'. Muestra cada número.
let numeroA = 10;

while(numeroA >= 0){
    console.log(numeroA);
    numeroA--;
};

//Crea un programa de cuenta progresiva. Pide un número 
//y cuenta desde 0 hasta ese número 
//utilizando un bucle 'while' en la consola del navegador.

let numeroB= parseInt(prompt('Indicar numero'));
let contador = 0;

while(contador <= numeroB)
{
    console.log(contador);
    numeroB++;

};

