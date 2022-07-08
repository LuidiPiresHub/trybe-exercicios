const url = 'https://api.coincap.io/v2/assets';
const lista = document.querySelector('#lista')

function CriptoMoedas(amount = 10) {
    fetch(url)
        .then((response) => response.json())
        .then((info) => {
            for (let i = 0; i < amount; i += 1) {
                const li = document.createElement('li');
                li.innerHTML = `${info.data[i].name} (${info.data[i].symbol}) - Valor: ${info.data[i].priceUsd}`;
                lista.appendChild(li);
            };
        })
        .catch((error) => lista.innerText = error);
}

CriptoMoedas()