const data = require('./data');
const { createDeck, countCards } = require('./deck');
const { createRound} = require('./round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start(){
  let deck = createDeck(prototypeQuestions)
  let round = createRound(deck)
  printMessage(deck)
  printQuestion(round)
  
}



module.exports = { printMessage, printQuestion, start };
