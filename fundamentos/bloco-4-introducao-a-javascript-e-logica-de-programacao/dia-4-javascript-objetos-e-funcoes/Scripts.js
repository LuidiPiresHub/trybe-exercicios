// Parte 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, ' + info.personagem)
  console.log();

//   Parte 2

info['recorrente'] = 'sim'
console.log(info);
console.log();

// Parte 3

for (let key in info) {
    console.log(key);
}
console.log();

// Parte 4

for (let val in info) {
    console.log(info[val]);
}
console.log();