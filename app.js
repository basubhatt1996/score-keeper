const p1button=document.querySelector('#p1button');
const p2button=document.querySelector('#p2button');
const reset=document.querySelector('#reset');
const playto=document.querySelector('#playto');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');

let p1score=0;
let p2score=0;
let winningScore=5;//
let isGameOver=false;

p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1score++;
        if(p1score===winningScore){
            isGameOver=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1button.disabled=true;
            p2button.disabled=true;
        }
    }
    p1display.innerHTML=(p1score);
})

p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2score++;
        if(p2score===winningScore){
            isGameOver=true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            p1button.disabled=true;
            p2button.disabled=true;
        }
    }
    p2display.innerHTML=(p2score);
})
   
 reset.addEventListener('click', function(){
    p1score=0;
    p2score=0;
    isGameOver=false;
    p1display.innerHTML=(p1score);
    p2display.innerHTML=(p2score);
    p1display.classList.remove('winner', 'loser');
    p2display.classList.remove('winner', 'loser');
    p1button.disabled=false;
    p2button.disabled=false;
 })  

 playto.addEventListener('change', function(){
    winningScore=parseInt(this.value) ;
    //reseting the game
    p1score=0;
    p2score=0;
    isGameOver=false;
    p1display.innerHTML=(p1score);
    p2display.innerHTML=(p2score);
    p1display.classList.remove('winner', 'loser');
    p2display.classList.remove('winner', 'loser');
    p1button.disabled=false;
    p2button.disabled=false;
    
 })