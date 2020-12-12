// dynamicaly run questions through a loop with an array and post to elements in html

const question = document.getElementById( 'question' );
const choices = Array.from( document.getElementsByClassName( 'choice-text' ) );

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [ {
        question: "JavaScript is a ___ - side programming language.",
        choice1: "server",
        choice2: "client",
        choice3: "both",
        choice4: "None",
        answer: 3,

    },
    {
        question: "Which of the following will write the message“ Hello World!” in an alert box ?",
        choice1: "alertBox("
        Hello World!");",
        choice2: "alert("
        Hello World!");",
        choice3: "msgAlert("
        Hello World!");",
        choice4: "alert("
        Hello World!");",
        answer: 4,
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        choice1: "min(x,y);",
        choice2: "Math.min(x,y)",
        choice3: "Math.min(xy)",
        choice4: "min(xy)",
        answer: 2,
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choice1: "catch",
        choice2: "label",
        choice3: "try",
        choice4: "default",
        answer: 4,
    },
    {
        question: "What will the code return? Boolean(3<7)",
        choice1: "true",
        choice2: "false",
        choice3: "NaN",
        choice4: "SyntaxError",
        answer: 1,
    },
];