// Parte 1

let num = 10

let fat = 1
for(let i = 1; i <= num; i += 1){
  fat = fat * i
}
console.log(fat)

// Parte 2

let word = 'Tryber';

for(let i = word.length - 1; i > -1; i -= 1){
  console.log(word[i])
}

// Parte 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = ''
for(let word of array){
  if(word.length > maiorPalavra.length){
    maiorPalavra = word
  }
}
console.log(maiorPalavra)

let menorPalavra = maiorPalavra
for(let word of array){
  if(word.length <= menorPalavra.length){
    menorPalavra = word
  }
}
console.log(menorPalavra)