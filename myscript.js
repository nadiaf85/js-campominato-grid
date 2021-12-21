// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella 
//contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.




let scelta = document.getElementById('scelta'); //creo variabile per poterla richiamare
let bottone = document.getElementById('play'); //creo variabile per poterla richiamare


bottone.addEventListener('click', function(){ 
    let livello = document.getElementById('scelta').value;
    let bloccoQuadrati = document.getElementById('blocco-quadrati');
    bloccoQuadrati.innerHTML='';
    if(livello == "easy"){
        for(let i=1; i<=100; i++){
            bloccoQuadrati.innerHTML += '<div class="cella box">'+ i +'</div>';
    }
    }else if (livello == "medium"){
        for(let k=1; k<=81; k++){
            bloccoQuadrati.innerHTML += '<div class="cella box_2">'+ k +'</div>';
    }
    }else if(livello == "hard"){
        for(let j=1; j<=49; j++){
            bloccoQuadrati.innerHTML += '<div class="cella box_3">'+ j +'</div>';
        }
    }

    let cella = document.getElementsByClassName('cella');//aggiungo colore al click
        for(let index=0; index<cella.length; index++){
            cella[index].addEventListener("click", function(){
                messaggio = this.innerHTML
                this.classList.add("azzurro")
            })
        }
});
