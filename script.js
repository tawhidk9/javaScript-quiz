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
var currentQ = 0
var score = 0;
var quizQ = [
	{
		question: "Commonly used primitive data types DO NO include",
		answers: {
			a:'Strings',
			b:'Booleans',
			c:'Interger',
            d:'Alerts'

		},
			correctAnswer: 'd'
	},
	{
		question: "An IF/ELSE statement is enclosed within",
		answers: {
			a: 'Curly brackets',
			b: 'Square brackets',
			c: 'Quotations',
            d: 'Parenthesis'
		},
		correctAnswer: 'a'
	},
    {
		question: "An array in JavaScript is used to store",
		answers: {
			a: 'Numbers and strings',
			b: 'Other arrays',
			c: 'Booleans',
            d: 'All of the above'
		},
		correctAnswer: 'd'
	},
    {
		question: "A useful tool used during development and debugging for printing content to the debugger is ",
		answers: {
			a: 'JavaScript',
			b: 'console.log',
			c: 'terminal/bash',
            d: 'None of the above'
		},
		correctAnswer: 'b'
	}

];


// for(currentQ; i < quizQ.length; currentQ++){
//     //ask user the question
// }
function checkAnswer(event){
	event.target.textContent = "Alerts";
	if (event.target.textContent === quizQ[currentQ].correctAnswer){
		currentQ++;
		score+=25;
		nextQuestion;
	}else{
		currentQ++;
		timeLeft-=10;
	}
}

function startGame(){
	countTimer();
	var displayQ = document.querySelector("#quiz");
	displayQ.textContent = quizQ[currentQ].question;
	
	var displayA = document.querySelectorAll(".answer");
	displayA.forEach(function(currentbtn, index){
		currentbtn.textContent = quizQ[currentQ].answers[index];
		currentbtn.addEventListener("click", function(event){checkAnswer(event)});
	})
}



//Call functions
startGame();