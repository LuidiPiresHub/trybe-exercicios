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
console.log(newEmployees(emailGenerator));

// Exercício 2

const checkNumber = (myNumber, numeroSorteado) => myNumber === numeroSorteado;

const sorteio = (myNumber, callback) => {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  return callback(myNumber, numeroSorteado) ? 'Você ganhou!' : 'Tente novamente!';
};
console.log(sorteio(2,checkNumber));

// Exercícios 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
if (rightAnswer === studentAnswer) {
  return 1;
} if (studentAnswer === 'N.A') {
  return 0;
}
return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
let contador = 0;
for (let index = 0; index < rightAnswers.length; index += 1) {
  const actionReturn = action(rightAnswers[index], studentAnswers[index]);
  contador += actionReturn;
}
return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));