let startPage = document.querySelector(".start-page");
let questionsPage = document.querySelector(".questions-page");
let highScoresPage = document.querySelector(".high-scores-page");
let startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function() {
    startPage.setAttribute("style", "display:none");
    questionsPage.removeAttribute("style");
    //start timer here
})

//array of 5 objects
let questions = [
    {
        title: "what color?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },
    {
        title: "what color?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },
    {
        title: "what color?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },
    {
        title: "what color?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },
    {
        title: "what color?",
        answer: "blue",
        choices: ["green", "red", "yellow", "blue"],
    },

];

//need two functions 
    //functin for displyaing fuction that makes the title the question for each question
    //loop through the "choices" array and create a button for each choice. 
    //addEventListener onto each of those buttons to 