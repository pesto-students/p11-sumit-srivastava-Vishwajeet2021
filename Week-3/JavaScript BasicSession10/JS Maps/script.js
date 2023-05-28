function calcWordFrequencies() {
    let wordMap = new Map();
  
    // Read input from the user using prompt()
    let input = prompt("Enter a list of words (separated by spaces):");
  
    // Split the input string into individual words
    let words = input.split(" ");
  
    // Loop through each word and update its frequency in the wordMap
    for (let word of words) {
      if (wordMap.has(word)) {
        // Word already exists in the map, increment its frequency
        let frequency = wordMap.get(word);
        wordMap.set(word, frequency + 1);
      } else {
        // Word doesn't exist in the map, add it with frequency 1
        wordMap.set(word, 1);
      }
    }
  
    // Output the words and their frequencies to the console
    for (let [word, frequency] of wordMap) {
      console.log(word, frequency);
    }
  }
  