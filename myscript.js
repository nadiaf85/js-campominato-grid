// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella 
//contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.




let scelta = document.getElementById('scelta');
let bottone = document.getElementById('play');


bottone.addEventListener('click', function(){
    let livello = document.getElementById('scelta').value;
    let bloccoQuadrati = document.getElementById('blocco-quadrati');
    bloccoQuadrati.innerHTML='';
    if(livello == "1"){
        for(let i=0; i<100; i++){
            bloccoQuadrati.innerHTML += '<div class="box"></div>';
    }
    }else if (livello == "2"){
        for(let k=0; k<81; k++){
            bloccoQuadrati.innerHTML += '<div class="box2"></div>';
    }
    }else if(livello == "3"){
        for(let j=0; j<49; j++){
            bloccoQuadrati.innerHTML += '<div class="box3"></div>';
        }
    }
});
