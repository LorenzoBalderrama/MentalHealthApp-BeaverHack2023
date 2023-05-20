const Elizabot = require('elizabot');
const responses = require('./responses.json');

const eliza = new Elizabot();

// input & output mechanism for the chatbot
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// chatbot logic by capturing user input and passing it to the Elizabot instance and displaying chatbot's response
function chat() {
  rl.question('User: ', (userInput) => {
    let response;

    if (userInput.includes("I'm glad to hear that")) {
      response = getRandomResponse(responses.gladResponses);
    } else if (userInput.includes("I'm sorry to hear that")) {
      response = getRandomResponse(responses.sorryResponses);
    } else if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
      response = getRandomResponse(responses.greetings);
    } else if (userInput.endsWith('?')) {
      response = getRandomResponse(responses.reflectionQuestions);
    } else if (userInput.toLowerCase().includes('thank you') || userInput.toLowerCase().includes('thanks')) {
      response = getRandomResponse(responses.acknowledgments);
    } else if (userInput.toLowerCase().includes('challenge')) {
      response = getRandomResponse(responses.challenges);
    } else if (userInput.toLowerCase().includes('self-care')) {
      response = getRandomResponse(responses.selfCare);
    } else if (userInput.toLowerCase().includes('goal')) {
      response = getRandomResponse(responses.goalSetting);
    } else if (userInput.toLowerCase().includes('boundary')) {
      response = getRandomResponse(responses.boundarySetting);
    } else {
      response = eliza.transform(userInput);
    }

    console.log('Chatbot:', response);
    chat();
  });
}

// Helper function to get a random response from an array
function getRandomResponse(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

chat();
