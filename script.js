// importing El form DOM
const questionTitleEl = document.querySelector("#question-title")

const choiceContainerEl = document.querySelector("#choice-container")

const rightOrWrongEl = document.querySelector( "#right-wrong" )

const timerEl = document.querySelector( "#timer" )

const endGameEL = document.querySelector("#endGame")

// start at first object
let questionIndex = 0;

let timeRemaining = 60;

// "shuffle": {
// 		"prefix": "30s_shuffle",
// 		"body": [
// 			"const shuffle = ([...arr]) => {",
// 			"  let m = arr.length;",
// 			"  while (m) {",
// 			"    const i = Math.floor(Math.random() * m--);",
// 			"    [arr[m], arr[i]] = [arr[i], arr[m]];",
// 			"  }",
// 			"  return arr;",
// 			"};"
// 		],
// 		"description": "Randomizes the order of the values of an array, returning a new array.\n\nUses the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle) to reorder the elements of the array"
// 	},

// array of objects (questions)
const questions = [
{
    title: "what is 1 + 1",
    choices: [1,2,3,4],
    answer: "2"
},
{
    title: "what is 2 + 2",
    choices: [1,2,3,4],
    answer: "4"
}
]

function generateQuestion() {
    // the array of questions is now refered to as currentQuestion
    const currentQuestion = questions[ questionIndex ];
    // append the titleEl with the array.title
    questionTitleEl.textContent = currentQuestion.title

    choiceContainerEl.innerHTML = "";
    currentQuestion.choices.forEach(function(value) {
        let button = document.createElement("button");
        button.setAttribute("class","btnChoice")
        button.setAttribute("value", value)
        button.textContent = value;
        button.onclick = buttonClicked
        choiceContainerEl.appendChild(button)

    })
}

function buttonClicked ()
{
    const correctAnswer = questions[ questionIndex ].answer;
    const userChoice = this.value;
    console.log(userChoice, correctAnswer)
    if ( correctAnswer === userChoice )
    {
        rightOrWrongEl.textContent = "Correct"

    } else
    {
        timeRemaining = timeRemaining - 10
        rightOrWrongEl.textContent = "Wrong Answer"
    }

    questionIndex++

    generateQuestion()
}



function clockTicks ()
{
    timeRemaining--;
    timerEl.textContent = "time: " + timeRemaining;
    if ( timeRemaining <= 0 )
    {
        endQuiz()
    }
}

function endQuiz ()
{
    endGameEL.textContent = "GAMEOVER";
    then
"redirect": {
		"prefix": "30s_redirect",
		"body": [
			"const redirect = (url, asLink = true) =>",
			"  asLink ? (window.location.href = url) : window.location.replace(url);"
		],
		"description": "Redirects to a specified URL.\n\nUse `window.location.href` or `window.location.replace()` to redirect to `url`.\nPass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`)"
	},

    import _curry2 from './internal/_curry2';
import _assertPromise from './internal/_assertPromise';


/**
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b) -> (Promise e a) -> (Promise e b)
 * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
 * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(onSuccess)`
 * @see R.otherwise
 * @example
 *
 *      var makeQuery = (email) => ({ query: { email }});
 *
 *      //getMemberName :: String -> Promise ({firstName, lastName})
 *      var getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *        R.andThen(R.pick(['firstName', 'lastName']))
 *      );
 */
var andThen = _curry2(function andThen(f, p) {
  _assertPromise('andThen', p);

  return p.then(f);
});
export default andThen;


}


function start ()
{
    let timerId = setInterval(clockTicks, 1000)
    generateQuestion()
}

start()
