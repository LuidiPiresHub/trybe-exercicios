// Parte 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let imprima of numbers){
//     console.log(imprima);
// }   console.log()

// // Parte 2

// for(let num of numbers){
//     let soma = num + num 
//     console.log(soma);
// }   console.log();

// Parte 3
let total = 0 
for(let valores of numbers){
    total = total + valores
}console.log(total / numbers.length);