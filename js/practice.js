/* practice.js */

import { questions }
from "./data/questions.js";

import {

    calculateAccuracy,
    calculateLevel,
    calculateXPProgress

}
from "./utils/scoring.js";

import {

  auth,

  onAuthStateChanged

}
from "./firebase.js";

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

let overallCorrectAnswers = 0;

let overallWrongAnswers = 0;

let overallAttempts = 0;

let overallXP = 0;

let shuffleMode = false;

let currentUser = null;

/* =========================
   GET USER STORAGE KEY
========================= */

function getStorageKey(){

  if(!currentUser){

    return null;
  }

  return `debugArenaQuizState_${currentUser.uid}`;
}

// /* =========================
//    LOCAL STORAGE KEY
// ========================= */

// const QUIZ_STORAGE_KEY =
// "debugArenaQuizState";

/* =========================
   DOM ELEMENTS
========================= */

const questionCount =
document.getElementById("question-count");

const questionTitle =
document.getElementById("question-title");

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

/* MCQ + SYNTAX */

const mcqSection =
document.getElementById("mcq-section");

const syntaxSection =
document.getElementById("syntax-section");

// const syntaxAnswer =
// document.getElementById("syntax-answer");

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

const questionTypeFilter =
document.getElementById(
  "question-type-filter"
);

const shuffleToggle =
document.getElementById(
  "shuffle-toggle"
);

/* LOADER */

const dashboardLoader =
document.getElementById(
  "dashboardLoader"
);

const menuToggle =
document.getElementById(
  "menu-toggle"
);

const navDrawer =
document.getElementById(
  "nav-drawer"
);

const profileAvatar =
document.getElementById(
  "profile-avatar"
);

/* =========================
   CODEMIRROR
========================= */

const editor =
CodeMirror(

  document.getElementById(
    "editor"
  ),

  {

    mode:"text/x-csrc",

    theme:"material-darker",

    lineNumbers:false,

    autoCloseBrackets:true,

    inputStyle:"contenteditable",

    lineWrapping:true,

    tabSize:2,

    indentUnit:2,

    value:""

  }
);

const editorWrapper =
document.getElementById(
  "editor"
);

/* =========================
   TOAST
========================= */

let toastTimeout;

function showToast(message){

  const toast =
  document.getElementById(
    "toast"
  );

  clearTimeout(
    toastTimeout
  );

  toast.textContent =
  message;

  toast.classList.add(
    "show"
  );

  toastTimeout =
  setTimeout(()=>{

    toast.classList.remove(
      "show"
    );

  }, 3000);
}

/* =========================
   SHUFFLE ARRAY
========================= */

function shuffleArray(array){

  const shuffled = [...array];

  for(
    let i = shuffled.length - 1;
    i > 0;
    i--
  ){

    const j =
    Math.floor(
      Math.random() * (i + 1)
    );

    [
      shuffled[i],
      shuffled[j]
    ] = [
      shuffled[j],
      shuffled[i]
    ];
  }

  return shuffled;
}

/* =========================
   SAVE QUIZ STATE
========================= */

function saveQuizState(){

  const quizState = {

    currentQuestionIndex,

    score,

    correctAnswers:
overallCorrectAnswers,

wrongAnswers:
overallWrongAnswers,

attemptedQuestions:
overallAttempts,

totalXP:
overallXP,

    shuffleMode,

    accuracy:
calculateAccuracy(
    overallCorrectAnswers,
    overallAttempts
),

level:
calculateLevel(overallXP),

    selectedLanguage:
    languageFilter.value,

    selectedDifficulty:
    difficultyFilter.value,

    selectedQuestionType:
    questionTypeFilter.value

  };

  const storageKey =
getStorageKey();

if(!storageKey){
  return;
}

localStorage.setItem(

  storageKey,

  JSON.stringify(quizState)

);
}

/* =========================
   LOAD QUIZ STATE
========================= */

function loadQuizState(){

  const storageKey =
getStorageKey();

if(!storageKey){
  return;
}

const savedState =
localStorage.getItem(
  storageKey
);

  if(!savedState){
    return;
  }

  const parsedState =
  JSON.parse(savedState);

  currentQuestionIndex =
  parsedState.currentQuestionIndex || 0;

  score =
  parsedState.score || 0;

  overallCorrectAnswers =
parsedState.correctAnswers || 0;

overallWrongAnswers =
parsedState.wrongAnswers || 0;

overallAttempts =
parsedState.attemptedQuestions || 0;

overallXP =
parsedState.totalXP || 0;

correctAnswers = 0;

wrongAnswers = 0;

attemptedQuestions = 0;

totalXP = 0;

  shuffleMode =
  parsedState.shuffleMode || false;

  languageFilter.value =
  parsedState.selectedLanguage || "All";

  difficultyFilter.value =
  parsedState.selectedDifficulty || "All";

  questionTypeFilter.value =
  parsedState.selectedQuestionType || "All";

  if(shuffleMode){

    shuffleToggle.classList.add(
      "active"
    );
  }

  filterQuestions(false);

  updateStats();
}

/* =========================
   FILTER QUESTIONS
========================= */

function filterQuestions(reset = true) {

  const selectedLanguage =
  languageFilter.value;

  const selectedDifficulty =
  difficultyFilter.value;

  const selectedType =
  questionTypeFilter.value;

  filteredQuestions =
  questions.filter(question => {

    const languageMatch =
    selectedLanguage === "All" ||
    question.language === selectedLanguage;

    const difficultyMatch =
    selectedDifficulty === "All" ||
    question.difficulty === selectedDifficulty;

    const typeMatch =
    selectedType === "All" ||
    question.type === selectedType;

    return (
      languageMatch &&
      difficultyMatch &&
      typeMatch
    );

  });

    if(shuffleMode){

    filteredQuestions =
    shuffleArray(filteredQuestions);
  }

  if(reset){

    resetQuiz(false);

  }

  renderQuestion();
}

/* =========================
   EMPTY STATE
========================= */

function renderEmptyState() {

  questionCount.textContent =
  "0 Questions";

  questionTitle.textContent =
  "No matching questions found.";

  questionCode.textContent =
  "";

  optionsContainer.innerHTML = `

    <div class="empty-state">

      Try changing filters to load questions.

    </div>

  `;

  syntaxSection.classList.add(
    "hidden"
  );

  mcqSection.classList.remove(
    "hidden"
  );

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

  editor.setValue("");

  editorWrapper.classList.remove(
  "editor-correct",
  "editor-wrong"
);

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

  /* CODE */

  questionCode.className = "";

if(currentQuestion.language === "C"){

  questionCode.classList.add(
    "language-c"
  );
}

else if(currentQuestion.language === "C++"){

  questionCode.classList.add(
    "language-cpp"
  );
}

else if(currentQuestion.language === "Python"){

  questionCode.classList.add(
    "language-python"
  );
}

else if(currentQuestion.language === "Java"){

  questionCode.classList.add(
    "language-java"
  );
}

else{

  questionCode.classList.add(
    "language-c"
  );
}

questionCode.textContent =
currentQuestion.code;

Prism.highlightElement(
  questionCode
);

  /* TYPE RENDERING */

if(currentQuestion.type === "syntax"){

    mcqSection.classList.add(
      "hidden"
    );

    syntaxSection.classList.remove(
      "hidden"
    );

    if(
      currentQuestion.language ===
      "C"
    ){

      editor.setOption(
        "mode",
        "text/x-csrc"
      );
    }

    else if(
      currentQuestion.language ===
      "C++"
    ){

      editor.setOption(
        "mode",
        "text/x-c++src"
      );
    }

    else if(
      currentQuestion.language ===
      "Python"
    ){

      editor.setOption(
        "mode",
        "python"
      );
    }

    else if(
      currentQuestion.language ===
      "Java"
    ){

      editor.setOption(
        "mode",
        "text/x-java"
      );
    }

} else {

    syntaxSection.classList.add(
      "hidden"
    );

    mcqSection.classList.remove(
      "hidden"
    );
}

  /* MCQ OPTIONS */

  optionsContainer.innerHTML = "";

  if(currentQuestion.type === "mcq"){

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

        button.addEventListener(
          "click",
          () => {

            if(submitBtn.disabled)
            return;

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

}

/* =========================
   UPDATE STATS
========================= */

function updateStats() {

  solvedCount.textContent =
  overallCorrectAnswers;

  attemptedCount.textContent =
  overallAttempts;

  wrongCount.textContent =
  overallWrongAnswers;

  const accuracy =
  calculateAccuracy(
    overallCorrectAnswers,
    overallAttempts
  );

  accuracyValue.textContent =
  `${accuracy}%`;

  progressCircle.style.background =
`
conic-gradient(
  #22C55E 0% ${accuracy}%,
  rgba(255,255,255,0.06) ${accuracy}% 100%
)
`;

  xpValue.textContent =
  `⭐ ${overallXP} XP`;

  const level =
  calculateLevel(
    overallXP
  );

  levelText.textContent =
  `Level ${level}`;

  const xpProgress =
  calculateXPProgress(
    overallXP
  );

  xpFill.style.width =
  `${(xpProgress / 50) * 100}%`;
}

/* =========================
   SHOW HINT
========================= */

function showHint() {

  const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  showToast(
  currentQuestion.hint
);
}

/* =========================
   SUBMIT ANSWER
========================= */

function submitAnswer() {

  const currentQuestion =
  filteredQuestions[currentQuestionIndex];

  attemptedQuestions++;

  /* =====================
     MCQ MODE
  ===================== */

  if(currentQuestion.type === "mcq"){

    if(!selectedOption){

      showToast(
  "Please select an option first."
);

      attemptedQuestions--;

      return;
    }

    const optionCards =
    document.querySelectorAll(
      ".option-card"
    );

    optionCards.forEach(card => {

      card.classList.add(
        "disabled"
      );

      const optionText =
      card.querySelector("p")
      .textContent;

      if(
        optionText ===
        currentQuestion.correctAnswer
      ){

        card.classList.add(
          "correct"
        );

      }

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

    if(
      selectedOption ===
      currentQuestion.correctAnswer
    ){

      correctAnswers++;

      score++;

      totalXP +=
      currentQuestion.xp;

      overallCorrectAnswers++;

overallAttempts++;

overallXP += currentQuestion.xp;

    } else {

      wrongAnswers++;

      overallWrongAnswers++;

overallAttempts++;
    }

  }

  /* =====================
     SYNTAX MODE
  ===================== */

  if(currentQuestion.type === "syntax"){

    const userAnswer =
editor.getValue().trim();

    if(userAnswer === ""){

      showToast(
  "Please write your answer first."
);

      attemptedQuestions--;

      return;
    }

    const normalizedUser =
    userAnswer.replace(/\s+/g,"");

    let isCorrect = false;

    const validation =
    currentQuestion.validation;

    // syntaxAnswer.disabled = true;

    /* =====================
       INCLUDES VALIDATION
    ===================== */

    if(validation.type === "includes"){

      isCorrect =
      validation.acceptedAnswers.some(
        answer => {

          const normalizedAnswer =
          answer.replace(/\s+/g,"");

          return normalizedUser.includes(
            normalizedAnswer
          );

        }
      );
    }

    /* =====================
       REGEX VALIDATION
    ===================== */

    if(validation.type === "regex"){

      const regex =
      new RegExp(validation.pattern);

      isCorrect =
      regex.test(userAnswer);
    }

    /* =====================
       TOKEN VALIDATION
    ===================== */

    if(validation.type === "tokens"){

      isCorrect =
      validation.requiredTokens.every(
        token => {

          return normalizedUser.includes(
            token.replace(/\s+/g,"")
          );

        }
      );
    }

    /* =====================
       RESULT
    ===================== */

    if(isCorrect){

      correctAnswers++;

      score++;

      totalXP +=
      currentQuestion.xp;

      overallCorrectAnswers++;

overallAttempts++;

overallXP += currentQuestion.xp;

editorWrapper.classList.remove(
  "editor-wrong"
);

editorWrapper.classList.add(
  "editor-correct"
);

      // syntaxAnswer.style.borderColor =
      // "#22C55E";

    } else {

      wrongAnswers++;

      overallWrongAnswers++;

overallAttempts++;

editorWrapper.classList.remove(
  "editor-correct"
);

editorWrapper.classList.add(
  "editor-wrong"
);

      // syntaxAnswer.style.borderColor =
      // "#EF4444";
    }

  }

  /* EXPLANATION */

  explanationText.textContent =
  currentQuestion.explanation;

  explanationBox.classList.remove(
    "hidden"
  );

  updateStats();

saveQuizState();

submitBtn.disabled = true;
}

/* =========================
   RESULT MODAL
========================= */

function showResultModal() {

  const accuracy =
  calculateAccuracy(
    correctAnswers,
    attemptedQuestions
  );

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

  // syntaxAnswer.disabled = false;

  // syntaxAnswer.style.borderColor =
  // "rgba(34,211,238,0.10)";

  editor.setValue("");

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

    showToast(
  "Please submit your answer first."
);

    return;
  }

  currentQuestionIndex++;

  // syntaxAnswer.disabled = false;

  // syntaxAnswer.style.borderColor =
  // "rgba(34,211,238,0.10)";
  editor.setValue("");

  if(
    currentQuestionIndex >=
    filteredQuestions.length
  ){

    showResultModal();

    return;
  }

  renderQuestion();

saveQuizState();
}

/* =========================
   SHUFFLE TOGGLE
========================= */

shuffleToggle.addEventListener(
  "click",
  () => {

    shuffleMode = !shuffleMode;

    shuffleToggle.classList.toggle(
      "active"
    );

    filterQuestions();

saveQuizState();

  }
);

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

saveQuizState();

  }
);

languageFilter.addEventListener(
  "change",
  ()=>{

    filterQuestions();

    saveQuizState();

  }
);

difficultyFilter.addEventListener(
  "change",
  ()=>{

    filterQuestions();

    saveQuizState();

  }
);

questionTypeFilter.addEventListener(
  "change",
  ()=>{

    filterQuestions();

    saveQuizState();

  }
);

/* =========================
   NAV DRAWER
========================= */

if(menuToggle){

  menuToggle.addEventListener(
    "click",
    (e)=>{

      e.stopPropagation();

      navDrawer.classList.toggle(
        "hidden"
      );

    }
  );
}

window.addEventListener(
  "click",
  (e)=>{

    if(
      navDrawer &&
      menuToggle &&
      !navDrawer.contains(e.target) &&
      !menuToggle.contains(e.target)
    ){

      navDrawer.classList.add(
        "hidden"
      );
    }
  }
);

/* =========================
   LOAD USER PROFILE
========================= */

onAuthStateChanged(
  auth,
  (user)=>{

    if(user){

      currentUser = user;

      if(
  user.photoURL &&
  profileAvatar
){

  profileAvatar.src =
  user.photoURL;
}

loadQuizState();

renderQuestion();

updateStats();

    }
  }
);

/* =========================
   INITIAL LOAD
========================= */

window.addEventListener(
  "load",
  () => {

    lucide.createIcons();

    setTimeout(()=>{

      if(dashboardLoader){

        dashboardLoader.classList.add(
          "hidden"
        );
      }

      const practiceLayout =
      document.querySelector(
        ".practice-layout"
      );

      if(practiceLayout){

        practiceLayout.classList.add(
          "loaded"
        );
      }

      setTimeout(()=>{

        if(dashboardLoader){

          dashboardLoader.remove();

        }

      }, 600);

    }, 900);

  }
);