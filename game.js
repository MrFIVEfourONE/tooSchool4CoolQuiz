// dynamicaly run questions through a loop with an array and post to elements in html

const question = document.getElementById( "question" );
const choices = Array.from( document.getElementsByClassName( "choiceText" ) );
const questionCounterText = document.getElementById( "questionCounter" );
const scoreText = document.getElementById( "score" );

// let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;

// Time stuff
let timerEl = document.querySelector( '#time-remaining' )
let timerId;
let timeRemaining;

let questions = [ {
        question: "JavaScript is a ___ - side programming language.",
        choice1: "server",
        choice2: "client",
        choice3: "both",
        choice4: "None",
        answer: "3",

    },
    {
        question: "Which of the following will write the message“ Hello World!” in an alert box ?",
        choice1: " alertBox('Hello World!'); ",
        choice2: "alert('Hello World!');",
        choice3: "msgAlert('Hello World!');",
        choice4: "alert('Hello World!');",
        answer: "4",
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        choice1: "min(x,y);",
        choice2: "Math.min(x,y)",
        choice3: "Math.min(xy)",
        choice4: "min(xy)",
        answer: "2",
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        choice1: "catch",
        choice2: "label",
        choice3: "try",
        choice4: "default",
        answer: "4",
    },
    {
        question: "What will the code return? Boolean(3<7)",
        choice1: "true",
        choice2: "false",
        choice3: "NaN",
        choice4: "SyntaxError",
        answer: "1",
    },
];



const startGame = () => {
    questionCounter = 0;
    score = 0;
    timeRemaining = 60;
    timerId = setInterval( timeTick, 1000 );
    getNewQuestion();
};


const getNewQuestion = () => {
    if ( questionCounter >= questions.length ) {
        // call endQuiz function to end quest
    }
    let currentQuestion = questions[ questionCounter ];
    question.innerText = currentQuestion.question;

    choices.forEach( ( choice ) => {
        const number = choice.dataset[ "number" ];
        choice.innerText = currentQuestion[ "choice" + number ];
    } );
    choices.forEach( ( choice ) => {
        choice.addEventListener( "click", ( e ) => {
            e.preventDefault();
            // if ( !acceptingAnswers ) return;
            // console.log( "clicked inside of choices.foreach" )
            // acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset[ "number" ];
            console.log( selectedAnswer, questions[ questionCounter ].answer )
            // added durrign Office Hrs
            if ( selectedAnswer === questions[ questionCounter ].answer ) {
                questionCounter++;
                getNewQuestion();
            } else {
                timeRemaining = timeRemaining - 10;
                questionCounter++
                getNewQuestion();
            }
        } );
    } );
}

function timeTick() {
    timeRemaining--;
    timerEl.textContent = `Time: ${ timeRemaining }`

    if ( timeRemaining <= 0 ) {
        endQuiz();
    }
}


function endQuiz() {
    clearInterval( timerId );
    document.querySelector( ".peekAboo" ).style.display = "none"; //hide
}

startGame()





    // hide the quiz
    // input user name initial;s
    // save to local storage
    // open the highscore page

    // document.getElementById( "id" ).style.display = "block"; //show


// assign id to each of options in dom
// check if user clicked the data-numbr
// onclick listener if data-num === index number that
//  === 3