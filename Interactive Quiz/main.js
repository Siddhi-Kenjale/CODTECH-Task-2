const quizData = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
      correct: "Hyper Text Markup Language"
    },
    {
      question: "What is the correct CSS syntax to change the background color of an element?",
      choices: ["background-color: red;", "color: background red;", "bg-color: red;", "background: color red;"],
      correct: "background-color: red;"
    },
    {
      question: "Which JavaScript function is used to write text in an alert box?",
      choices: ["alert()", "msg()", "prompt()", "display()"],
      correct: "alert()"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      choices: ["number", "character", "boolean", "string"],
      correct: "character"
    },
    {
      question: "Which is the correct JavaScript syntax to change the content of an HTML element with id 'demo'?",
      choices: ["document.getElementByName('demo').innerHTML = 'Hello World!';", "document.getElement('demo').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElementByIdName('demo').innerHTML = 'Hello World!';"],
      correct: "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById('quiz');
  const nextButton = document.getElementById('next-btn');
  const resultsContainer = document.getElementById('results');
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionHTML = `
      <div class="question">${currentQuestion.question}</div>
      <ul class="choices">
        ${currentQuestion.choices.map(choice => `<li><label><input type="radio" name="choice" value="${choice}"> ${choice}</label></li>`).join('')}
      </ul>
    `;
    quizContainer.innerHTML = questionHTML;
  }
  
  function showResults() {
    quizContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
  }
  
  function handleNextButton() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) {
      alert("Please select an answer!");
      return;
    }
  
    if (selectedChoice.value === quizData[currentQuestionIndex].correct) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  nextButton.addEventListener('click', handleNextButton);
  
  loadQuestion();
  