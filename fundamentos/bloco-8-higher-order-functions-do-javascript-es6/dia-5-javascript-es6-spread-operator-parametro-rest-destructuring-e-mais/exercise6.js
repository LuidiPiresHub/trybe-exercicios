const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const carros = [palio, shelbyCobra, chiron]

// escreva toObject abaixo

const toObject = ([nome, marca, ano]) => ({nome, marca, ano});
console.log((toObject(carros)));