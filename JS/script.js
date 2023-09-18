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
let difficulty;
let squareNumber;
const startBtn = document.querySelector('.start-btn');

reset(container);
startMessage();


startBtn.addEventListener('click',function(){
  //al click seleziono la difficoltà e la leggo
  difficulty = diffSelector.value;
  console.log(difficulty);

  //creo vari percorsi per ogni difficoltà (ogni IF prima di tutto resetta, poi fa partire un ciclo che ripete stampSquare tot volte)

  if(difficulty === 'Select difficulty mode:'){
    reset(container)
    alert('SELEZIONA UNA DIFFICOLTA PER PROCEDERE!')
    startMessage();
  }else if(difficulty == 1){
    reset(container);
    for(let i = 1; i <= 100; i++){
      squareNumber = i;
      stampSquare('easy');
    }

  }else if(difficulty == 2){
    reset(container);
    for(let i = 1; i <= 81; i++){
      squareNumber = i;
      stampSquare('medium');
    }
  }else{
    reset(container);
    for(let i = 1; i <= 49; i++){
      squareNumber = i;
      stampSquare('hard');
    }
      
  }


})

//FUNZIONI //////////////////////////////////////////////////

//funzioncina per resettare l'innerhtml di un elemento
function reset(whatToReset){
  whatToReset.innerHTML = '';
}
//funzione per stampare i quadrati
function stampSquare(difficultyLevel){
  let square = document.createElement('div');
  square.classList.add('square')
  
  if(difficultyLevel === 'easy'){
    square.classList.add('easy')
  }else if(difficultyLevel === 'medium'){
    square.classList.add('medium')
  }else{
    square.classList.add('hard')
  }

  square.addEventListener('click', function(){
    square.classList.toggle('activeSquare')
  })

  square.innerHTML += `<span> ${squareNumber}</span>
  `
  container.append(square);
}

function startMessage(){
  container.innerHTML += `<h1 id="start-playing">SELEZIONA UNA DIFFICOLTA E COMINCIA A GIOCARE</h1>`
}