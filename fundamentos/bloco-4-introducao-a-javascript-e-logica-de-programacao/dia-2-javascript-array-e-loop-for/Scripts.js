// Parte 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let imprima of numbers){
    console.log(imprima);
}   console.log()

// Parte 2

for(let num of numbers){
    let soma = num + num 
    console.log(soma);
}   console.log();

// Parte 3

let total = 0 
for(let valores of numbers){
    total = total + valores
}
console.log(total / numbers.length);
console.log();

// Parte 4

let total2 = 0 
for(let valores of numbers){
    total = total + valores
}
let resultado = total2 / numbers.length
if(resultado > 20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
console.log();

// Parte 5

let valor3 = 0

for(let maiorValor of numbers){
    if(valor3 < maiorValor){
        valor3 = maiorValor
    }
}
console.log(valor3);
console.log();