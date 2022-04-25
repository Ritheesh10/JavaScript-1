const Root = document.getElementById("root");
let trackOfcall = false;
let isClick = false;
let timingInterval = 0;
let correctAnswer = 0;
let inCorrectAnswer = 0;

let stopTimer;
const question = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Tim Berners-Lee",
    },
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "npx",
    },
    correctAnswer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "ESLint",
  },
  {
    question:
      "What of the following is used in React.js to increase performance?",
    answers: {
      a: "Original DOM",
      b: "Virtual DOM",
      c: "Both A and B",
      d: "None of the above.",
    },
    correctAnswer: "Virtual DOM",
  },
  {
    question: " React.js is written in which of the following language?",
    answers: {
      a: "C",
      b: "C++",
      c: "JavaScript",
      d: "java",
    },
    correctAnswer: "JavaScript",
  },
  {
    question: "what is Bable",
    answers: {
      a: " A JavaScript transpiler",
      b: " A JavaScript interpreter",
      c: " A JavaScript Compiler",
      d: "None of the above",
    },
    correctAnswer: "A JavaScript transpiler",
  },
  {
    question: "In React how the data is passed from one component to other",
    answers: {
      a: "setState",
      b: "render with argument",
      c: "PropsTypes",
      d: "props",
    },
    correctAnswer: "props",
  },
  {
    question:
      "Which of the following API is a MUST for every ReactJS component?",
    answers: {
      a: "getInitialState",
      b: "render",
      c: "renderComponent",
      d: "None of above",
    },
    correctAnswer: "render",
  },
  {
    question: "Which method is not part of ReactDOM?",
    answers: {
      a: "ReactDOM.destroy()",
      b: "ReactDOM.hydrate()",
      c: "ReactDOM.createPortal()",
      d: "ReactDOM.findDOMNode()",
    },
    correctAnswer: "ReactDOM.hydrate()",
  },
  {
    question:
      "At the highest level, React components have lifecycle events that fall into",
    answers: {
      a: "Initialization",
      b: "State/Property Updates",
      c: "Destruction",
      d: "All of these",
    },
    correctAnswer: "All of these",
  },
];
const userResult = Array(question.length).fill("not answered");

let questionCount = 0;
const StartQuiz = (whoTurn) => {
  if (questionCount > question.length - 1) return;
  if (isClick) questionCount++;
  if (questionCount>9) {
    getPiechart();
    return;
  }
  
    document.querySelector(".start-container").style.display ="none";
    let answer = question[questionCount].correctAnswer;
    let ques = question[questionCount].answers;
     Root.innerHTML = "";
  let newDiv = document.createElement("div");
  clearInterval(stopTimer)
  timingInterval = 10;
  stopTimer = setInterval(() => {
    timingInterval--
    if ((questionCount+1>9) && (timingInterval == 0)) {
      clearInterval(stopTimer);
      getPiechart();
    }
    if (timingInterval == 2) {
    document.querySelector(".meter").style.width = `${(0.5 / 10) * 100}%`
      
    }
    document.getElementById("timeDisplay").textContent = timingInterval;
    document.querySelector(".meter").style.width = `${(timingInterval /11.5) * 100}%`
    },1000)
     let string = `<div class="container mt-5 main-block">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="border">
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row justify-content-between align-items-center mcq">
                            <h4>MCQ Quiz</h4><span>${`${questionCount + 1} of ${
                              question.length
                            }`}</span><span id="timeDisplay">${timingInterval}</span>
                        </div>
                    </div>
                    <div class="meter"></div>
                    <div class="question bg-white p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center question-title">
                            <h3 class="text-danger">Q.${questionCount + 1}</h3>
                            <h5 class="mt-1 ml-2">${
                              question[questionCount].question
                            }</h5>
                        </div>
                        <div class="ans ml-2">
                            <label class="radio"> <input type="radio" name=${
                              answer == ques.a
                            } value="brazil"> <span>${ques.a}</span>
                            </label>
                        </div>
                        <div class="ans ml-2">
                            <label class="radio"> <input type="radio" name=${
                              answer == ques.b
                            }> <span>${ques.b}</span>
                            </label>
                        </div>
                        <div class="ans ml-2">
                            <label class="radio"> <input type="radio" name=${
                              answer == ques.c
                            }> <span>${ques.c}</span>
                            </label>
                        </div>
                        <div class="ans ml-2">
                            <label class="radio"> <input type="radio" name=${
                              answer == ques.d
                            }> <span>${ques.d}</span>
                            </label>
                        </div>
                       
                    </div>
                    <div class="d-flex flex-row justify-content-end align-items-center p-3 bg-white"><button class="btn btn-primary border-success align-items-center btn-success" type="button" id="btn-next">Next<i class="fa fa-angle-right ml-2"></i></button></div>
                </div>
            </div>
        </div>
    </div>`;
    newDiv.innerHTML = string;
  Root.appendChild(newDiv);
    answerObserver();
  console.log("question count  : " + questionCount);
  
  (questionCount == 0) && StartTiming();
}
 
document.getElementById("start").addEventListener("click", StartQuiz); 

        
   

function StartTiming() {
  
  console.log("timer is started");
  let interval = setInterval(() => {
    console.log(userResult);
      if (isClick) {
        // StartTiming();
        isClick = false;
        return;
      }
        console.log("waiting"); 
        if(!isClick) questionCount++;
      if (questionCount > question.length - 1) {
          clearInterval(interval);
            console.log("stop");
      }
    StartQuiz();
    
    
  }, 10000)
  
}

function answerObserver(){
    document.querySelectorAll("input[type]").forEach((ele) => {
      ele.addEventListener("click", (e) => { 
        isClick = true;
            if (e.target.name == "true") {
              userResult[questionCount] = "correct"
              correctAnswer++
                console.log(userResult);
            }
            else {
              userResult[questionCount] = "wrong";
              inCorrectAnswer++;
              
            }
            // questionCount++;
        setTimeout(() => {
              
          StartQuiz();
            },400)
        })
    })
  document.getElementById("btn-next").addEventListener("click", () => {
    isClick = true;
    
    setTimeout(() => {
      StartQuiz();
    }, 200);
  })
}
    

        
function getPiechart() {
  Root.innerHTML = `
     <div class="chart-container" style="position: relative; height:40vh; width:80vw">
    <canvas id="myChart" style="width:400px;height:400px;"></canvas>
    
</div>
 
  `;

  
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Correct","Incorrect","Not answered"],
    datasets: [
      {
        label: "# of Votes",
        data: [correctAnswer,inCorrectAnswer,10-(correctAnswer+inCorrectAnswer)],
        backgroundColor: [
          "green",
          "red",
          "white",  
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 40,
          },
        },
      },
    },
  },
});
 
}