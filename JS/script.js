/* 
* creo su html/css gli elementi con cui lavorare
* resetto il container principale ad una situazione di default
* creo tramite js i "quadrati" che andranno a creare la griglia all'interno del container
(farò un ciclo 100 per situazione standard e 81/49 per le difficoltà superiori)
* andrò ad aggiungere ai quadrati generati le classi necessarie (per far vedere il numero corrispondente al quadrato al click e colorare la casella di azzurro)
* inserisco quadrato nel container
* (infine lavorerò sulle altre difficoltà regolando anche il numero e le dimensioni dei quadratini generati)

*/

const container = document.querySelector('.container-custom')

const diffSelector = document.querySelector('.diff-selector')


const startBtn = document.querySelector('.start-btn');

reset(container);


startBtn.addEventListener('click',function(){
  //al click seleziono la difficoltà e la leggo
  let difficulty = diffSelector.value;
  console.log(difficulty);

  //creo vari percorsi per ogni difficoltà

  if(difficulty === 'Select difficulty mode:'){
    alert('SELEZIONA UNA DIFFICOLTA PER PROCEDERE!')
  }else if(difficulty == 1){
    for(let i = 1; i <= 100; i++){
      stampSquare();
    }

  }else if(difficulty == 2){
    alert('difficoltà 2')
  }else{
    alert('difficoltà 3')
  }


})

//FUNZIONI //////////////////////////////////////////////////

//funzioncina per resettare l'innerhtml di un elemento
function reset(whatToReset){
  whatToReset.innerHTML = '';
}
//funzione per stampare i quadrati
function stampSquare(){
  let square = document.createElement('div');
  square.classList.add('square')
  container.append(square);
}