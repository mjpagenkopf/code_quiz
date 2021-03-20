const startPage = document.getElementsByClassName("start-page")[0];
const questionsPage = document.getElementsByClassName("questions-page")[0];
const highScoresPage = document.getElementsByClassName("high-scores-page")[0];
let startButton = document.getElementById("start-button");
let timerElement = document.querySelector(".timer-count");
// let timerCard = document.getElementsByClassName("card-timer"); 
let scoreBoard = document.getElementById("score-board");

const questionText = document.getElementsByClassName("question-text")[0];
let answerButton = document.getElementsByClassName("answer-button")[0];

let scoreList = document.getElementById("score-list");
let scoreForm = document.getElementById("score-form");
let scoreText = document.getElementById("score-text");
let scoreCount = document.getElementById("score-count");

let user = document.getElementById("full-name");
let saveButton = document.getElementById("save-btn");

let timer;
let timerCount;
let questionsIndex = 0; 
let currentQuestion;
let currentAnswers;
let finishedQuiz;
let score = 0;
let thisButton; 



//array of 5 objects    questions = ["0", "1", "2", "3", "4"]
let questions = [
    { //think of this as [0]
        title: "What does 'M' stand for in HTML?",
        answer: "Markup",
        choices: ["Mega", "Muted", "Minted", "Markup"],
    },
        
    { //[1]
        title: "this is for question two?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },

    { //[2]
        title: "this is question three?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },

    { //[3]
        title: "This is question four?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },

    { //[4]
        title: "This will be question five?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },

];


startButton.addEventListener("click", function() { 
  startPage.setAttribute("style", "display:none");
  questionsPage.removeAttribute("style", "display:none");
  //start timer here
  timerCount = 100;
  startTimer();
  populateQuestionPage(questionsIndex); //questionsIndex is 0
})


    //REMEMBER: questionsIndex is the parameter idx, which is essentially 0
function populateQuestionPage(idx) {   //idx is a placeholder: AS IN PARAMETERS ARE PLACEHOLDERS - in this case = questionsIndex aka 0
  currentQuestion = questions[idx] //questions[idx] is also currently representing 0
  currentAnswers = questions[idx].choices;
  forQuestionPageArrayTitle(currentQuestion) //currentQuestion = to first object of questions array
  populateAnswerButtons(currentAnswers) 
}


function forQuestionPageArrayTitle(obj) {
  questionText.textContent = obj.title
}


function populateAnswerButtons(arr) { //arr is equal to currentAnswers
    for (let i = 0; i < arr.length; i++) {
        thisButton = document.getElementById(`${i}`) //template literals
        thisButton.textContent = arr[i] //questions[idx].choices->currentAnswers->arr
        thisButton.addEventListener("click", checkAnswerAndSeeIfCorrect) //
    }
  }


function checkAnswerAndSeeIfCorrect(event) {  //e equals the word "event"
    // const answerButtons = document.getElementsByClassName("answer-button") //not being used
      if (event.target.textContent === questions[questionsIndex].answer) {
        score++
        questionsIndex++
        scoreBoard.textContent = "Score: " + score; 
      //   populateQuestionPage(questionsIndex)
      //  if (event.target.textContent !== questions[questionsIndex].answer) 
      //   timerElement.textContent = timerCount - 10;
        populateQuestionPage(questionsIndex);
      // WHAT IS THE EXIT CONDITION?
        if (questionsIndex === 4) {
          clearInterval(timer);
          thisButton.addEventListener("click", function() {
          highScoresPage.removeAttribute("style");
          questionsPage.setAttribute("style", "display:none");
        renderScoreToDOM();
      })
    } 
  }
}

let theScoreVariable = []; 
//this function is trying to create a running list of users as li elements
function renderScoreToDOM() {
    
  // scoreList.innerHTML = ""; //id = "score-list"
  // scoreCount.textContent = "Score: " + score; //id = "score-count"
  
  //for adding new name to li
  for (let i = 0; i < theScoreVariable.length; i++) {
    theScoreVariable = theScoreVariable[i];

    let li = document.createElement("li");
    li.textContent = theScoreVariable;
    li.setAttribute("data-index", i);

   /*  li.appendChild();
    scoreList.appendChild(li); //id = "score-list" */
  }
}

//this function is called below
function init() {
  let storedScores = JSON.parse(localStorage.getItem("theScoreVariable"));
  //if scores are retrieved from localStorage, update the list
  if (storedScores !== null) {
    theScoreVariable = storedScores;
  }

  renderScoreToDOM();
}


function storedScoresFunction() { 
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("Scores", JSON.stringify(theScoreVariable));
}

// let scoreEntryButton = document.getElementById("save-btn");

scoreForm.button.addEventListener("click", function(event) {
event.preventDefault();

let scoreInput = scoreText.value.trim();

if (scoreInput === "") {
  return;
}
  
theScoreVariable.push(scoreInput);
scoreText.value = "";

storedScoresFunction();
renderScoreToDOM();
});

scoreList.addEventListener("click", function(event) {
  let element = event.target;

  if (element.matches("button") === true) {

    let index = element.parent.Element.getAttribute("data-index");
    todos.splice(index, 1);

    storedScoresFunction();
    renderScoreToDOM();
  }
});

init()


//   localStorage.setItem("highScores", JSON.stringify(highScores));
//   window.location.assign("/");
  
// }
// };

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// let recentScore = localStorage.getItem("recentScore")

// const maxHighScore = 5;

// user.addEventListener("keyup", () => {
//   saveButton.disabled = !user.value;
// });



// The setTimer function starts and stops the timer 
function startTimer() {
  // Sets timer
  timer = setInterval (function() {
    timerCount--;
    timerElement.textContent = timerCount;
    // if (timerCount >= 0) {
    //   // Tests if win condition is met
    //   // if (isWin && timerCount > 0) {
    //   // Clears interval and stops timer
    //     clearInterval(timer);
    //     endQuiz();
    //   }
    // }
    // Tests if time has run out
    if (timerCount === 0) {
    //   // Clears interval
      clearInterval(timer);
    //   loseQuiz()
      alert("Take Quiz Again")
      populateQuestionsPage();

    }
  }, 1000);
}
      




// var hasStorage = (function() {
//   try {
//     localStorage.setItem(mod, mod);
//     localStorage.removeItem(mod);
//     return true;
//   } catch (exception) {
//     return false;
//   }
// }());





//will need if statement for when questionsIndex is done instead of it rotating back around to beginning of array
      // for (let i = 0; i < answerButtons.length; i++) {
      //   console.log(answerButtons[i].textContent)
      //   answerbuttons[i].addEventListener("click", function(e) {
      //   e.preventDefault
      // })



// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetQuiz() {
// // Resets win and loss counts
// winCounter = 0;
// loseCounter = 0;
// // Renders win and loss counts and sets them into client storage
// setWins()
// setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetQuiz)




/* Notes from Sam */
// const startButton = document.getElementById("start")
// const startDiv = document.getElementsByClassName("start")[0]
// const quizDiv = document.getElementsByClassName("quiz")[0]
// const questionTitle = document.getElementById("question-title")

// let currentIndex = 0; //loads at initial 

// startButton.addEventListener("click", function()) {
// startDiv.setAttribute("style", "display:none;")
// quizDiv.setAttribute("style", "display:block;")
// populateQuestionDiv(currentIndex)
// });

// function populateQuestionDiv(idx) {          //reserved keywords (idx, obj, arr, str)
//   const currentQuestion = questions[idx]
//   populateQuestionTitle(currentQuestion)
// }

// function populateQuestionTitle(obj) {          //was obj
//   questionTitle.textContent = obj.title
//   populateQuestionDiv.choices)
// }
// //title is entered into question-title

// function populateAnswerButtons(arr) {
//   for (let i = 0; i < arr.length; i++)
//   {
//       const thisButton = document.getElementById(`{i}`)
//       thisButton.textContent = arr[i]
//   }
// }

// function checkAnswerAndSeeIfCorrect() {
//   const answerButtons = document.getElementsByClassName("answer-button")
//   for (let i = 0; i < answerButtons.length; i++) {console.log(answerButtons[i].textContent)answerbuttons[i].addEventListener("click", function(e) {
//     e.preventDefault
//   })
// }
// currentIndex++
// populateQuestionDiv


/* FROM OLDER VERSION */
// let correctAnswer;

// // The startQuiz function is called when the start button is clicked
// function startQuiz() {
//     timerCount = 100;
//     showQuestion = questions[0].title;  //.sort(()) => Math.random() - .5);
//     choiceA = questions[0].choices[0];
//     choiceB = questions[0].choices[1];
//     choiceC = questions[0].choices[2];
//     choiceD = questions[0].choices[3];
//     correctAnswer = questions[0].answer;
//     questionIndex = 0;
//     startTimer()
//     currentQuestion()
// }
    
//   function currentQuestion() {
//     questionText.textContent = showQuestion;
//     firstChoice.textContent = choiceA;
//     secondChoice.textContent = choiceB;
//     thirdChoice.textContent = choiceC;
//     fourthChoice.textContent = choiceD;
//     if (correctAnswer == fourthChoice) {
//       correctAnswer.addEventListener("click", function() {
//       showQuestion = questions[1].title;
//       choiceA = questions[1].choices[0];
//       choiceB = questions[1].choices[1];
//       choiceC = questions[1].choices[2];
//       choiceD = questions[1].choices[3];

//       currentQuestion()
//       })
//     }
// }

  // function chooseAnswer() {
  //   for (let i = 0; i < questions.length; i++) {
  //  nextQuestion();
  // }

//when questions-page displays, function showQuestions should 

// let currentQuestionIndex = 0;

// function questionRenderer(obj) {    //says what will happen declare//
// }

// for (let i = 0; i < questions.length; i++) {
//     questionEL.document.write = questions[0].title;
// }

// questionRenderer(questions[currentQuestionIndex]);

// let result = questionRenderer(questions[0]);

        // console.log("Question: "+obj.title)
        // console.log("Answers: "+ obj.answer)
        // console.log("Options: " + obj.options)

// for (let i = 0; i < questions.length;)

//when question index is over, you have an if statement. show high score

//need two functions 
//function for displaying function that makes the title the question for each question
//loop through the "choices" array and create a button for each choice. 
//addEventListener onto each of those buttons to//


// let array = ["a", "b", "c"];
// let object = {first: "a", second: "b", third: "c"};
// console.log(array[1])
// console.log(object.first)
// //could also write:
// console.log(object["first"])

// really must understand that arrays are looking at items in an Index. Assigns that item is just a number. 
// objects are not like arrays in that sense. it isn't just an indexed number. it is the property, value and more information
