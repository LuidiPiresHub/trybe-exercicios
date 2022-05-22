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
  console.log();

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
        console.log();
      } else {
        console.log(false);
        console.log();
      }
  }

  palíndromo('arara')

  // Parte 2

  function maiorIndice (array) {
    let maiorNumero = 0
    for (let value of array) {
      if (maiorNumero < value) {
        maiorNumero = value
      }
    }
    let maiorIndice = array.indexOf(maiorNumero)
    console.log(maiorIndice);
    console.log();
  }

  maiorIndice([2, 3, 6, 7, 10, 1])

  // Parte 3

function menorIndice(array) {
  let menorIndice = 0
  for (let indice in array) {
    if (array[menorIndice] > array[indice]) {
      menorIndice = indice
    }
  }
  console.log(menorIndice);
  console.log();
}

menorIndice([2, 4, 6, 7, 10, 0, -3])

// Parte 4

function maiorNome(arrayNames) {
  let biggestName = ''
  for (let name of arrayNames) {
    if (biggestName.length < name.length) {
      biggestName = name
    }
  }
  console.log(biggestName);
  console.log();
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// Parte 5

function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
console.log();

// Parte 6

function somatorio(n) {
  let soma = 0
  for (let i = 0; i <= n; i += 1) {
    soma += i 
  }
  return soma
}
console.log(somatorio(5));
console.log();

// Parte 7

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra('trybe', 'be'))