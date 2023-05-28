function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
  
    while (numGuesses < totalGuesses) {
      let userInput = prompt(getPromptText(numGuesses));
      
      if (userInput === null) {
        return 0;
      }
      
      if (isNaN(userInput) || userInput.trim() === '') {
        alert("Please enter a number.");
        continue;
      }
      
      let guess = parseInt(userInput);
  
      if (guess < numToGuess) {
        alert(guess + " is too small. Guess a larger number.");
      } else if (guess > numToGuess) {
        alert(guess + " is too large. Guess a smaller number.");
      } else {
        return numGuesses + 1;
      }
  
      numGuesses++;
    }
  
    return 0;
  }
  
  function getPromptText(numGuesses) {
    if (numGuesses === 0) {
      return "Enter a number between 1 and 100.";
    } else {
      return "Enter another number.";
    }
  }
  