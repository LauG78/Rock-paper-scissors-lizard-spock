let userChoice=document.getElementById("user-played");
let pcChoice=document.getElementById("computer-played");

//user buttons

let playerButton="";
function playerChoosing(){
    userChoice=document.getElementById("user-played");
    
    document.getElementById("scissors").addEventListener("click",()=>{
        playerButton="scissors";
        alert(playerButton)
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("paper").addEventListener("click",()=>{
        playerButton="paper";
        alert(playerButton)
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("rock").addEventListener("click",()=>{
        playerButton="rock";
        alert(playerButton)
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("lizard").addEventListener("click",()=>{
        playerButton="lizard";
        alert(playerButton)
        userChoice.innerHTML="Your choice is " + playerButton;
    })
    document.getElementById("spock").addEventListener("click",()=>{
        playerButton="spock";
        alert(playerButton)
        userChoice.innerHTML="Your choice is " + playerButton;
    })
       
    
    console.log(playerButton);
    userChoice.innerHTML="Your choice is " + playerButton;
    }
    playerChoosing()

    //pc-button
document.getElementById("computer-button").addEventListener("click", ()=>{
    var choices = ["scissors", "paper", "rock", "lizard", "spock"];
    var computerChoices = Math.floor(Math.random()*5);
    computerChoice=choices[computerChoices];
    console.log(computerChoice);
    pcChoice.innerHTML="Computer's choice is " + computerChoice;
})



//comparision

let win_lose=document.getElementById("win-lose");
let userC=userChoice;
let computerC = computerChoice
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
    else {message="You win"}
console.log(message);
win_lose=message;

function reset(){
    document.getElementById("computer-played","user-played").reset();
}