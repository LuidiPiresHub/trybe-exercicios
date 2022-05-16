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