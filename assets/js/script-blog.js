const displayReplies = document.querySelectorAll(".pointer");
const typeReplies = document.querySelectorAll(".reply-div");

displayReplies.forEach((displayReply, index) => {
    displayReply.addEventListener('click', () => {
        typeReplies[index].classList.toggle('active');
    });
});
