
// Begin round, humanScore and ComputerSore start with 0
let round=0;
let humanScore = 0;
let computerScore = 0;

//computerChoice function
function getComputerChoice(){
	const select = ['Rock','Paper','Scissors'];
	const random = Math.floor(Math.random() * select.length);
	return select[random].toLowerCase();
	}

//humanChoice function
function getHumanChoice(){
let humanSelect;
const validChoices = ['rock', 'paper', 'scissors'];
	do{
		humanSelect = prompt(`Rock,Paper or Scissors?`).toLowerCase();
		if (!validChoices.includes(humanSelect)) {
		alert(`
			${humanSelect} is Invalid! 
			Please select Rock, Paper, or Scissors.`);
		}
	}while (!validChoices.includes(humanSelect));
return humanSelect;
}


//playRound  function
function playRound(humanChoice, computerChoice) {
	if(humanChoice===computerChoice){
		round++
		alert(`
			Draw! 
			${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} = ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} 
			Player Score: ${humanScore} 
			Computer Score: ${computerScore} 
			Round: ${round}/5`);
	}else if(
		    (humanChoice==='rock' && computerChoice === 'scissors')||
			(humanChoice==='paper' && computerChoice === 'rock')||
			(humanChoice==='scissors' && computerChoice === 'paper')
		){
		humanScore++;
		round++
		alert(`
			You Win! 
			${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}! 
			Player Score: ${humanScore} 
			Computer Score: ${computerScore} 
			Round: ${round}/5`);
	}else{
		computerScore++;
		round ++
		alert(`
			You Lose! 
			${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)}! 
			Player Score: ${humanScore} 
			Computer Score: ${computerScore} 
			Round: ${round}/5`);
	}};


//playGame function
function playGame(){

	round=0;
	humanScore = 0;
	computerScore = 0;


	while(round<5){
		const computerSelection = getComputerChoice();
		const humanSelection = getHumanChoice();
		playRound(humanSelection,computerSelection);
}
if(humanScore>computerScore){
	alert(`
		Game Over! 
		You Win the Game!
		Final Score: Player: ${humanScore} - Computer: ${computerScore}`)
}else if(computerScore>humanScore){
	alert(`
		Game Over! 
		You Lose the Game!
		Final Score: Player: ${humanScore} - Computer: ${computerScore}`)
}else{
	alert(`
		Game Over! 
		It's a Draw!
		Final Score: Player: ${humanScore} - Computer: ${computerScore}`)
}
}



function restartGame() {
    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame();
    } else {
        alert("Thanks for playing!");
    }
}

do {
    playGame();
} while (confirm("Do you want to play again?"));




