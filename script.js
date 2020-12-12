// dynamicaly run questions through a loop with an array and post to elements in html

const question = document.getElementById( 'question' );
const choices = Array.from( document.getElementsByClassName( 'choice-text' ) );

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [ {
    question: choice1: choice2: choice3: choice4: answer:
}, ]