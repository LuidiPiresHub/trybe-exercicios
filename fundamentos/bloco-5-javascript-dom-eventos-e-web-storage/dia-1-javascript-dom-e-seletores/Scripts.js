function euMeVejo() {
    return document.getElementById("future").innerText = "Daqui a 2 anos se Deus quiser já estarei trabalho e poderei ter meu primeiro carrinho!"
}
console.log(euMeVejo());

function corFundo() {
    let backgroundColor = document.getElementsByClassName('main-content')[0]
    return backgroundColor.style.backgroundColor = 'rgb(76,164,109)'
}
console.log(corFundo());

function corCentro() {
    let backgroundColor2 = document.getElementsByClassName('center-content')[0]
    return backgroundColor2.style.backgroundColor = 'white'
}
console.log(corCentro());

function corrige() {
    return document.getElementsByClassName('title')[0].innerText = 'JavaScripit'
}
console.log(corrige());


function paragraphUpperCase() {
    let tagP= document.getElementsByTagName('p');
    for (let i = 0; i < tagP.length; i += 1) {
        tagP.innerText = tagP[i];
        console.log(tagP);
    }
    console.log(paragraph);
    return paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  }
  console.log(paragraphUpperCase());
