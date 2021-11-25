const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById("game")
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = "user choice: " + userChoice
    generateComputerChoice();
    getResult();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = "computer choice: " + computerChoice;
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
            case 'rockscissors':
                case 'paperrock':
                    resultDisplay.innerHTML = "you win"
            break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                    resultDisplay.innerHTML = "you lost"
                break;
            case 'paperpaper':
            case 'scissorsscissors':
            case 'rockrock':
                    resultDisplay.innerHTML = "it's a draw"
            break;
    }
}