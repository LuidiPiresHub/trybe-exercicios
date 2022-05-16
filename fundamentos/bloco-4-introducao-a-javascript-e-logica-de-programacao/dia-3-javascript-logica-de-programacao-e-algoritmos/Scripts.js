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

// Parte 4

let maiorNumeroPrimo = 0

for(let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1){
  let = éPrimo = true
  for(let divisor = 2; divisor < numeroAtual; divisor += 1){
    if(numeroAtual % divisor === 0){
      éPrimo = false
    }
  }
  if(éPrimo){
    maiorNumeroPrimo = numeroAtual
  }
}
console.log(maiorNumeroPrimo)
