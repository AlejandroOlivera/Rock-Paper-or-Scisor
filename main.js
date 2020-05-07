const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Error! Type rock, paper or scissors";
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The Game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "User won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "Computer Won";
    } else {
      return "User won";
    }
  }

  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "User won";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  console.log(`You threw: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
