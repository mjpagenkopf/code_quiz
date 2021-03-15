let startPage = document.querySelector(".start-page");
let questionsPage = document.querySelector(".questions-page");
let highScoresPage = document.querySelector(".high-scores-page");
let startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

let questionBox = document.querySelector(".question-box");
let questionText = document.querySelector(".question-text");
let firstChoice = document.querySelector(".first"); //choice a
let secondChoice = document.querySelector(".second"); //choice b
let thirdChoice = document.querySelector(".third"); //choice c
let fourthChoice = document.querySelector(".fourth"); //choice d
let answerButton = document.querySelector(".box");

let showQuestion;
let questionIndex;
let choiceA;
let choiceB;
let choiceC;
let choiceD;

let timer;
let timerCount;

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

let correctAnswer;

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    timerCount = 100;
    showQuestion = questions[0].title;  //.sort(()) => Math.random() - .5);
    choiceA = questions[0].choices[0];
    choiceB = questions[0].choices[1];
    choiceC = questions[0].choices[2];
    choiceD = questions[0].choices[3];
    correctAnswer = questions[0].answer;
    questionIndex = 0;
    startTimer()
    currentQuestion()
}
    
  function currentQuestion() {
    questionText.textContent = showQuestion;
    firstChoice.textContent = choiceA;
    secondChoice.textContent = choiceB;
    thirdChoice.textContent = choiceC;
    fourthChoice.textContent = choiceD;
    chooseAnswer();
  }

  function chooseAnswer() {
   if (correctAnswer === fourthChoice)
   nextQuestion();
  }






// The setTimer function starts and stops the timer and triggers winQuiz() and loseQuiz()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winQuiz();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseQuiz();
      }
    }, 1000);
  }


startButton.addEventListener("click", function() {
    startPage.setAttribute("style", "display:none");
    questionsPage.removeAttribute("style");
    //start timer here
})

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetQuiz);








//when questions-page displays, function showQuestions should 


// for (currentQuestionIndex in questions) {
//       questionEl = document.createElement("li");
//       questionEl.innerHTML = `Question: ${questions[currentQuestionIndex].title}`;
//     //   stuffList.append(listItem);
//     // }











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
// objects are not like arrays in that sense. it isn't just an indexed number. it is the property, value and more information//