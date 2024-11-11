let round = 0;
let humanScore = 0;
let computerScore = 0;

const roundInfo = document.getElementById('round-info');
const playerScore = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerChoiceImg = document.getElementById('player-choice-img');
const computerChoiceImg = document.getElementById('computer-choice-img');
const vsText = document.getElementById('vs-text');

const images = {
    rock: './images/Rock.jpeg',
    paper: './images/Paper.jpeg',
    scissors: './images/Scissors.jpeg'
};

function getHumanChoice(button) {
    if (button === rockBtn) return 'rock';
    if (button === paperBtn) return 'paper';
    if (button === scissorsBtn) return 'scissors';
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function capitalizeChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {

	const formattedHumanChoice = capitalizeChoice(humanChoice);
    const formattedComputerChoice = capitalizeChoice(computerChoice);

    if (humanChoice === computerChoice) {
        resultMessage.textContent = `It's a draw! ${formattedHumanChoice} = ${formattedComputerChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultMessage.textContent = `You win! ${formattedHumanChoice} beats ${formattedComputerChoice}`;
    } else {
        computerScore++;
        resultMessage.textContent = `You lose! ${formattedComputerChoice} beats ${formattedHumanChoice}`;
    }
    round++;
    roundInfo.textContent = `Round: ${round}/5`;
    playerScore.textContent = `Player Score: ${humanScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
	playerChoiceImg.src = images[humanChoice];
	computerChoiceImg.src = images[computerChoice];
	playerChoiceImg.style.display = 'inline';
	computerChoiceImg.style.display = 'inline';
	vsText.style.display = 'inline';
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (round >= 5) {
        if (humanScore > computerScore) {
            resultMessage.textContent = `Game Over! You win the game! Final Score: Player: ${humanScore} - Computer: ${computerScore}`;
        } else if (computerScore > humanScore) {
            resultMessage.textContent = `Game Over! You lose the game! Final Score: Player: ${humanScore} - Computer: ${computerScore}`;
        } else {
            resultMessage.textContent = `Game Over! It's a draw! Final Score: Player: ${humanScore} - Computer: ${computerScore}`;
        }
		rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        restartBtn.style.display = 'block';
    }
}

function restartGame() {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    roundInfo.textContent = `Round: 0/5`;
    playerScore.textContent = `Player Score: 0`;
    computerScoreElement.textContent = `Computer Score: 0`;
    resultMessage.textContent = '';
	playerChoiceImg.style.display = 'none';
    computerChoiceImg.style.display = 'none';
    vsText.style.display = 'none';
	rockBtn.disabled = false;
	paperBtn.disabled = false;
	scissorsBtn.disabled = false;
    restartBtn.style.display = 'none';
}


rockBtn.addEventListener('click', () => playGame(getHumanChoice(rockBtn)));
paperBtn.addEventListener('click', () => playGame(getHumanChoice(paperBtn)));
scissorsBtn.addEventListener('click', () => playGame(getHumanChoice(scissorsBtn)));
restartBtn.addEventListener('click', restartGame);
