// Parte 1

const a = 13
const b = 13

let Adição = a + b
console.log(Adição);

let Subtração = a - b
console.log(Subtração);

let Multiplicação = a * b
console.log(Multiplicação);

let Divisão = a / b
console.log(Divisão);

let Modulo = a % b
console.log(Modulo);

// Parte 2

const valor1 = 30
const valor2 = 60

if(valor1 < valor2){
    console.log(valor2);
}else{
    console.log(valor1);
}

// Parte 3

const Valor1 = 30
const Valor2 = 60
const Valor3 = 90

if(Valor1 < Valor2){
    if(Valor2 < Valor3){
        console.log(Valor3);
    }else if(Valor1 < Valor3){
        if(Valor3 < Valor2){
            console.log(Valor2);
        }else{
            console.log(Valor3);
        }
    }
    else{
        console.log(Valor1);
    }
}else{
    console.log(Valor1);
}

// Parte 4

const positiveNegative = 10

if(positiveNegative > 0){
    console.log("positive");
}
else if(positiveNegative < 0){
console.log("negative");
}else{
    console.log("Zero");
}

// Parte 5

const val1Triangulo = 60
const val2Triangulo = 60
const val3Triangulo = 60

if(val1Triangulo + val2Triangulo + val3Triangulo === 180){
    console.log(true);
}else{
    console.log(false);
    console.log("Algo deu errado! :/");
}