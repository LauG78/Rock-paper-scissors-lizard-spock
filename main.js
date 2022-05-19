let userChoice=document.getElementById("user-played");
let pcChoice=document.getElementById("computer-played");

//user buttons

let playerButton="";

    userChoice=document.getElementById("user-played");
    
    document.getElementById("scissors").addEventListener("click",()=>{
        playerButton="scissors";
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("paper").addEventListener("click",()=>{
        playerButton="paper";
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("rock").addEventListener("click",()=>{
        playerButton="rock";
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("lizard").addEventListener("click",()=>{
        playerButton="lizard";
        userChoice.innerHTML="Your choice is: " + playerButton;
    })
    document.getElementById("spock").addEventListener("click",()=>{
        playerButton="spock";
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    
    
    //pc-button   
var computerChoice=""
document.getElementById("computer-button").addEventListener("click", ()=>{
    var choices = ["scissors", "paper", "rock", "lizard", "spock"];
    if(choices.includes(playerButton)){ 
    var computerChoices = Math.floor(Math.random()*5);
    computerChoice=choices[computerChoices];
    console.log(computerChoice);
    pcChoice.innerHTML="Computer's choice is " + computerChoice;}
    else{
        alert ("You choose first")
    }
    winOrLose();
})


//comparision

let win_lose=document.getElementById("win-lose");

function winOrLose(){
let userC=playerButton;
let computerC=computerChoice;
console.log(computerC);
console.log(userC);


if (computerC===userC){
    message = "It's a draw";
}
else if (computerC==="scissors"){
    if (userC==="paper"|| userC==="lizard"){
        message="You lost";
    }
    else {message="You win"}
}
else if (computerC==="paper"){
    if (userC==="rock"|| userC==="spock"){
        message="You lost";
    }
    else {message="You win"}
}
else if (computerC==="rock"){
    if (userC==="lizard"|| userC==="scissors"){
        message="You lost";
    }
    else { message="You win"}
}
else if (computerC==="lizard"){
    if (userC==="spock"|| userC==="paper"){
        message="You lost";
    }
    else {message="You win"}
}
else if (userC==="spock"){
    if (userC==="rock"|| userC==="scissors")
        message="You lost";
    }    
    else if(userC==="lizard"||userC==="paper"){
        message="You win"}
else {message="Result"}        
console.log(message);
let messages=["It's a draw", "You win", "You lost"];
if (messages.includes(message)){
    win_lose.innerHTML=message;
}
else {
    win_lose.innerHTML="Result"
}
}

function reset(){
    document.getElementById(userChoice.innerHTML="Your choice:", pcChoice.innerHTML="Computer's choice:");
}