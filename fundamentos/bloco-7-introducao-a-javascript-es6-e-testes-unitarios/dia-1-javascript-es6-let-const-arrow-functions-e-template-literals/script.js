// // Parte 1
// // Exercício 1

// const testingScope = (escopo) => {
//     if (escopo === true) {
//         let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo ! `
//         console.log(ifScope);
//     } else {
//         const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
// }

// testingScope(true);

// // Exercício 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(`Os Numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// // Parte 2
// // Exercício 1

// const fatorial = (number) => {
//     let resultado = number
//     for (let i = number -1; i > 0; i -= 1) {
//         resultado *= i
//     }
//     return resultado
// }
// console.log(fatorial(4));

// // OU

// const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(4));

// // Exercício 2


// const longestWord = (text) => {
//     let array = text.split(' ');
//     let maxLength = 0;
//     let maiorPalavra = '';

//     for (const word of array) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             maiorPalavra = word;
//         }
//     }
//     return maiorPalavra
// }
// console.log(longestWord('o potro deixou de ser potrinho e virou potrão'));

// // OU

// const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu"));

// // Exercício 4

// const span = document.querySelector('#span');
// let contator = 0;

// document.querySelector('#botão').addEventListener('click', () => span.innerText = contator += 1)

// Exercício 5

const phrase = 'Tryber x aqui!';
let newPhrase = '';
const skills = ['Html', 'Css', 'JavaScript', 'Flexbox', 'DOM'];

const switchX = (string) => {
    for (let word of phrase) {
        if (word === 'x') {
            newPhrase += string
        } else {
            newPhrase += word
        }
    }
    return newPhrase
}

console.log(switchX('Luídi'));

const orderSkills = () => {
    skills.sort();
    for (let i = 0; i < skills.length; i += 1) {
        console.log(skills[i]); 
    }
    console.log("#goTrybe");
}
orderSkills()