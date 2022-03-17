console.log('JS OK!')


// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
//step by step
//1 generare 16 numeri casuali nello stesso range ( da 1 a totalCells) delle difficoltà scelta
// I numeri nella lista delle bombe non possono essere duplicati.
// creo un array vuoto in cui metterà le posizioni delle 16 bombe 
//prendo una posizione random e verifico che non sia già stata usata. se è libera inserisco la posizione nell'array delle bombe
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
//quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
//quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste



const buttonEasy = document.getElementById('easy');

const buttonMedium = document.getElementById('medium');

const buttonHard = document.getElementById('hard');




buttonEasy.addEventListener('click', ()=> startGame(100, 'easy'));

buttonMedium.addEventListener('click', ()=> startGame(81, 'medium'));


buttonHard.addEventListener('click', ()=> startGame(49, 'hard'));


let contatore = 0;

// stesso nome della funzione createElementsInGrid, ma hanno due valori differenti perchè vivono in due funzioni differenti. Vivono all'interno della funzione.
function startGame (totalCells, className){
   const bombPositions = generateBombs(totalCells);

   //console.log(bombPositions);
   createElementsInGrid(totalCells, className);

   // inserisco una funzione che mi permette di far cambiare il bg delle celle al click
 

   for ( let i=1 ; i<= totalCells; i++){
       
      //console.log(cell);
      let id= 'cell-' + i;
      let cell = document.getElementById(id);
      //console.log(id);
      //console.log(cell);
      cell.addEventListener('click', function(event){
         //console.log(cell);
         const isBomb = bombPositions.includes(i);
          if(isBomb){
             
             endGame(bombPositions, totalCells);
          }else{
// aggiungo +1 ogni volta che si verifica la condizione di !isBomb
             contatore += 1;
             cell.classList.add('disable');
console.log(contatore);
             cell.classList.add('bg-celeste');
//aggiungo un if che va a verificare se il contatore è uguale a (numero di celle - bombposition.length (16)). se la condizione è vera allora l'utente avrà vinto e verrà comunicato il punteggio!
             if(contatore ===(totalCells-bombPositions.length)){
                alert('Hai vinto, hai totalizzato : ' + contatore + 'punti!');
                //disable style css per evitare che si possa cliccare su altri quadrati quando l'utente ha vinto
                cell.classList.toggle('disable');
             }
          }
         
      });
   }
}
// inizio la funzione che detta le condizioni della fine del gioco qualora l'utente perda
function endGame (bombPositions, totalCells){
   for ( let i= 0; i < bombPositions.length; i++){
       //tutte le bombe si colorano di rosso quando l'utente cliccherà su una bomba. Partirà prima un alert che gli comunicherà la sconfitta con il punteggio totale
      let cell = document.getElementById('cell-' + bombPositions[i]);
      cell.classList.add('bg-red');
   }
   alert('Hai perso, hai totalizzato : ' +  contatore + ' punti!');
    
   for ( let i=1 ; i<= totalCells; i++){
      let id= 'cell-' + i;
      let cell = document.getElementById(id);
          //disable style css per evitare che si possa cliccare su altri quadrati quando l'utente ha vinto
      cell.classList.toggle('disable');
      
   }
   
}

// generare 16 numeri casuali da 1 a totalCells
function generateBombs(max){
    const positions = [];
    while(positions.length < 16){
       const position = generateRandomNumber(1 , max);
 
       //i numeri nella lista non possono essere dupicati
       if(!positions.includes(position)){
          positions.push(position);
       }
    }
    return positions;
 
 }

 function generateRandomNumber( min , max ) {
    const range = max - min +1;
    return Math.floor(Math.random()*range) + min;
 }

function createElementsInGrid(totalCells, className){
    const grid = document.getElementById ('grid');
    contatore= 0;
    grid.innerHTML='';
    createCell = () =>{
        const item = document.createElement('div');
        item.className='cell';
        item.classList.add(className);
       
        
        return item;
    }
    
    // creo il for con all'interno la funzione per creare le celle e verifico se funziona
    for(let i = 0; i < totalCells; i++){
    
    
        const cell = createCell();
        
        grid.appendChild(cell);
    
    // inserisco all'interno delle celle i numeri, +1 lo inserisco così da non farlo partire da 0 ma da 1
        cell.innerText = (i +1);
        cell.id = 'cell-' + (i+1);
    
    
    }

}









