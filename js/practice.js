// practice.js

import { questions }
from "./data/questions.js";

/* =========================
   INIT ICONS
========================= */

// lucide.createIcons();

/* =========================
   STATE
========================= */

let filteredQuestions = [...questions];

let currentQuestionIndex = 0;

let selectedOption = null;

let score = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let attemptedQuestions = 0;

let totalXP = 0;

/* =========================
   DOM ELEMENTS
========================= */

const questionCount =
document.getElementById("question-count");

const questionTitle =
document.getElementById("question-title");

const questionLanguage =
document.getElementById("question-language");

const questionDifficulty =
document.getElementById("question-difficulty");

const questionTopic =
document.getElementById("question-topic");

const questionCode =
document.getElementById("question-code");

const optionsContainer =
document.getElementById("options-container");

const submitBtn =
document.getElementById("submit-btn");

const nextBtn =
document.getElementById("next-btn");

const hintBtn =
document.getElementById("hint-btn");

const explanationBox =
document.getElementById("explanation-box");

const explanationText =
document.getElementById("explanation-text");

/* SIDEBAR */

const solvedCount =
document.getElementById("solved-count");

const attemptedCount =
document.getElementById("attempted-count");

const wrongCount =
document.getElementById("wrong-count");

const accuracyValue =
document.getElementById("accuracy-value");

const progressCircle =
document.getElementById(
  "progress-circle"
);

const xpValue =
document.getElementById("xp-value");

const xpFill =
document.getElementById("xp-fill");

const levelText =
document.getElementById("level-text");

/* RESULT MODAL */

const resultModal =
document.getElementById("result-modal");

const finalScore =
document.getElementById("final-score");

const finalAccuracy =
document.getElementById("final-accuracy");

const finalXP =
document.getElementById("final-xp");

const replayBtn =
document.getElementById("replay-btn");

/* FILTERS */

const languageFilter =
document.getElementById("language-filter");

const difficultyFilter =
document.getElementById("difficulty-filter");

/* LOADER */

const dashboardLoader =
document.getElementById(
  "dashboardLoader"
);

/* =========================
   FILTER QUESTIONS
========================= */

function filterQuestions() {

  const selectedLanguage =
  languageFilter.value;

  const selectedDifficulty =
  difficultyFilter.value;

  filteredQuestions =
  questions.filter(question => {

    const languageMatch =
    selectedLanguage === "All" ||
    question.language === selectedLanguage;

    const difficultyMatch =
    selectedDifficulty === "All" ||
    question.difficulty === selectedDifficulty;

    return (
      languageMatch &&
      difficultyMatch
    );

  });

  resetQuiz(false);
}

/* =========================
   RENDER EMPTY STATE
========================= */

function renderEmptyState() {

  questionCount.textContent =
  "0 Questions";

  questionTitle.textContent =
  "No matching questions found.";

  questionLanguage.textContent =
  "-";

  questionDifficulty.textContent =
  "-";

  questionTopic.textContent =
  "-";

  questionCode.textContent =
  "";

  optionsContainer.innerHTML = `

    <div class="empty-state">

      Try changing filters to load questions.

    </div>

  `;

  explanationBox.classList.add(
    "hidden"
  );

  submitBtn.disabled = true;

  nextBtn.disabled = true;

  hintBtn.disabled = true;
}

/* =========================
   RENDER QUESTION
========================= */

function renderQuestion() {

  if(filteredQuestions.length === 0){

    renderEmptyState();

    return;
  }

  const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  /* RESET */

  selectedOption = null;

  submitBtn.disabled = false;

  nextBtn.disabled = false;

  hintBtn.disabled = false;

  explanationBox.classList.add(
    "hidden"
  );

  /* QUESTION INFO */

  questionCount.textContent =
  `Question ${currentQuestionIndex + 1} / ${filteredQuestions.length}`;

  questionTitle.textContent =
  currentQuestion.question;

  questionLanguage.textContent =
  currentQuestion.language;

  questionDifficulty.textContent =
  currentQuestion.difficulty;

  questionTopic.textContent =
  currentQuestion.topic;

  /* CODE */

  questionCode.textContent =
  currentQuestion.code;

  /* OPTIONS */

  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(
    (option, index) => {

      const button =
      document.createElement("button");

      button.type = "button";

      button.classList.add(
        "option-card"
      );

      button.innerHTML = `

        <div class="option-left">

          <div class="option-radio"></div>

          <span class="option-letter">

            ${String.fromCharCode(65 + index)}

          </span>

        </div>

        <p>${option}</p>

      `;

      /* SELECT OPTION */

      button.addEventListener(
        "click",
        () => {

          if(submitBtn.disabled) return;

          document
            .querySelectorAll(".option-card")
            .forEach(card => {

              card.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

          selectedOption = option;

        }
      );

      optionsContainer.appendChild(
        button
      );

    }
  );

}

/* =========================
   UPDATE STATS
========================= */

function updateStats() {

  solvedCount.textContent =
  correctAnswers;

  attemptedCount.textContent =
  attemptedQuestions;

  wrongCount.textContent =
  wrongAnswers;

  /* ACCURACY */

  let accuracy = 0;

  if(attemptedQuestions > 0){

    accuracy =
    Math.round(
      (correctAnswers / attemptedQuestions)
      * 100
    );

  }

  accuracyValue.textContent =
  `${accuracy}%`;

  progressCircle.style.background =
`
conic-gradient(
  #22C55E 0% ${accuracy}%,
  rgba(255,255,255,0.06) ${accuracy}% 100%
)
`;

  /* XP */

  xpValue.textContent =
  `⭐ ${totalXP} XP`;

  /* LEVEL */

  const level =
  Math.floor(totalXP / 50) + 1;

  levelText.textContent =
  `Level ${level}`;

  /* XP BAR */

  const xpProgress =
  totalXP % 50;

  xpFill.style.width =
  `${(xpProgress / 50) * 100}%`;
}

/* =========================
   SHOW HINT
========================= */

function showHint() {

  const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  alert(
    currentQuestion.hint
  );
}

/* =========================
   SUBMIT ANSWER
========================= */

function submitAnswer() {

  if(!selectedOption){

    alert(
      "Please select an option first."
    );

    return;
  }

  const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  const optionCards =
  document.querySelectorAll(
    ".option-card"
  );

  attemptedQuestions++;

  optionCards.forEach(card => {

    card.classList.add(
      "disabled"
    );

    const optionText =
    card.querySelector("p")
    .textContent;

    /* CORRECT */

    if(
      optionText ===
      currentQuestion.correctAnswer
    ){

      card.classList.add(
        "correct"
      );

    }

    /* WRONG */

    if(
      optionText === selectedOption &&
      selectedOption !==
      currentQuestion.correctAnswer
    ){

      card.classList.add(
        "wrong"
      );

    }

  });

  /* SCORE */

  if(
    selectedOption ===
    currentQuestion.correctAnswer
  ){

    correctAnswers++;

    score++;

    totalXP +=
    currentQuestion.xp;

  } else {

    wrongAnswers++;

  }

  /* EXPLANATION */

  explanationText.textContent =
  currentQuestion.explanation;

  explanationBox.classList.remove(
    "hidden"
  );

  updateStats();

  submitBtn.disabled = true;
}

/* =========================
   SHOW RESULT MODAL
========================= */

function showResultModal() {

  let accuracy = 0;

  if(attemptedQuestions > 0){

    accuracy =
    Math.round(
      (correctAnswers / attemptedQuestions)
      * 100
    );

  }

  finalScore.textContent =
  `${score} / ${filteredQuestions.length}`;

  finalAccuracy.textContent =
  `${accuracy}%`;

  finalXP.textContent =
  `${totalXP} XP`;

  resultModal.classList.remove(
    "hidden"
  );
}

/* =========================
   RESET QUIZ
========================= */

function resetQuiz(render = true) {

  currentQuestionIndex = 0;

  selectedOption = null;

  score = 0;

  correctAnswers = 0;

  wrongAnswers = 0;

  attemptedQuestions = 0;

  totalXP = 0;

  updateStats();

  resultModal.classList.add(
    "hidden"
  );

  if(render){

    renderQuestion();

  }
}

/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

  if(!submitBtn.disabled){

    alert(
      "Please submit your answer first."
    );

    return;
  }

  currentQuestionIndex++;

  /* END */

  if(
    currentQuestionIndex >=
    filteredQuestions.length
  ){

    showResultModal();

    return;
  }

  renderQuestion();
}

/* =========================
   EVENTS
========================= */

submitBtn.addEventListener(
  "click",
  submitAnswer
);

nextBtn.addEventListener(
  "click",
  nextQuestion
);

hintBtn.addEventListener(
  "click",
  showHint
);

replayBtn.addEventListener(
  "click",
  () => {

    resetQuiz();

  }
);

languageFilter.addEventListener(
  "change",
  filterQuestions
);

difficultyFilter.addEventListener(
  "change",
  filterQuestions
);

/* =========================
   INITIAL LOAD
========================= */

window.addEventListener(
  "load",
  () => {

    renderQuestion();

    updateStats();

    lucide.createIcons();

    setTimeout(()=>{

      if(dashboardLoader){

        dashboardLoader.classList.add(
          "hidden"
        );

        setTimeout(()=>{

          dashboardLoader.remove();

        }, 600);
      }

    }, 900);

  }
);