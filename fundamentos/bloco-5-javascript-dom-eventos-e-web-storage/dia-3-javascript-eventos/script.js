function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulList = document.querySelector('#days');
  for (let dias of dezDaysList) {
    let liList = document.createElement('li');
    liList.innerText = dias;
    liList.className = 'day';
    ulList.appendChild(liList);
    if (dias === 24 || dias === 25 || dias === 31) {
      liList.className += ' holiday';
      ulList.appendChild(liList);
    };
    if (dias === 4 || dias === 11 || dias === 18) {
      liList.className += ' friday';
      ulList.appendChild(liList);
    };
    if (dias === 25) {
      liList.className += ' friday';
      ulList.appendChild(liList);
    };
  };
};
createDaysOfMonth();

function createButton(buttonName) {
  let conteinerButton = document.querySelector('.buttons-container');
  let button = document.createElement('Button');
  button.innerHTML = buttonName;
  button.id = 'btn-holiday';
  conteinerButton.appendChild(button);
};
createButton('Feriados');

function clickButton() {
  let holidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let newColor = 'cyan';
  let color = 'rgb(238,238,238)';
  
  holidayButton.addEventListener('click', function () {
    for (let i = 0; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === newColor) {
        getHolidays[i].style.backgroundColor = color;
      } else {
        getHolidays[i].style.backgroundColor = newColor;
      }
    }
  })
}
clickButton();

function createFridayButton(buttonName) {
  let conteinerButton = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerHTML = buttonName;
  button.id = 'btn-friday';
  conteinerButton.appendChild(button);
}
createFridayButton('Sexta-Feira')

function clickFridayButton(fridayArray) {
  let fridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday');
  let fridayText = 'SEXTOUUU!!!';
  
  fridayButton.addEventListener('click', function () {
    for (let i = 0; i < getFridays.length; i += 1) {
      if (getFridays[i].innerHTML !== fridayText) {
        getFridays[i].innerHTML = fridayText;
      } else {
        getFridays[i].innerHTML = fridayArray[i]
      }
    }
  })
};

let SextasFeiras = [4, 11, 18, 25];
clickFridayButton(SextasFeiras);