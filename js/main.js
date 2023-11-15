'use strict';

//Funzione che crea gli elementi
function myCreateElement(tag, className, content) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.append(content);
  return element;
}

//Estrapolo il contenitore con class .board
const board = document.querySelector('.board');

//Ciclo for che riprende la funzione per creare 100 elementi
for (let i = 1; i <= 100; i++) {
  const myElement = myCreateElement('div', 'cell', i);
  board.append(myElement);
}

//estraggo il bottone e il div in cui ci sono l'img e testo iniziale
const btnPlay = document.querySelector('.btn-play');
const initialMain = document.querySelector('.initial-main');

btnPlay.addEventListener('click', function () {
  //Nascondo l'immagine iniziale
  initialMain.classList.add('hidden');
  //Mostro la tabella
  board.classList.remove('hidden');
  board.classList.add('show');
});

const domCelle = document.querySelectorAll('.cell');

for (let j = 0; j < domCelle.length; j++) {
  domCelle[j].addEventListener('click', function () {
    console.log(`Hai selezionato la cella: ${j + 1}`);
    domCelle[j].classList.add('active-cell');
  });
}
