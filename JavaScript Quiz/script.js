//declare variables using DOM
let startBtn = document.querySelector(".startBtn");
let startDiv = document.querySelector(".startDiv");
let displayContainer = document.querySelector(".displayContainer");
let question = document.querySelector(".question");
let answerDiv = document.querySelector(".answerDiv");
let nextBtn = document.querySelector(".nextBtn");
let previousBtn = document.querySelector(".previousBtn");
let optionBtn = document.getElementsByClassName("optionBtn");
let correctResult = document.querySelector(".correctResult");
let wrongResult = document.querySelector(".wrongResult");
let count = 0;

// Start Btn
startBtn.addEventListener("click", function () {
  startDiv.classList.add("hidden");
  displayContainer.classList.remove("hidden");
  previousBtn.classList.add("hidden");
  qiuzCreator(quizArray[count]);
  checker();
});

// Question & Answer
const quizArray = [
  {
    question: "Which is the most spoken language in the world?",
    options: ["Spanish", "Burmese", "English", "Japan"],
    correct: "English",
  },
  {
    question: "What is the largest animal in the world?",
    options: ["Elephant", "Blue Whale", "Ant", "Dinosaur"],
    correct: "Blue Whale",
  },
  {
    question: "Who invented computer?",
    options: ["Charles Babbage", "Henery Louis", "James Bomb", "Charles Niko"],
    correct: "Charles Babbage",
  },
  {
    question: "How many seconds in a day?",
    options: ["84600", "85300", "65400", "86400"],
    correct: "86400",
  },
  {
    question: "Which country is the largest population in the world?",
    options: ["China", "USA", "India", "Russia"],
    correct: "China",
  },
];

// Quiz creator function
function qiuzCreator(i) {
    question.innerHTML = i.question;
    answerDiv.innerHTML = `
      <button class="optionBtn">${i.options[0]}</button>
      <button class="optionBtn">${i.options[1]}</button>
      <button class="optionBtn">${i.options[2]}</button>
      <button class="optionBtn">${i.options[3]}</button>
      `;
}

//Next Btn
nextBtn.addEventListener("click", function () {
    previousBtn.classList.remove("hidden");
    correctResult.classList.add("hidden");
    wrongResult.classList.add("hidden");
    if (count < 4) {
      count++;
      qiuzCreator(quizArray[count]);
    }
    if (count == 4) {
      nextBtn.classList.add("hidden");
    }
    checker();
});

//Previous Btn
previousBtn.addEventListener("click", function () {
    correctResult.classList.add("hidden");
    wrongResult.classList.add("hidden");
    if (count == 1) {
      previousBtn.classList.add("hidden");
    }
    if (count > 0) {
      count--;
      qiuzCreator(quizArray[count]);
      nextBtn.classList.remove("hidden");
    }
    checker()
});

// Checker Function
function checker() {
    for (let i = 0; i < optionBtn.length; i++) {
      optionBtn[i].addEventListener("click", function () {
        let x = optionBtn[i].innerHTML;
        let ans = quizArray[count].correct;
        if (x == ans) {
          correctResult.classList.remove("hidden");
          wrongResult.classList.add("hidden");
        } else {
          correctResult.classList.add("hidden");
          wrongResult.classList.remove("hidden");
        }
      });
    }
}