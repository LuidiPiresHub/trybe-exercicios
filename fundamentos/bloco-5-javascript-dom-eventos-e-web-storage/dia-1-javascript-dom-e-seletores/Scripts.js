function euMeVejo() {
    document.getElementById("future").innerText = "Daqui a 2 anos se Deus quiser já estarei trabalho e poderei ter meu primeiro carrinho!"
}
console.log(euMeVejo());

function corFundo() {
    let backgroundColor = document.getElementsByClassName('main-content')[0]
    backgroundColor.style.backgroundColor = 'rgb(76,164,109)'
}
console.log(corFundo());

function corCentro() {
    let backgroundColor2 = document.getElementsByClassName('center-content')[0]
    backgroundColor2.style.backgroundColor = 'white'
}
console.log(corCentro());

function corrige() {
    document.getElementsByClassName('title')[0].innerText = 'JavaScripit'
}
console.log(corrige());


function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  }
  console.log(paragraphUpperCase());
