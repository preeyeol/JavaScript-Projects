const questions = [
  {
    question: "Which is the largest animal in the world? ",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "In which country is Mt.EVerest located?",
    answers: [
      { text: "Nepal", correct: true },
      { text: "Pakistan", correct: false },
      { text: "Bhutan", correct: false },
      { text: "China", correct: false },
    ],
  },

  {
    question: "What gas is used to extinguish fires? ",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Oxygen", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world? ",
    answers: [
      { text: "The Vetican City", correct: true },
      { text: "Italy", correct: false },
      { text: "Maldives", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: " What is the largest lake in the world? ",
    answers: [
      { text: "Caspian Sea", correct: false },
      { text: "Lake Superior", correct: false },
      { text: "Baikal", correct: true },
      { text: "Ontario", correct: false },
    ],
  },
  {
    question: "Which planet in the solar system is known as the “Red Planet”?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Pluto", correct: false },
    ],
  },
];

console.log(questions)


const questionElement= document.getElementById("question");
const answerBtn= document.getElementById("answers-btns");
const nextBtn= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
currentQuestionIndex=0;
score=0;
nextBtn.innerHTML="Next";
showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion = questions[currentQuestionIndex];
let questionNo= currentQuestionIndex + 1;
questionElement.innerHTML= questionNo + "." + currentQuestion.question;

currentQuestion.answers.forEach(answer=>{
  const button =document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerBtn.appendChild(button);
  if(answer.correct){
    button.setAttribute("correct",true)
  }
  button.addEventListener("click",selectAnswer)

});

}

function resetState(){
  nextBtn.style.display="none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild)
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
 let isCorrect= selectedBtn.getAttribute("correct")
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++
  } else{ selectedBtn.classList.add("incorrect")}
  Array.from(answerBtn.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct;")
    }
    button.disabled= "true";
  });
  nextBtn.style.display="block"

}

function showScore(){
  resetState();
  questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML= "Play Again!";

  nextBtn.style.display= "block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex< questions.length){
    showQuestion();
  }
  else{ showScore()}
}

nextBtn.addEventListener("click", ()=>{
  if(currentQuestionIndex< questions.length){
    handleNextButton()
  }
})
startQuiz();


