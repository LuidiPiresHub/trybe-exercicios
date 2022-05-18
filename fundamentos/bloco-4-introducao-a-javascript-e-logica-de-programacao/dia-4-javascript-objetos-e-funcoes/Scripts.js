// ====================
//   Objetos e For/In
// ====================

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

//   Parte 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
 };

  console.log(leitor.nome, leitor.sobrenome);
  console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + "se chama: " + leitor.livrosFavoritos[0].titulo);
  console.log();

  // Parte 7

  console.log(leitor.nome + ' ' + 'tem' + ' ' + leitor.livrosFavoritos.length + ' ' + 'livros favoritos');
  console.log();

  // ===========
  //   Funções
  // ===========

  // Parte 1

  function palíndromo(string) {
    let stringReversa = ''
    for (let i = string.length - 1; i >= 0; i -= 1){
      stringReversa += string[i]
    }
      if (stringReversa === string){
        console.log(true);
      } else {
        console.log(false);
      }
  }

  palíndromo('arara')