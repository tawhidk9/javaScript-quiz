//Created global variable for quiz questions
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

//Now to show the questions created
function displayQuestions(questions, quizContainer)
