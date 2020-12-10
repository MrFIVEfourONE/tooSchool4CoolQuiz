
// const question = document.getElementById("question");
// const choice = Array.from(document.getElementsByClassName("choice-text"));

// let currentQuestion = {};
// let acceptingAnswers = true;



// importing El form DOM
const questionTitleEl = document.querySelector("#question-title")

const choiceContainerEl = document.querySelector("#choice-container")

const rightOrWrongEl = document.querySelector("#right-wrong")

// declare VAR
let questionIndex = 0;

// array of objects
const questions = [
{
    title: "what is 1 + 1",
    choices: [1,2,3,4],
    answer: 2
},
{
    title: "what is 2 + 2",
    choices: [1,2,3,4],
    answer: 4
}
]

function generateQuestion() {
    const currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title
    currentQuestion.choices.forEach(function(value) {
        let button = document.createElement("button");
        button.setAttribute("class","btnChoice")
        button.setAttribute("value", value)
        button.textContent = value;
        button.onclick = buttonClicked
        choiceContainerEl.appendChild(button)

    })
}

function buttonClicked() {

}

function start() {
    generateQuestion()
}

start()


// generate Q function
// validate

// timer funtion

// function to decrease time if wrong answer

// end FNCT