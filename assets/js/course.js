const showMoreButton = document.getElementById("show-more");
const additionalContent = document.querySelector(".additional-content");

showMoreButton.addEventListener("click", () => {
   if (additionalContent.style.display === "none" || additionalContent.style.display === "") {
      additionalContent.style.display = "flex";
      showMoreButton.textContent = "- Show Less";
   } else {
      additionalContent.style.display = "none";
      showMoreButton.textContent = "+ Show More";
   }
});