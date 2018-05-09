// Const game-buttons

const rockButton = document.querySelector("#rock");
rockButton.addEventListener('click',()=>play_round("rock")); // cria evento quando o botão é apertado
const paperButton = document.querySelector("#paper");
paperButton.addEventListener('click',()=>play_round("paper"));
const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener('click',()=>play_round("scissor"));
const newgameButton = document.querySelector("#newgame");
newgameButton.addEventListener('click',()=>newGame());

// Game Status

const pscore = document.getElementById("pscore");
const compscore = document.getElementById("compscore");
const result = document.getElementById("result");
const compchoice=document.getElementById("compchoice");
const roundResult=document.getElementById("roundResult");

// Global variables

let player_score=0;
let computer_score=0;

// Functions

function computer_play() {
    random_gen= Math.floor(Math.random()*3); // generates randomly intenger numbers from 0-2
    if (random_gen ==1){
        compchoice.innerHTML="Computer choice is: rock";
        return "rock";
    } else if (random_gen==2) {
        compchoice.innerHTML="Computer choice is: scissor";
        return "scissor";
    } else {
        compchoice.innerHTML="Computer choice is: paper";
        return "paper";
    }
}

function play_round(player_selection){ // Javascript logical operators => && (AND) || (OR) !(Not)
    if (score()){
    }
    else {
        computer_selection=computer_play();
        if (player_selection=="rock" && computer_selection=="scissor"){
            roundResult.innerHTML="You win! Rock beats scissor";
            player_score++;
        } else if (player_selection=="scissor" && computer_selection=="rock") {
            roundResult.innerHTML="You lose!Rock beats scissor";
            computer_score++;
        } else if (player_selection=="rock" && computer_selection=="paper"){
            roundResult.innerHTML="You lose! Paper beats rock";
            computer_score++;
        } else if (player_selection=="paper" && computer_selection=="rock"){
            roundResult.innerHTML="You win! Paper beats rock";
            player_score++;
        } else if (player_selection=="scissor" && computer_selection=="paper") {
            roundResult.innerHTML="You win! Scissor beats paper";
            player_score++;
        } else if (player_selection=="paper" && computer_selection=="scissor") {
            computer_score++;
            roundResult.innerHTML="You lose! Scissor beats paper";
        } else{
            roundResult.innerHTML="The games is a tie";
        }
        score();
    }
}

function score(){
    pscore.innerHTML = player_score;
    compscore.innerHTML = computer_score;
    if (player_score==5){
        result.innerHTML="Game over! You won";
        return true;
    }
    else if (computer_score==5){
        result.innerHTML="Game over! You lost";
        return true;
    }
    }

function newGame(){
    player_score=0;
    computer_score=0;
    pscore.innerHTML = player_score;
    compscore.innerHTML = computer_score;
    result.innerHTML="";
    compchoice.innerHTML="";
    roundResult.innerHTML="";
}
    // //Simple Test
    // const player_selection="rock";
    // console.log(player_selection);
    // const computer_selection=computer_play();
    // console.log(computer_selection);
    // console.log(play_round(player_selection, computer_selection));

    // document.getElementById("mySubmit").onclick = set_player_selection();
    // console.log(player_selection);
    // const computer_selection=computer_play();
    // console.log(computer_selection);
    // console.log(play_round(player_selection, computer_selection));
