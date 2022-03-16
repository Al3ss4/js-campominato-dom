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




buttonEasy.addEventListener('click', ()=> createElementsInGrid(100, 'easy'));

buttonMedium.addEventListener('click', ()=> createElementsInGrid(81, 'medium'));


buttonHard.addEventListener('click', ()=> createElementsInGrid(49, 'hard'));



function createElementsInGrid(totalCells, className){
    const grid = document.getElementById ('grid');

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
    
    
    // inserisco una funzione che mi permette di far cambiare il bg delle celle al click
        cell.addEventListener('click', function(event) {
            cell.classList.toggle('bg-celeste')
        })
    }

}









