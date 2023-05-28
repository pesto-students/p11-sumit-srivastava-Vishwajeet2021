// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    return celsius * (9/5) + 32;
  }
  
  // Convert Fahrenheit to Celsius
  function convertFtoC(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
  }
  
  // Function to handle the Convert button click event
  function handleConvertButtonClick() {
    const cInput = document.getElementById('cInput');
    const fInput = document.getElementById('fInput');
    const errorMessage = document.getElementById('errorMessage');
    const weatherImage = document.getElementById('weatherImage');
  
    if (cInput.value !== '') {
      // Convert Celsius to Fahrenheit
      const celsius = parseFloat(cInput.value);
      if (!isNaN(celsius)) {
        const fahrenheit = convertCtoF(celsius);
        fInput.value = fahrenheit.toFixed(2);
        errorMessage.innerHTML = '';
        weatherImage.src = 'warm.png';
      } else {
        errorMessage.innerHTML = cInput.value + ' is not a number';
      }
    } else if (fInput.value !== '') {
      // Convert Fahrenheit to Celsius
      const fahrenheit = parseFloat(fInput.value);
      if (!isNaN(fahrenheit)) {
        const celsius = convertFtoC(fahrenheit);
        cInput.value = celsius.toFixed(2);
        errorMessage.innerHTML = '';
        weatherImage.src = 'cold.png';
      } else {
        errorMessage.innerHTML = fInput.value + ' is not a number';
      }
    }
  }
  
  // Function to handle input event for Celsius text field
  function handleCelsiusInput() {
    const cInput = document.getElementById('cInput');
    const fInput = document.getElementById('fInput');
    
    fInput.value = ''; // Clear Fahrenheit text field
  }
  
  // Function to handle input event for Fahrenheit text field
  function handleFahrenheitInput() {
    const cInput = document.getElementById('cInput');
    const fInput = document.getElementById('fInput');
    
    cInput.value = ''; // Clear Celsius text field
  }
  
  // Function to be called when the DOM finishes loading
  function domLoaded() {
    const convertButton = document.getElementById('convertButton');
    const cInput = document.getElementById('cInput');
    const fInput = document.getElementById('fInput');
  
    // Register click event handler for the Convert button
    convertButton.addEventListener('click', handleConvertButtonClick);
  
    // Register input event handlers for Celsius and Fahrenheit text fields
    cInput.addEventListener('input', handleCelsiusInput);
    fInput.addEventListener('input', handleFahrenheitInput);
  }
  
  // Call domLoaded() when the DOM finishes loading
  document.addEventListener('DOMContentLoaded', domLoaded);
  