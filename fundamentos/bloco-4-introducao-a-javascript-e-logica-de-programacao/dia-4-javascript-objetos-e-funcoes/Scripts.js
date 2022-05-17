// Parte 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

//   Parte 2

info['recorrente'] = 'Sim'
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

// Parte 5

for (let val in info) {
    if (
      val === 'recorrente' &&
      info[val] === 'Sim' &&
      info2[val] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[val] + ' e ' + info2[val]);
    }
  }