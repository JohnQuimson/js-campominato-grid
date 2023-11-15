# Griglia Campo Minato

### L'utente clicca su un bottone che genererà una griglia di gioco quadrata Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Il mio approccio è il seguente:

1. Lavoro sull'HTML e sistemo Header, Main e Footer
2. Sistemo con i vari stili css, in modo che la griglia che andrò a creare sarà centrato sia verticalmente che orizzontalmente
3. Con un ciclo for creo 100 div, con la classe .cell, la quale andrà a riempire la griglia con 100 quadratini, i quali saranno numerati da 1 a 100.
4. Con un altro ciclo for, aggiungo un eventListener a ogni .cell e se esso viene cliccato, si colora e stampa in console un messaggio che indica la propria cella
