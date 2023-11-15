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

const btnPlay = document.querySelector('.btn-play');
