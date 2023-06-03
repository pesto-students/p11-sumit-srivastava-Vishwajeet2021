// Define API endpoint and access token
const API_ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";
const ACCESS_TOKEN = "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";

// Define DOM elements
const topicInput = document.querySelector("#topic-input");
const generateButton = document.querySelector("#generate-button");
const quotesContainer = document.querySelector("#quotes-container");

// Define event listener for the generate button
generateButton.addEventListener("click", async () => {
  const topic = topicInput.value;
  const quotes = await getQuotes(topic);
  displayQuotes(quotes);
});

// Define function to make API call and get quotes
async function getQuotes(topic) {
  // Construct API request body
  const requestBody = {
    prompt: `Generate 5 quotes about ${topic}`,
    max_tokens: 100,
    n: 5,
    stop: ["\n"],
  };

  // Construct API request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(requestBody),
  };

  // Make API call and parse response
  const response = await fetch(API_ENDPOINT, requestOptions);
  const data = await response.json();
  const quotes = data.choices.map((choice) => choice.text.trim());
  console.log(data)
  return quotes;
}

// Define function to display quotes on the page
function displayQuotes(quotes) {
  quotesContainer.innerHTML = "";
  quotes.forEach((quote) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");
    quoteElement.innerText = quote;
    quotesContainer.appendChild(quoteElement);
  });
}
