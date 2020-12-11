// importing El form DOM
const containerEl = document.querySelector( "#container" );
const questionContainerEl = document.querySelector( "#questionContainer" );
const gameCardEl = document.querySelector( "#gameCard" );
const questionTitleEl = document.querySelector( "#questionTitle" );
const choiceContainerEl = document.querySelector( "#choiceContainer" );
const rightOrWrongEl = document.querySelector( "#rightWrong" );
const timerEl = document.querySelector( "#timer" );
const highScoreEl = document.querySelector( "#highScore" );
const endGameEL = document.querySelector( "#endGame" );
// let leaderList = document.querySelector( "#leaderBoards" );
let leaderboard = [];
let questionIndex = 0;
let timeRemaining = 60;

function startGame() {
    start.style.display = "block";
    let button = document.createElement( "button" );
    button.setAttribute( "class", "btn" )
    button.click( startQuiz() )
    quiz.style.display = "none"
}

// start quiz
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    timeRemaining = startTimer( 60, display );
    timeRemaining--;
    timerEl.textContent = "time: " + timeRemaining;
    if ( timeRemaining <= 0 ) {
        endQuiz();
    }
    1000
};

const questions = [ {
        title: "what is 1 + 1",
        choices: [ 1, 2, 3, 4 ],
        answer: "2"
    },
    {
        title: "what is 2 + 2",
        choices: [ 1, 2, 3, 4 ],
        answer: "4"
    }
]


function generateQuestion() {
    // the array of questions is now refered to as currentQuestion
    const currentQuestion = questions[ questionIndex ];
    // append the titleEl with the array.title
    questionTitleEl.textContent = currentQuestion.title

    choiceContainerEl.innerHTML = "";
    currentQuestion.choices.forEach( function ( value ) {
        let button = document.createElement( "button" );
        button.setAttribute( "class", "btn" )
        button.setAttribute( "value", value )
        button.textContent = value;
        button.onclick = buttonClicked()
        choiceContainerEl.appendChild( button )

    } )
}

function buttonClicked() {
    const correctAnswer = questions[ questionIndex ].answer;
    const userChoice = this.value;
    console.log( userChoice, correctAnswer )
    if ( correctAnswer === userChoice ) {
        rightOrWrongEl.textContent = "Correct"

    } else {
        timeRemaining = timeRemaining - 10
        rightOrWrongEl.textContent = "Wrong Answer"
    }

    questionIndex++

    generateQuestion()
}



// score render
function scoreRender() {
    const scorePerCent = Math.round( 100 * score / questions.length );
    var userName = prompt( "Enter your name for the leaderboard." );

    leaderboard = JSON.parse( localStorage.getItem( "leaderboard" ) );
    if ( !leaderboard ) {
        leaderboard = [];
    }

    leaderboard.push( {
        name: userName,
        score: scorePerCent
    } );

    leaderboard.sort( function ( a, b ) {
        return b.score - a.score;
    } );

    for ( var i = 0; i < leaderboard.length; i++ ) {
        var player = leaderboard[ i ].name + ": " + leaderboard[ i ].score + "%";

        var li = document.createElement( "li" );
        li.textContent = player;
        leaderList.appendChild( li );
    }

    restart.addEventListener( "click", function () {
        start();
    } )

    localStorage.setItem( "leaderboard", JSON.stringify( leaderboard ) );
};

function clockTicks() {


    function endQuiz() {
        endGameEL.textContent = "GAMEOVER";
        prompt( "New High Score n/(Not really you did horrible)" );
    };