// Parte 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, ' + info.personagem)

//   Parte 2

info['recorrente'] = 'sim'
console.log(info);

// Parte 3

for (let key in info) {
    console.log(key);
}