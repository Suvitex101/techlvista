const replyTo = document.querySelectorAll(".reply-reply");
const displayReply = document.querySelector(".down-reply");

replyTo.forEach(function(replyTo) {
	replyTo.addEventListener('click', () => {
		displayReply.classList.toggle("active");
	});
});