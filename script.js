const player0A=document.querySelector('.player_0');
const player1A=document.querySelector('.player_1');

const score0A=document.getElementById('score_0');
const score1A=document.getElementById('score_1');

const current0A=document.getElementById('current_0');
const current1A=document.getElementById('current_1');

const dice=document.querySelector('.dice');

const btn_new=document.querySelector('.btn_new')
const btn_hold=document.querySelector('.btn_hold');
const btn_roll=document.querySelector('.btn_roll')

//initial state
let scores,curentScore,activePlayer,game;
function initial_state() {
    scores=(0,0);
    curentScore=0;
    activePlayer=0;
    game=true;

    score0A.textContent=0;
    score1A.textContent=0;
    current0A.textContent=0;
    current1A.textContent=0;

    dice.classList.add('hiden');
    player0A.classList.remove('player_winner')
    player1A.classList.remove('player_winner')
    player0A.classList.add('player_active')
    player1A.classList.remove('player_active')
}
initial_state();