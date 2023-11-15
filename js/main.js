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

//estraggo il bottone e il div in cui ci sono l'img e testo iniziale
const btnPlay = document.querySelector('.btn-play');
const initialMain = document.querySelector('.initial-main');

//Estrapolo il selettore di difficolta, per poi prenderne il valore
const selectDifficolta = document.getElementById('select-difficolta');

//Aggiungo un eventListener al bottone in caso di click
btnPlay.addEventListener('click', function () {
  // Prendo il valore
  const valoreSelezionato = selectDifficolta.value;

  //Nascondo l'immagine iniziale
  initialMain.classList.add('hidden');
  //Mostro la tabella
  board.classList.remove('hidden');
  board.classList.add('show');

  //Ogni volta che faccio 'click', elimino tutto il contenuto in .board
  board.innerHTML = '';

  /* 
  ----------
  FACILE
  ----------
  */
  if (valoreSelezionato === 'facile') {
    /*CICLO FOR CHE RIPRENDE LA FUNZIONE PER CREARE 100 ELEMENTI */
    for (let i = 1; i <= 100; i++) {
      const myElement = myCreateElement('div', 'cell-facile', i);
      board.append(myElement);
    }
    /* COLORO LE CELLE */
    //estraggo il node list con tutti gli elementi con classe .cell
    const domCelle = document.querySelectorAll('.cell-facile');

    //Assegno a ogni elemento del node list, un eventListener. che in caso di click aggiunge la classe active-cell
    for (let j = 0; j < domCelle.length; j++) {
      domCelle[j].addEventListener('click', function () {
        console.log(`Hai selezionato la cella: ${j + 1}`);
        domCelle[j].classList.add('active-cell');
      });
    }
    console.log('Difficoltà: Facile');
    /* 
    ----------
    NORMALE
    ----------
    */
  } else if (valoreSelezionato === 'normale') {
    /*CICLO FOR CHE RIPRENDE LA FUNZIONE PER CREARE 81 ELEMENTI */
    for (let i = 1; i <= 81; i++) {
      const myElement = myCreateElement('div', 'cell-normale', i);
      board.append(myElement);
    }
    /* COLORO LE CELLE */
    //estraggo il node list con tutti gli elementi con classe .cell
    const domCelle = document.querySelectorAll('.cell-normale');

    //Assegno a ogni elemento del node list, un eventListener. che in caso di click aggiunge la classe active-cell
    for (let j = 0; j < domCelle.length; j++) {
      domCelle[j].addEventListener('click', function () {
        console.log(`Hai selezionato la cella: ${j + 1}`);
        domCelle[j].classList.add('active-cell');
      });
    }
    console.log('Difficoltà: Normale');
    /* 
    ----------
    DIFFICILE
    ----------
    */
  } else {
    /*CICLO FOR CHE RIPRENDE LA FUNZIONE PER CREARE 49 ELEMENTI */
    for (let i = 1; i <= 49; i++) {
      const myElement = myCreateElement('div', 'cell-difficile', i);
      board.append(myElement);
    }
    /* COLORO LE CELLE */
    //estraggo il node list con tutti gli elementi con classe .cell
    const domCelle = document.querySelectorAll('.cell-difficile');

    //Assegno a ogni elemento del node list, un eventListener. che in caso di click aggiunge la classe active-cell
    for (let j = 0; j < domCelle.length; j++) {
      domCelle[j].addEventListener('click', function () {
        console.log(`Hai selezionato la cella: ${j + 1}`);
        domCelle[j].classList.add('active-cell');
      });
    }
    console.log('Difficoltà: Difficile');
  }
});
