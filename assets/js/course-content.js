const contentHeaders = document.querySelectorAll('.content-heading');
const contentBelow = document.querySelectorAll('.content-under');
const exUp = document.querySelectorAll('.exchange-up');
const exDown = document.querySelectorAll('.exchange-down');

contentHeaders.forEach((contentHeader) => {
	contentHeader.addEventListener('click', () => {
		const contentUnder = contentHeader.nextElementSibling;
		contentUnder.classList.toggle('active');

		const exchangeUp = contentHeader.querySelector('.exchange-up');
      const exchangeDown = contentHeader.querySelector('.exchange-down');
      // exchangeUp.classList.toggle('active');
      
		if (exchangeUp.style.display === "none" || exchangeUp.style.display === "") {
			exchangeDown.style.display === "block"
		} else {
			exchangeDown.style.display === "none"
		}
	});
});
