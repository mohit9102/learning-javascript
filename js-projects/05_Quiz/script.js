// Waits for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Buttons and containers
  const startBtn = document.getElementById("start-btn"); // Button to start the quiz
  const nextBtn = document.getElementById("next-btn"); // Button to go to the next question
  const restartBtn = document.getElementById("restart-btn"); // Button to restart the quiz
  const questionContainer = document.getElementById("question-container"); // Container for the current question
  const questionText = document.getElementById("question-text"); // Displays the question text
  const choicesList = document.getElementById("choices-list"); // Holds the list of answer choices
  const resultContainer = document.getElementById("result-container"); // Container for showing the result
  const scoreDisplay = document.getElementById("score"); // Displays the final score

  // Array of questions with choices and correct answers
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  // Track the current question index and score
  let currentQuestionIndex = 0; // Index of the current question
  let score = 0; // Tracks the user's score

  // Event listener for the Start Quiz button
  startBtn.addEventListener("click", startQuiz);

  // Event listener for the Next Question button
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
      showQuestion(); // Display the next question
    } else {
      showResult(); // If no more questions, show the result
    }
  });

  // Event listener for the Restart Quiz button
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    resultContainer.classList.add("hidden"); // Hide the result container
    startQuiz(); // Restart the quiz
  });

  // Function to start the quiz
  function startQuiz() {
    startBtn.classList.add("hidden"); // Hide the Start button
    resultContainer.classList.add("hidden"); // Ensure result is hidden
    questionContainer.classList.remove("hidden"); // Show question container
    showQuestion(); // Display the first question
  }

  // Function to display the current question and its choices
  function showQuestion() {
    nextBtn.classList.add("hidden"); // Hide the Next button initially
    questionText.textContent = questions[currentQuestionIndex].question; // Display the question text
    choicesList.innerHTML = ""; // Clear any existing choices

    // Loop through the choices and add them to the list
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li"); // Create a list item for the choice
      li.textContent = choice; // Set the choice text
      choicesList.appendChild(li); // Add the choice to the list
      li.addEventListener("click", () => selectAnswer(choice)); // Handle choice selection
    });
  }

  // Function to handle the user's choice
  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer; // Get the correct answer for the current question
    if (choice === correctAnswer) {
      score++; // Increment the score if the answer is correct
    }
    nextBtn.classList.remove("hidden"); // Show the Next button
  }

  // Function to display the quiz result
  function showResult() {
    questionContainer.classList.add("hidden"); // Hide the question container
    resultContainer.classList.remove("hidden"); // Show the result container
    scoreDisplay.textContent = `${score} out of ${questions.length}`; // Display the score
  }
});
