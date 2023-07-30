console.log('Hi');

//Have the computer make a choice.
const getComputerChoice = (max = 3) => {

    let numChoice = Math.floor(Math.random() * Math.floor(max));
  
    if (numChoice === 0) {
      return 'rock'
    }
    else if (numChoice === 1){
      return 'paper'
    }
    else return 'scissors'
  }
  

//The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    
    if (userInput === 'rock') {
      return userInput;
    }
    else if (userInput === 'paper') {
      return userInput;
    }
    else if (userInput === 'scissors') {
      return userInput;
    }
    else console.log("Error")
  }
  
//This function will compare the two choices played and then return if the human player won, lost, or tied.
  const determineWinner = (userChoice, computerChoice) => {
  
    if (userChoice === computerChoice) {
      return "TIE"
    }
  
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return "Winner: Computer"
      }
      else if (computerChoice === 'scissors') {
        return "Winner: User"
      }
    }
  
   
    if (userChoice === 'paper'){
      if (computerChoice === 'rock') {
        return "Winner: User"
      }
      else if (computerChoice === 'scissors') {
        return "Winner: Computer"
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock') {
        return "Winner: Computer"
      }
      else if (computerChoice === 'paper') {
        return "Winner: User"
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
  
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()
