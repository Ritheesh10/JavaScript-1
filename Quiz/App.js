const quizData = [
  {
    question: "What is the capital of India?",
    a: "Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",
    correct: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "New York",
    b: "Washington",
    c: "Chicago",
    d: "Los Angeles",
    correct: "b",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Brisbane",
    d: "Perth",
    correct: "a",
  },
  {
    question: "What is the capital of Canada?",
    a: "Ottawa",
    b: "Toronto",
    c: "Vancouver",
    d: "Montreal",
    correct: "a",
  },
  {
    question: "What is the capital of Germany?",
    a: "Berlin",
    b: "Hamburg",
    c: "Munich",
    d: "Frankfurt",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Try Again</button>`;
    }
  }
});
