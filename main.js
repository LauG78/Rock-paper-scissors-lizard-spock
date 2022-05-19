let userChoice=document.getElementById("user-played");
let pcChoice=document.getElementById("computer-played");

//user buttons

let playerButton="x";
function playerChoosing(){
    userChoice=document.getElementById("user-played");
    
    document.getElementById("scissors").addEventListener("click",()=>{
        playerButton="scissors";
        alert(playerButton)
        if (playerButton==="scissors"){
        userChoice.innerHTML="Your choice is " + playerButton;
        } else {
        document.getElementById("paper").addEventListener("click",()=>{
            playerButton="paper";
            if (playerButton="paper"){
                userChoice.innerHTML="Your choice is " + playerButton;
            } else {
                document.getElementById("rock").addEventListener("click", ()=>{
                    playerButton="rock";
                    if (playerButton="rock"){
                        userChoice.innerHTML="Your choice is " + playerButton;
                    }
                    else {
                        document.getElementById("lizard").addEventListener("click", ()=>{
                            playerButton="lizard";
                            if (playerButton="lizard"){
                                userChoice.innerHTML="Your choice is " + playerButton;
                            } else {
                                document.getElementById("spock").addEventListener("click", ()=>{
                                    playerButton="spock";
                                    if (playerButton="spock"){
                                        userChoice.innerHTML="Your choice is " + playerButton;
                                    }
                            }
                        )
                   }

    })
    
    }}
    
    )}
    
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
let userC="spock";
let computerC = pcChoice
if (computerC===userC){
    message = "It's a draw";
}
else if (computerC==="scissors"){
    if (userC==="paper"||"lizard"){
        message="You lost";
    }
    else {message="You win"}
}
else if (computerC==="paper"){
    if (userC==="rock"||"spock"){
        message="You lost";
    }
    else {message="You win"}
}
else if (computerC==="rock"){
    if (userC==="lizard"||"scissors"){
        message="You lost";
    }
    else { message="You win"}
}
else if (computerC==="lizard"){
    if (userC==="spock"||"paper"){
        message="You lost";
    }
    else {message="You win"}
}
else if (userC==="scissors"||"rock"){
        message="You lost";
    }    
    else {message="You win"}
console.log(message);
win_lose=message;

function reset(){
    document.getElementById("computer-played","user-played").reset();
}