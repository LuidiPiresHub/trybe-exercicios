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
} else {
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
        } else {
            console.log(Valor3);
        }
    } else {
        console.log(Valor1);
    }
} else { 
    console.log(Valor1);
}

// Parte 4

const positiveNegative = 10

if(positiveNegative > 0){
    console.log("positive");
}
else if(positiveNegative < 0){
console.log("negative");
} else {
    console.log("Zero");
}

// Parte 5

const val1Triangulo = 60
const val2Triangulo = 60
const val3Triangulo = 60

if(val1Triangulo + val2Triangulo + val3Triangulo === 180){
    console.log(true);
} else {
    console.log(false);
    console.log("Algo deu errado! :/");
}

// Parte 6

const pecaXadrex = "rei"

switch (pecaXadrex.toLocaleLowerCase()){
    case "rei":
        console.log("O rei anda uma casa para qualquer lado do tabuleiro");
        break;
    case "peao":
        console.log("O peao anda uma casa para frente do tabuleiro");
        break;
    case "bispo":
        console.log("O bispo anda uma diagonal para qualquer lado do tabuleiro");
        break;
    case "cavalo":
        console.log("O cavalo anda formato de L para qualquer lado do tabuleiro");
        break;
    case "rainha":
        console.log("A rainha anda para qualquer lugar do tabuleiro, desde que esteja vazio");
        break;
    case "torre":
        console.log("A torre anda em horizontal e vertical para qualquer lado do tabuleiro");
        break;
      default:
          console.log("Peça inválida");
}

// Parte 7 

const nota = 100

if(nota < 0 || nota > 100){
    console.log("Error. algo está errado!");
}
else if(nota >= 90){
    console.log("A");
}
else if(nota >= 80){
    console.log("B");
}
else if(nota >= 70){
    console.log("C");
}
else if(nota >= 60){
    console.log("D");
}
else if(nota >= 50){
    console.log("E");
} else {
    console.log("F");
}

// Parte 8

const numero1 = 44
const numero2 = 57
const numero3 = 69

if(numero1 % 2 === 0|| numero2 % 2 === 0 || numero3 % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}

// Parte 9

const num1 = 19
const num2 = 65
const num3 = 32

if(num1 % 2 === 1|| num2 % 2 === 1 || num3 % 2 === 1){
    console.log(true);
} else {
    console.log(false);
}