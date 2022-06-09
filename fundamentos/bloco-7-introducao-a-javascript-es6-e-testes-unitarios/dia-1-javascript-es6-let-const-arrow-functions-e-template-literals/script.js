// Parte 1
// Exercício 1

const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} ótimo, fui utilizada no escopo ! `
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os Numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte 2
// Exercício 1

const fatorial = (number) => {
    let resultado = number
    for (let i = number -1; i > 0; i -= 1) {
        resultado *= i
    }
    return resultado
}
console.log(fatorial(4));

// OU

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));

// Exercício 2


const longestWord = (text) => {
    let array = text.split(' ');
    let maxLength = 0;
    let maiorPalavra = '';

    for (let word of array) {
        if (word.length > maxLength) {
            maxLength = word.length;
            maiorPalavra = word;
        }
    }
    return maiorPalavra
}
console.log(longestWord('o potro deixou de ser potrindo e virou potrão'));