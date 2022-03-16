console.log('JS OK!')


// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


//correzione live + bonus

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









