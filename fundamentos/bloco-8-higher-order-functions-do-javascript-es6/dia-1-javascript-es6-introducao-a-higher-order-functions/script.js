// Exercício 1

function emailGenerator(fullname) {
    let nome = '';
    for (let letter of fullname.toLowerCase()) {
        if (letter === ' ') {
            nome += '_';
        } else {
            nome += letter;
        }
    }
    return `${nome}@trybe.com`
};
const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
};
// console.log(newEmployees(emailGenerator));

// Exercício 2

const checkNumber = (myNumber, numeroSorteado) => myNumber === numeroSorteado;

const sorteio = (myNumber, callback) => {
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;
    return callback(myNumber, numeroSorteado) ? 'Você ganhou!' : 'Tente novamente!';
};
console.log(sorteio(2,checkNumber));