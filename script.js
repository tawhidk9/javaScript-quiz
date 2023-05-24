//Countdown Timer
var countDown = document.querySelector('.timer');
var timeLeft = 80;

function countTimer() {
    var timeInterval = setInterval(function () {
      countDown.textContent = "Time: " + timeLeft
      timeLeft--;
  
      if(timeLeft < 0){
        countDown.textContent = "";
        clearInterval(timeInterval);
        displayMessage()
      }
    }, 1000);
  }

//Created variable for quiz questions and set scorecount to 0
var score = 0;
var quizQ = [
	{
		question: "Commonly used primitive data types DO NO include",
		answers:['Strings', 'Booleans', 'Interger', 'Alerts'],
		correctAnswer: 3
	},
	{
		question: "An IF/ELSE statement is enclosed within",
		answers: ['Curly brackets', 'Square brackets', 'Quotations', 'Parenthesis'],
		correctAnswer: 0
	},
    {
		question: "An array in JavaScript is used to store",
		answers: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
		correctAnswer: 3
	},
    {
		question: "A useful tool used during development and debugging for printing content to the debugger is ",
		answers: ['JavaScript', 'console.log', 'terminal/bash', 'None of the above'],
		correctAnswer: 1
	}

];

//display the questions
var currentQ = 0 //track current question index
function displayQuestion(){
	var questionEl = document.getElementById("question")
	var choicesEl = document.getElementById("choices")
	var currentQuestionEl = quizQ[currentQ];

	//questionEl text is whatever the currentQuestionEl currentQ value is
	questionEl.textContent = currentQuestionEl.question; 
	//choices get input into html 
	choicesEl.innerHTML = "";

	//for each choice create a list item and make clickable 
	currentQuestionEl.answers.forEach(function(choice, index) {
		var li = document.createElement("li");
		li.textContent = choice;
		li.addEventListener("click", function () {
			checkAnswer(index);
		});
		choicesEl.appendChild(li);
	});
}

//check answers to displayed questions
function checkAnswer(choiceIndex){
	var corrAnswerIndex = quizQ[currentQ].correctAnswer;

  if (choiceIndex === corrAnswerIndex) {
    // User selected the correct answer
    // Add code for handling correct answers or scoring
  } else {
    // User selected the wrong answer
    // Add code for handling incorrect answers or scoring
  }

  currentQ++; // Move to the next question

  if (currentQ < quizQ.length) {
    displayQuestion();
  } else {
    // Quiz is finished, display results or perform any final actions
  }
	
}

function startGame(){
	countTimer();
	displayQuestion();
}






// for(currentQ; i < quizQ.length; currentQ++){
//     //ask user the question
// }
// function checkAnswer(event){
// 	event.target.textContent = "Alerts";
// 	if (event.target.textContent === quizQ[currentQ].correctAnswer){
// 		currentQ++;
// 		score+=25;
// 		nextQuestion;
// 	}else{
// 		currentQ++;
// 		timeLeft-=10;
// 	}
// }

// function startGame(){
// 	countTimer();
// 	var displayQ = document.querySelector("#quiz");
// 	displayQ.textContent = quizQ[currentQ].question;
	
// 	var displayA = document.querySelectorAll(".answer");
// 	displayA.forEach(function(currentbtn, index){
// 		currentbtn.textContent = quizQ[currentQ].answers[index];
// 		currentbtn.addEventListener("click", function(event){checkAnswer(event)});
// 	})
// }



//Call functions
