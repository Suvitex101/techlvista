var askQuestion = document.querySelector(".your-question");
var questionContainer = document.querySelector(".display-question-container");
var closeQuestion = document.querySelector(".close")

askQuestion.addEventListener('click', () => {
	console.log("Clicked!");
	questionContainer.style.display = "flex";
});

closeQuestion.addEventListener('click', () => {
	questionContainer.style.display = "none";
});
