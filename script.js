//Countdown Timer
var countDown = document.querySelector('.timer');

function countTimer() {
    var timeLeft = 80;
  
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
var quizQ = [
	{
		question: "Commonly used primitive data types DO NO include",
		answers: {
			a: 'Strings',
			b: 'Booleans',
			c: 'Interger',
            d: 'Alerts'
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
var score = 0;

for(var i=0; i < quizQ.length; i++){
    //ask user the question

}


//Now to show the questions created

//Call functions
countTimer();